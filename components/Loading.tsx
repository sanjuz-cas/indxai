import React from 'react';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4 border-2',
    md: 'w-8 h-8 border-3',
    lg: 'w-12 h-12 border-4'
  };

  return (
    <div className={`inline-block ${sizeClasses[size]} border-orange-500 border-t-transparent rounded-full animate-spin ${className}`} />
  );
};

interface LoadingSkeletonProps {
  className?: string;
  rows?: number;
}

export const LoadingSkeleton: React.FC<LoadingSkeletonProps> = ({ className = '', rows = 1 }) => {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: rows }).map((_, index) => (
        <div
          key={index}
          className="h-4 bg-gray-800 rounded animate-pulse"
          style={{ width: `${Math.random() * 30 + 70}%` }}
        />
      ))}
    </div>
  );
};

interface LoadingCardProps {
  className?: string;
}

export const LoadingCard: React.FC<LoadingCardProps> = ({ className = '' }) => {
  return (
    <div className={`bg-zinc-900 rounded-2xl p-8 border border-gray-800 ${className}`}>
      <div className="animate-pulse space-y-4">
        <div className="w-16 h-16 bg-gray-800 rounded-full" />
        <div className="h-6 bg-gray-800 rounded w-3/4" />
        <div className="space-y-2">
          <div className="h-4 bg-gray-800 rounded" />
          <div className="h-4 bg-gray-800 rounded w-5/6" />
        </div>
      </div>
    </div>
  );
};

export const PageLoader: React.FC = () => {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center">
        <LoadingSpinner size="lg" />
        <p className="mt-4 text-gray-400">Loading...</p>
      </div>
    </div>
  );
};

export default LoadingSpinner;
