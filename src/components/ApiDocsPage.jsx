import React, { useState } from 'react';
import { ArrowLeft, Code, Database, Key, Server, Terminal, Copy, CheckCircle2 } from 'lucide-react';

const ApiDocsPage = ({ onBack }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen bg-site-bg font-sans text-site-text flex flex-col md:flex-row">
      {/* Sidebar Navigation */}
      <div className="w-full md:w-64 bg-site-bg border-r border-site-accent p-6 flex-shrink-0">
        <button 
          onClick={onBack}
          className="flex items-center text-site-text/80 hover:text-brand-primary transition-colors mb-8 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </button>
        <h2 className="text-lg font-bold mb-6 text-brand-dark tracking-tight">API Documentation</h2>
        <nav className="space-y-1">
          <a href="#" className="flex items-center px-3 py-2 text-brand-primary bg-brand-primary/10 rounded-lg font-medium text-sm">
            <Key className="w-4 h-4 mr-3" /> Authentication
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-site-text/80 hover:bg-slate-100 rounded-lg font-medium text-sm transition-colors">
            <Database className="w-4 h-4 mr-3" /> User Resources
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-site-text/80 hover:bg-slate-100 rounded-lg font-medium text-sm transition-colors">
            <Code className="w-4 h-4 mr-3" /> Course Endpoints
          </a>
          <a href="#" className="flex items-center px-3 py-2 text-site-text/80 hover:bg-slate-100 rounded-lg font-medium text-sm transition-colors">
            <Terminal className="w-4 h-4 mr-3" /> Webhooks
          </a>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12">
            <h1 className="text-3xl font-bold text-brand-dark mb-4">Authentication</h1>
            <p className="text-site-text/80 leading-relaxed mb-6">
              The HawkmanLabs API uses API keys to authenticate requests. You can view and manage your API keys in the Developer Settings dashboard.
              Your API keys carry many privileges, so be sure to keep them secure!
            </p>
            <div className="bg-amber-50 border border-amber-200 text-amber-800 p-4 rounded-lg flex items-start text-sm">
              <Server className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <strong>Security Notice:</strong> Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, and so forth.
              </div>
            </div>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Making a Request</h2>
            <p className="text-site-text/80 mb-6">
              All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.
            </p>
            
            <div className="bg-[#0D1117] rounded-xl overflow-hidden shadow-lg border border-slate-800">
              <div className="flex items-center justify-between px-4 py-3 border-b border-slate-800 bg-[#161b22]">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <button onClick={handleCopy} className="text-slate-400 hover:text-white transition-colors">
                  {copied ? <CheckCircle2 className="w-4 h-4 text-green-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <div className="p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-slate-300">
                  <code className="text-pink-400">curl</code> https://api.hawkmanlabs.com/v1/users/me \<br/>
                  &nbsp;&nbsp;<code className="text-blue-400">-H</code> <code className="text-green-300">"Authorization: Bearer YOUR_API_KEY"</code>
                </pre>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-brand-dark mb-4">Response Format</h2>
            <p className="text-site-text/80 mb-6">
              The HawkmanLabs API responds to successful requests with HTTP status 200 OK and a JSON body containing the requested data.
            </p>
            <div className="bg-[#0D1117] rounded-xl overflow-hidden shadow-lg border border-slate-800 p-4">
              <pre className="text-sm font-mono text-slate-300">
{`{
  "status": "success",
  "data": {
    "id": "usr_123456789",
    "email": "developer@example.com",
    "name": "Alex Developer",
    "plan": "enterprise"
  }
}`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiDocsPage;
