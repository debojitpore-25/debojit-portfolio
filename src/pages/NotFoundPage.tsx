import React from 'react';
import { ArrowLeft, Terminal } from 'lucide-react';
import { Button } from '../components/ui/Button';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="py-24 max-w-lg mx-auto px-4 text-center space-y-6">
      <div className="w-16 h-16 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400 mx-auto shadow-glow-sm">
        <Terminal className="w-8 h-8" />
      </div>
      <div className="space-y-2">
        <h1 className="text-4xl font-extrabold text-white font-mono">404 // NOT_FOUND</h1>
        <p className="text-sm text-text-secondary">
          The requested system node or route does not exist.
        </p>
      </div>
      <div className="pt-2">
        <Button to="/" icon={<ArrowLeft className="w-4 h-4" />} iconPosition="left">
          Return to Overview
        </Button>
      </div>
    </div>
  );
};
