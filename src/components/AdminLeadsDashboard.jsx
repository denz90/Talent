import React, { useState, useEffect, useMemo, useCallback } from 'react';
import {
  Users,
  Search,
  Filter,
  RefreshCw,
  Download,
  Mail,
  Building,
  Calendar,
  CheckCircle2,
  Clock,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  FileText,
  Lock,
  ArrowUpDown,
  Send,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react';
import { API_BASE_URL } from '../config';

export default function AdminLeadsDashboard({ onLoginClick, onBack }) {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isUnauthorized, setIsUnauthorized] = useState(false);

  // Pagination state
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(50);
  const [hasMore, setHasMore] = useState(true);

  // Search & Filter state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLevelFilter, setSelectedLevelFilter] = useState('ALL');
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('ALL');
  const [sortOrder, setSortOrder] = useState('newest'); // 'newest' | 'oldest' | 'name'

  // Expandable rows state (lead id set)
  const [expandedLeadIds, setExpandedLeadIds] = useState(new Set());

  // Copy feedback state
  const [copiedEmail, setCopiedEmail] = useState(null);

  const fetchLeads = useCallback(async () => {
    const token = localStorage.getItem('hawkman_token');

    if (!token) {
      setIsUnauthorized(true);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);
    setIsUnauthorized(false);

    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/leads?skip=${skip}&limit=${limit}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 401 || response.status === 403) {
        setIsUnauthorized(true);
        throw new Error('Unauthorized. You must be signed in with an admin account to view captured leads.');
      }

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.detail || `Failed to fetch leads (Status: ${response.status})`);
      }

      const data = await response.json();
      const leadsArray = Array.isArray(data) ? data : (data.leads || []);
      setLeads(leadsArray);

      // If returned fewer than limit, we reached the end
      if (leadsArray.length < limit) {
        setHasMore(false);
      } else {
        setHasMore(true);
      }
    } catch (err) {
      console.error('Error fetching admin leads:', err);
      setError(err.message || 'An error occurred while loading leads.');
    } finally {
      setLoading(false);
    }
  }, [skip, limit]);

  useEffect(() => {
    fetchLeads();
  }, [fetchLeads]);

  const toggleExpandLead = (id) => {
    setExpandedLeadIds((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const handleCopyEmail = (email) => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(email);
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    }
  };

  // Export to CSV
  const handleExportCSV = () => {
    if (!leads || leads.length === 0) return;

    const headers = [
      'Lead ID',
      'Name',
      'Email',
      'Organization',
      'Created At',
      'Latest Experience Level',
      'Latest Lead Magnet',
      'Latest Delivery Status',
      'Deliveries Count',
    ];

    const rows = leads.map((lead) => {
      const latestDelivery = lead.deliveries?.[0] || {};
      return [
        lead.id,
        `"${(lead.name || '').replace(/"/g, '""')}"`,
        `"${(lead.email || '').replace(/"/g, '""')}"`,
        `"${(lead.organization || '').replace(/"/g, '""')}"`,
        `"${lead.created_at || ''}"`,
        `"${latestDelivery.experience_level || ''}"`,
        `"${latestDelivery.lead_magnet || ''}"`,
        `"${latestDelivery.delivery_status || ''}"`,
        lead.deliveries?.length || 0,
      ];
    });

    const csvContent = [headers.join(','), ...rows.map((r) => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `leads_export_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Filtered & Sorted Leads
  const processedLeads = useMemo(() => {
    let result = [...leads];

    // Filter by search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (lead) =>
          lead.name?.toLowerCase().includes(q) ||
          lead.email?.toLowerCase().includes(q) ||
          lead.organization?.toLowerCase().includes(q)
      );
    }

    // Filter by Experience Level
    if (selectedLevelFilter !== 'ALL') {
      result = result.filter((lead) => {
        const matchesDelivery = lead.deliveries?.some(
          (d) => d.experience_level?.toUpperCase() === selectedLevelFilter
        );
        return matchesDelivery;
      });
    }

    // Filter by Delivery Status
    if (selectedStatusFilter !== 'ALL') {
      result = result.filter((lead) => {
        const matchesStatus = lead.deliveries?.some(
          (d) => d.delivery_status?.toUpperCase() === selectedStatusFilter
        );
        return matchesStatus;
      });
    }

    // Sort order
    result.sort((a, b) => {
      if (sortOrder === 'newest') {
        return new Date(b.created_at || 0) - new Date(a.created_at || 0);
      }
      if (sortOrder === 'oldest') {
        return new Date(a.created_at || 0) - new Date(b.created_at || 0);
      }
      if (sortOrder === 'name') {
        return (a.name || '').localeCompare(b.name || '');
      }
      return 0;
    });

    return result;
  }, [leads, searchQuery, selectedLevelFilter, selectedStatusFilter, sortOrder]);

  // Summary Metrics
  const metrics = useMemo(() => {
    let totalDeliveries = 0;
    let starterCount = 0;
    let deeperCount = 0;
    let sentCount = 0;
    let pendingCount = 0;
    let failedCount = 0;

    leads.forEach((lead) => {
      if (Array.isArray(lead.deliveries)) {
        totalDeliveries += lead.deliveries.length;
        lead.deliveries.forEach((d) => {
          if (d.experience_level === 'BEGINNER' || d.lead_magnet?.includes('Starter')) {
            starterCount += 1;
          } else if (d.experience_level === 'ADVANCED' || d.lead_magnet?.includes('Deeper')) {
            deeperCount += 1;
          }

          const status = (d.delivery_status || '').toUpperCase();
          if (status === 'SENT') sentCount += 1;
          else if (status === 'PENDING') pendingCount += 1;
          else if (status === 'FAILED' || d.error_message) failedCount += 1;
        });
      }
    });

    return {
      totalLeads: leads.length,
      totalDeliveries,
      starterCount,
      deeperCount,
      sentCount,
      pendingCount,
      failedCount,
    };
  }, [leads]);

  const formatDate = (isoString) => {
    if (!isoString) return 'N/A';
    try {
      const date = new Date(isoString);
      return new Intl.DateTimeFormat('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
      }).format(date);
    } catch {
      return isoString;
    }
  };

  // UNAUTHORIZED STATE
  if (isUnauthorized) {
    return (
      <div className="min-h-[500px] flex items-center justify-center p-6 text-center">
        <div className="max-w-md w-full bg-site-bg border border-site-accent rounded-3xl p-8 shadow-xl">
          <div className="w-16 h-16 bg-rose-500/10 border-2 border-rose-500/20 text-rose-500 rounded-full flex items-center justify-center mx-auto mb-5">
            <Lock className="w-8 h-8" />
          </div>
          <h2 className="text-xl font-bold text-site-text mb-2">Protected Admin View</h2>
          <p className="text-sm text-site-text/70 mb-6 leading-relaxed">
            The Leads Dashboard requires admin authorization. Please log in with an administrator account to view captured leads and delivery logs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            {onLoginClick && (
              <button
                onClick={onLoginClick}
                className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider bg-site-primary text-site-bg hover:opacity-90 transition-all cursor-pointer shadow-sm"
              >
                Sign In
              </button>
            )}
            {onBack && (
              <button
                onClick={onBack}
                className="px-6 py-2.5 rounded-xl font-bold text-xs uppercase tracking-wider border border-site-accent text-site-text/80 hover:text-site-text hover:bg-site-accent/20 transition-all cursor-pointer"
              >
                Back to Home
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 text-site-text animate-in fade-in duration-300">
      {/* Top Header & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-site-accent">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold uppercase tracking-widest text-site-primary flex items-center gap-1.5 bg-site-primary/10 border border-site-primary/30 px-2.5 py-1 rounded-full">
              <ShieldCheck className="w-3.5 h-3.5" />
              Admin Portal
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-site-text tracking-tight">
            Captured Leads & Deliveries
          </h1>
          <p className="text-xs sm:text-sm text-site-text/70 mt-1">
            Real-time monitoring of leads captured via <code className="text-site-primary font-mono bg-site-accent/40 px-1 py-0.5 rounded text-[11px]">/api/opt-in</code> and automated PDF delivery dispatches.
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => fetchLeads()}
            disabled={loading}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-site-bg border border-site-accent hover:border-site-primary hover:bg-site-accent/20 text-site-text transition-all cursor-pointer shadow-xs disabled:opacity-50"
            title="Refresh Leads from Server"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin text-site-primary' : ''}`} />
            <span>Refresh</span>
          </button>

          <button
            onClick={handleExportCSV}
            disabled={leads.length === 0}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-site-primary text-site-bg hover:opacity-90 active:scale-98 transition-all cursor-pointer shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            title="Download Leads as CSV"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
        </div>
      </div>

      {/* METRICS ROW */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
        {/* Metric 1 */}
        <div className="bg-site-bg border border-site-accent rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-site-text/60 mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider">Total Leads</span>
            <Users className="w-4 h-4 text-site-primary" />
          </div>
          <p className="text-2xl font-extrabold text-site-text tracking-tight">
            {metrics.totalLeads}
          </p>
          <p className="text-[10px] text-site-text/50 mt-1">Captured opt-in contacts</p>
        </div>

        {/* Metric 2 */}
        <div className="bg-site-bg border border-site-accent rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-site-text/60 mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider">Packs Sent</span>
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
          </div>
          <p className="text-2xl font-extrabold text-emerald-500 tracking-tight">
            {metrics.sentCount}
          </p>
          <p className="text-[10px] text-site-text/50 mt-1">
            {metrics.pendingCount > 0 ? `${metrics.pendingCount} pending delivery` : 'All emails dispatched'}
          </p>
        </div>

        {/* Metric 3 */}
        <div className="bg-site-bg border border-site-accent rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-site-text/60 mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider">Starter Packs</span>
            <FileText className="w-4 h-4 text-blue-500" />
          </div>
          <p className="text-2xl font-extrabold text-site-text tracking-tight">
            {metrics.starterCount}
          </p>
          <p className="text-[10px] text-site-text/50 mt-1">Beginner audience</p>
        </div>

        {/* Metric 4 */}
        <div className="bg-site-bg border border-site-accent rounded-2xl p-4 shadow-xs">
          <div className="flex items-center justify-between text-site-text/60 mb-1.5">
            <span className="text-[11px] font-bold uppercase tracking-wider">Deeper Packs</span>
            <Sparkles className="w-4 h-4 text-purple-500" />
          </div>
          <p className="text-2xl font-extrabold text-site-text tracking-tight">
            {metrics.deeperCount}
          </p>
          <p className="text-[10px] text-site-text/50 mt-1">Advanced audience</p>
        </div>
      </div>

      {/* FILTER & SEARCH BAR */}
      <div className="bg-site-bg border border-site-accent rounded-2xl p-4 shadow-xs space-y-3 sm:space-y-0 sm:flex sm:items-center sm:gap-4">
        {/* Search */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-site-text/40 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search leads by name, email, or organization..."
            className="w-full pl-10 pr-4 py-2 bg-site-bg border border-site-accent rounded-xl text-xs sm:text-sm text-site-text placeholder:text-site-text/30 focus:outline-none focus:border-site-primary focus:ring-1 focus:ring-site-primary transition-all"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          {/* Level Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-site-text/60 uppercase">Level:</span>
            <select
              value={selectedLevelFilter}
              onChange={(e) => setSelectedLevelFilter(e.target.value)}
              className="px-2.5 py-1.5 bg-site-bg border border-site-accent rounded-xl text-xs text-site-text focus:outline-none focus:border-site-primary cursor-pointer"
            >
              <option value="ALL">All Levels</option>
              <option value="BEGINNER">Beginner (Starter)</option>
              <option value="ADVANCED">Advanced (Deeper)</option>
            </select>
          </div>

          {/* Delivery Status Filter */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-site-text/60 uppercase">Status:</span>
            <select
              value={selectedStatusFilter}
              onChange={(e) => setSelectedStatusFilter(e.target.value)}
              className="px-2.5 py-1.5 bg-site-bg border border-site-accent rounded-xl text-xs text-site-text focus:outline-none focus:border-site-primary cursor-pointer"
            >
              <option value="ALL">All Statuses</option>
              <option value="SENT">Sent</option>
              <option value="PENDING">Pending</option>
              <option value="FAILED">Failed</option>
            </select>
          </div>

          {/* Sort */}
          <div className="flex items-center gap-1.5">
            <span className="text-[11px] font-bold text-site-text/60 uppercase">Sort:</span>
            <select
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              className="px-2.5 py-1.5 bg-site-bg border border-site-accent rounded-xl text-xs text-site-text focus:outline-none focus:border-site-primary cursor-pointer"
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="name">Name (A-Z)</option>
            </select>
          </div>
        </div>
      </div>

      {/* ERROR ALERT */}
      {error && (
        <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/30 text-rose-500 text-xs sm:text-sm font-semibold flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0" />
            <span>{error}</span>
          </div>
          <button
            onClick={() => fetchLeads()}
            className="px-3 py-1 bg-rose-500 text-white rounded-lg text-xs font-bold hover:opacity-90 cursor-pointer"
          >
            Retry
          </button>
        </div>
      )}

      {/* LEADS TABLE / LIST */}
      <div className="bg-site-bg border border-site-accent rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="py-20 flex flex-col items-center justify-center text-center">
            <div className="w-8 h-8 border-3 border-site-primary border-t-transparent rounded-full animate-spin mb-3" />
            <p className="text-xs font-bold text-site-text/70 uppercase tracking-wider">Loading Captured Leads...</p>
          </div>
        ) : processedLeads.length === 0 ? (
          <div className="py-20 text-center px-4">
            <div className="w-12 h-12 rounded-full bg-site-accent/40 text-site-text/40 flex items-center justify-center mx-auto mb-3">
              <Users className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-site-text mb-1">No Leads Found</h3>
            <p className="text-xs text-site-text/60 max-w-sm mx-auto">
              {searchQuery || selectedLevelFilter !== 'ALL' || selectedStatusFilter !== 'ALL'
                ? 'No captured leads matched your current filters. Try resetting the search or filters.'
                : 'No leads have been captured yet. As visitors submit the opt-in form, their details and delivery records will appear here.'}
            </p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-site-accent/30 text-site-text/70 uppercase tracking-wider text-[10px] font-extrabold border-b border-site-accent">
                <tr>
                  <th className="py-3 px-4 w-12 text-center">#</th>
                  <th className="py-3 px-4">Lead</th>
                  <th className="py-3 px-4">Organization</th>
                  <th className="py-3 px-4">Level / Magnet</th>
                  <th className="py-3 px-4">Delivery Status</th>
                  <th className="py-3 px-4">Date Opted In</th>
                  <th className="py-3 px-4 text-center">History</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-site-accent/50 font-medium">
                {processedLeads.map((lead) => {
                  const isExpanded = expandedLeadIds.has(lead.id);
                  const latestDelivery = lead.deliveries?.[0];
                  const deliveryCount = lead.deliveries?.length || 0;
                  const level = latestDelivery?.experience_level || 'BEGINNER';
                  const status = (latestDelivery?.delivery_status || 'PENDING').toUpperCase();

                  return (
                    <React.Fragment key={lead.id}>
                      <tr className="hover:bg-site-accent/20 transition-colors">
                        {/* ID */}
                        <td className="py-3.5 px-4 font-mono text-[11px] text-site-text/50 text-center font-bold">
                          {lead.id}
                        </td>

                        {/* Name & Email */}
                        <td className="py-3.5 px-4">
                          <div className="font-bold text-site-text text-sm">{lead.name || 'Anonymous'}</div>
                          <div className="flex items-center gap-1.5 text-site-text/60 mt-0.5">
                            <span className="truncate max-w-[220px]">{lead.email}</span>
                            <button
                              onClick={() => handleCopyEmail(lead.email)}
                              className="text-site-text/40 hover:text-site-primary transition-colors cursor-pointer"
                              title="Copy email"
                            >
                              {copiedEmail === lead.email ? (
                                <Check className="w-3 h-3 text-emerald-500" />
                              ) : (
                                <Copy className="w-3 h-3" />
                              )}
                            </button>
                          </div>
                        </td>

                        {/* Organization */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-1.5 text-site-text font-semibold">
                            <Building className="w-3.5 h-3.5 text-site-text/40 shrink-0" />
                            <span className="truncate max-w-[180px]">{lead.organization || 'Individual'}</span>
                          </div>
                        </td>

                        {/* Level & Magnet */}
                        <td className="py-3.5 px-4">
                          <div className="flex flex-col gap-1 items-start">
                            <span
                              className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider ${
                                level === 'BEGINNER'
                                  ? 'bg-blue-500/15 text-blue-600 dark:text-blue-400 border border-blue-500/30'
                                  : 'bg-purple-500/15 text-purple-600 dark:text-purple-400 border border-purple-500/30'
                              }`}
                            >
                              {level}
                            </span>
                            {latestDelivery?.lead_magnet && (
                              <span className="text-[10px] text-site-text/60 truncate max-w-[160px]">
                                {latestDelivery.lead_magnet.replace(/_/g, ' ')}
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Delivery Status */}
                        <td className="py-3.5 px-4">
                          <div className="flex items-center gap-1.5">
                            {status === 'SENT' ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30">
                                <CheckCircle2 className="w-3 h-3" />
                                Sent
                              </span>
                            ) : status === 'PENDING' ? (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-amber-500/15 text-amber-600 dark:text-amber-400 border border-amber-500/30">
                                <Clock className="w-3 h-3 animate-pulse" />
                                Pending
                              </span>
                            ) : (
                              <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-extrabold uppercase tracking-wider bg-rose-500/15 text-rose-600 dark:text-rose-400 border border-rose-500/30">
                                <AlertCircle className="w-3 h-3" />
                                {status || 'Failed'}
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Date */}
                        <td className="py-3.5 px-4 text-site-text/70 text-[11px] whitespace-nowrap">
                          {formatDate(lead.created_at)}
                        </td>

                        {/* Toggle History Details */}
                        <td className="py-3.5 px-4 text-center">
                          <button
                            onClick={() => toggleExpandLead(lead.id)}
                            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-bold text-site-text/80 hover:text-site-text bg-site-accent/40 hover:bg-site-accent transition-colors cursor-pointer"
                            title="View delivery details"
                          >
                            <span>{deliveryCount} {deliveryCount === 1 ? 'pack' : 'packs'}</span>
                            {isExpanded ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                          </button>
                        </td>
                      </tr>

                      {/* EXPANDABLE DELIVERY DETAILS ROW */}
                      {isExpanded && (
                        <tr className="bg-site-primary/5 border-b border-site-accent">
                          <td colSpan={7} className="p-4 sm:p-5">
                            <div className="bg-site-bg border border-site-accent rounded-xl p-4 shadow-inner">
                              <div className="flex items-center justify-between pb-2 mb-3 border-b border-site-accent">
                                <h4 className="text-xs font-extrabold uppercase tracking-wider text-site-primary flex items-center gap-1.5">
                                  <Send className="w-3.5 h-3.5" />
                                  Delivery History for {lead.name}
                                </h4>
                                <span className="text-[11px] text-site-text/50">
                                  Lead ID #{lead.id} &bull; {lead.email}
                                </span>
                              </div>

                              {(!lead.deliveries || lead.deliveries.length === 0) ? (
                                <p className="text-xs text-site-text/50 italic py-2">No delivery records found for this lead.</p>
                              ) : (
                                <div className="space-y-2">
                                  {lead.deliveries.map((delivery, idx) => (
                                    <div
                                      key={delivery.id || idx}
                                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-3 rounded-lg bg-site-bg border border-site-accent/70 text-xs"
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className="w-7 h-7 rounded-lg bg-site-primary/10 flex items-center justify-center text-site-primary shrink-0">
                                          <FileText className="w-3.5 h-3.5" />
                                        </div>
                                        <div>
                                          <div className="font-bold text-site-text flex items-center gap-2">
                                            <span>{delivery.lead_magnet || 'Educational Pack'}</span>
                                            <span className="text-[10px] px-1.5 py-0.2 rounded bg-site-accent/50 text-site-text/70 uppercase">
                                              {delivery.experience_level || 'N/A'}
                                            </span>
                                          </div>
                                          <div className="text-[10px] text-site-text/50 mt-0.5 flex items-center gap-2">
                                            <span>Delivery #{delivery.id}</span>
                                            <span>&bull;</span>
                                            <span>Dispatched: {formatDate(delivery.sent_at || delivery.created_at)}</span>
                                          </div>
                                        </div>
                                      </div>

                                      <div className="flex items-center gap-2 self-start sm:self-auto">
                                        {delivery.error_message ? (
                                          <div className="text-right">
                                            <span className="text-[10px] font-bold text-rose-500 bg-rose-500/10 px-2 py-0.5 rounded border border-rose-500/20">
                                              Failed: {delivery.error_message}
                                            </span>
                                          </div>
                                        ) : (
                                          <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-500 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                                            <CheckCircle2 className="w-3 h-3" />
                                            {delivery.delivery_status || 'Sent'}
                                          </span>
                                        )}
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}
                            </div>
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* PAGINATION FOOTER */}
        <div className="p-4 border-t border-site-accent flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-site-text/70">
          <div className="flex items-center gap-3">
            <div>
              Showing <span className="font-bold text-site-text">{processedLeads.length}</span> leads
              {leads.length > 0 && <span> (offset: {skip})</span>}
            </div>
            <div className="flex items-center gap-1.5 pl-2 border-l border-site-accent">
              <span className="text-[10px] uppercase font-bold text-site-text/50">Rows:</span>
              <select
                value={limit}
                onChange={(e) => {
                  setLimit(Number(e.target.value));
                  setSkip(0);
                }}
                className="px-2 py-1 bg-site-bg border border-site-accent rounded-lg text-xs text-site-text focus:outline-none focus:border-site-primary cursor-pointer font-bold"
              >
                <option value={10}>10</option>
                <option value={25}>25</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setSkip((prev) => Math.max(0, prev - limit))}
              disabled={skip === 0 || loading}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-site-accent bg-site-bg hover:bg-site-accent/20 text-site-text font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-3.5 h-3.5" />
              <span>Previous</span>
            </button>

            <span className="text-[11px] font-bold px-2">
              Page {Math.floor(skip / limit) + 1}
            </span>

            <button
              onClick={() => setSkip((prev) => prev + limit)}
              disabled={!hasMore || loading}
              className="flex items-center gap-1 px-3 py-1.5 rounded-lg border border-site-accent bg-site-bg hover:bg-site-accent/20 text-site-text font-bold text-xs disabled:opacity-40 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <span>Next</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
