'use client'
import React, { useState, useEffect, JSX } from 'react';
import { ExternalLink, Globe, Calendar, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  status: 'live' | 'staging' | 'development';
  deployedDate?: number;
  timestamp: number;
  technologies?: string[];
  isDemo?: boolean;
}

interface StorageResult {
  key: string;
  value: string;
  shared: boolean;
}

interface StorageListResult {
  keys: string[];
  prefix?: string;
  shared: boolean;
}

declare global {
  interface Window {
    storage: {
      get: (key: string, shared?: boolean) => Promise<StorageResult | null>;
      set: (key: string, value: string, shared?: boolean) => Promise<StorageResult | null>;
      delete: (key: string, shared?: boolean) => Promise<{ key: string; deleted: boolean; shared: boolean } | null>;
      list: (prefix?: string, shared?: boolean) => Promise<StorageListResult | null>;
    };
  }
}

export default function ClientProjectDashboard(): JSX.Element {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadProjects();
  }, []);

  const loadProjects = async (): Promise<void> => {
    try {
      setLoading(true);
      const result = await window.storage.list('project:');
      
      if (result && result.keys) {
        const projectData = await Promise.all(
          result.keys.map(async (key: string) => {
            try {
              const data = await window.storage.get(key);
              return data ? JSON.parse(data.value) as Project : null;
            } catch (err) {
              console.error(`Error parsing project ${key}:`, err);
              return null;
            }
          })
        );
        setProjects(projectData.filter((p): p is Project => p !== null).sort((a, b) => b.timestamp - a.timestamp));
      } else {
        setProjects([]);
      }
      setError(null);
    } catch (err) {
      console.log('No projects found yet');
      setProjects([]);
      setError(null);
    } finally {
      setLoading(false);
    }
  };

  const getStatusColor = (status: Project['status']): string => {
    switch (status) {
      case 'live': 
        return 'bg-green-100 text-green-800 border-green-200';
      case 'staging': 
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'development': 
        return 'bg-blue-100 text-blue-800 border-blue-200';
      default: 
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const formatDate = (timestamp: number): string => {
    return new Date(timestamp).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  // Demo data for initial view
  const demoProjects: Project[] = [
    {
      id: 'demo1',
      name: 'E-Commerce Website',
      description: 'Full-stack e-commerce platform with payment integration',
      url: 'https://example-ecommerce.vercel.app',
      status: 'live',
      deployedDate: Date.now() - 2 * 24 * 60 * 60 * 1000,
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Stripe'],
      timestamp: Date.now() - 2 * 24 * 60 * 60 * 1000,
      isDemo: true
    },
    {
      id: 'demo2',
      name: 'Portfolio Website',
      description: 'Modern portfolio website with blog functionality',
      url: 'https://example-portfolio.netlify.app',
      status: 'live',
      deployedDate: Date.now() - 5 * 24 * 60 * 60 * 1000,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'MDX'],
      timestamp: Date.now() - 5 * 24 * 60 * 60 * 1000,
      isDemo: true
    }
  ];

  const displayProjects: Project[] = projects.length > 0 ? projects : demoProjects;

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-12 h-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-slate-600">Loading your projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-slate-900">My Projects</h1>
              <p className="mt-1 text-sm text-slate-600">View and access your deployed projects</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
              <CheckCircle2 className="w-5 h-5 text-blue-600" />
              <span className="text-sm font-medium text-blue-900">
                {displayProjects.length} {displayProjects.length === 1 ? 'Project' : 'Projects'}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {error && (
          <Alert className="mb-6 border-red-200 bg-red-50">
            <AlertCircle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">{error}</AlertDescription>
          </Alert>
        )}

        {projects.length === 0 && (
          <Alert className="mb-6 border-blue-200 bg-blue-50">
            <AlertCircle className="h-4 w-4 text-blue-600" />
            <AlertDescription className="text-blue-800">
              Showing demo projects. Your actual projects will appear here once uploaded by your developer.
            </AlertDescription>
          </Alert>
        )}

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
          {displayProjects.map((project: Project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-all duration-200 overflow-hidden group"
            >
              <div className="p-6">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-sm text-slate-600 line-clamp-2">
                      {project.description}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(project.status)}`}>
                    {project.status.charAt(0).toUpperCase() + project.status.slice(1)}
                  </span>
                </div>

                {/* Technologies */}
                {project.technologies && project.technologies.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech: string, index: number) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                {/* Project URL */}
                <div className="mb-4 p-3 bg-slate-50 rounded-lg border border-slate-200">
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="w-4 h-4 text-slate-500 flex-shrink-0" />
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-700 font-medium truncate flex-1"
                    >
                      {project.url}
                    </a>
                  </div>
                </div>

                {/* Deploy Date */}
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-4">
                  <Calendar className="w-4 h-4" />
                  <span>Deployed on {formatDate(project.deployedDate || project.timestamp)}</span>
                </div>

                {/* View Project Button */}
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-200"
                >
                  <span>View Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>

                {project.isDemo && (
                  <p className="mt-3 text-xs text-center text-slate-500 italic">Demo Project</p>
                )}
              </div>
            </div>
          ))}
        </div>

        {displayProjects.length === 0 && !loading && (
          <div className="text-center py-12">
            <Globe className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">No Projects Yet</h3>
            <p className="text-slate-600">Your deployed projects will appear here once uploaded by your developer.</p>
          </div>
        )}
      </div>

      {/* Developer Note */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
          <h4 className="font-semibold text-slate-900 mb-2">For Developers:</h4>
          <p className="text-sm text-slate-700 mb-3">
            To add a project for your client, use the browser console and run:
          </p>
          <code className="block bg-white p-4 rounded-lg text-xs text-slate-800 border border-slate-200 overflow-x-auto">
            {`await window.storage.set('project:PROJECT_ID', JSON.stringify({
  id: 'unique_id',
  name: 'Project Name',
  description: 'Project description',
  url: 'https://your-deployed-site.com',
  status: 'live', // or 'staging', 'development'
  deployedDate: Date.now(),
  technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
  timestamp: Date.now()
}));`}
          </code>
        </div>
      </div>
    </div>
  );
}