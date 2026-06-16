import React from 'react';
import { ArrowLeft, CheckCircle, AlertTriangle, XCircle, Clock } from 'lucide-react';

const SystemStatusPage = ({ onBack }) => {
  const services = [
    { name: 'API Server', status: 'operational' },
    { name: 'Web Dashboard', status: 'operational' },
    { name: 'Learning Platform', status: 'operational' },
    { name: 'AI Models Integration', status: 'degraded' },
    { name: 'Database / Storage', status: 'operational' },
  ];

  const pastIncidents = [
    {
      date: 'April 25, 2026',
      title: 'Elevated API Errors',
      status: 'resolved',
      description: 'We experienced elevated error rates on our main API endpoints. The issue has been identified and resolved.',
      duration: '45 mins'
    },
    {
      date: 'April 18, 2026',
      title: 'Web Dashboard Latency',
      status: 'resolved',
      description: 'Users experienced slow load times on the dashboard. This was caused by a database index issue which has now been fixed.',
      duration: '1 hr 15 mins'
    }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'operational': return <CheckCircle className="w-5 h-5 text-emerald-500" />;
      case 'degraded': return <AlertTriangle className="w-5 h-5 text-amber-500" />;
      case 'outage': return <XCircle className="w-5 h-5 text-red-500" />;
      default: return null;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'operational': return 'Operational';
      case 'degraded': return 'Degraded Performance';
      case 'outage': return 'Major Outage';
      default: return 'Unknown';
    }
  };

  return (
    <div className="min-h-screen bg-site-bg font-sans pb-20">
      <div className="max-w-4xl mx-auto px-6 pt-16">
        <button 
          onClick={onBack}
          className="flex items-center text-site-text/80 hover:text-brand-primary transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>

        {/* Global Status Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-2xl p-8 mb-12 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4 shadow-sm">
          <div>
            <h1 className="text-2xl font-bold text-amber-800 mb-2">Some Systems Degraded</h1>
            <p className="text-amber-700">We are currently experiencing degraded performance with our AI Models Integration. Our team is investigating.</p>
          </div>
          <div className="bg-site-bg px-4 py-2 rounded-lg font-mono text-sm text-site-text/80 border border-amber-100 shadow-sm flex items-center">
             <Clock className="w-4 h-4 mr-2 text-amber-500" /> Updated 5 mins ago
          </div>
        </div>

        {/* Services List */}
        <div className="bg-site-bg rounded-2xl shadow-sm border border-site-accent overflow-hidden mb-16">
          <div className="px-6 py-4 bg-site-bg border-b border-site-accent">
            <h2 className="text-lg font-bold text-brand-dark">Current Service Status</h2>
          </div>
          <div className="divide-y divide-slate-100">
            {services.map((service, idx) => (
              <div key={idx} className="flex items-center justify-between px-6 py-5 hover:bg-site-bg transition-colors">
                <span className="font-semibold text-slate-700">{service.name}</span>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(service.status)}
                  <span className={`text-sm font-medium ${
                    service.status === 'operational' ? 'text-emerald-600' : 
                    service.status === 'degraded' ? 'text-amber-600' : 'text-red-600'
                  }`}>
                    {getStatusText(service.status)}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Past Incidents */}
        <div>
          <h2 className="text-2xl font-bold text-brand-dark mb-6">Past Incidents</h2>
          <div className="space-y-6">
            {pastIncidents.map((incident, idx) => (
              <div key={idx} className="bg-site-bg rounded-2xl p-6 shadow-sm border border-site-accent">
                <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 border-b border-site-accent pb-4 gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-slate-800">{incident.title}</h3>
                    <p className="text-sm text-site-text/80">{incident.date}</p>
                  </div>
                  <div className="flex items-center space-x-3">
                    <span className="px-3 py-1 bg-slate-100 text-site-text/80 text-xs font-bold uppercase tracking-wider rounded-full">
                      {incident.status}
                    </span>
                    <span className="text-sm text-slate-400 font-medium">{incident.duration}</span>
                  </div>
                </div>
                <p className="text-site-text/80 text-sm leading-relaxed">{incident.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default SystemStatusPage;
