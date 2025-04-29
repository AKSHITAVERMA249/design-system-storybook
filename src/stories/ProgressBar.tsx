import React from 'react';
import './ProgressBar.css'; // adjust path if using CSS Modules

export interface ProgressBarProps {
  value: number;
  color?: 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
}
  
export const ProgressBar: React.FC<ProgressBarProps> = ({
  value,
  color = 'primary',
  size = 'md',
  animated = false,
}) => {
  const clampedValue = Math.max(0, Math.min(100, value));

  return (
    <div
      className={`progress-bar__track size-${size}`}
      role="progressbar"
      aria-valuenow={clampedValue}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-label="Progress"
    >
      <div
        className={`progress-bar__fill color-${color} ${animated ? 'animated' : ''}`}
        style={{ width: `${clampedValue}%` }}
      />
    </div>
  );
};
