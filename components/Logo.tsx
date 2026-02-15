import React from 'react';
import logoImage from '../logo.png';

interface LogoProps {
  className?: string;
  variant?: 'light' | 'dark';
  showText?: boolean;
  imgHeight?: string;
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  variant = 'dark',
  showText = true,
  imgHeight = 'h-10'
}) => {
  const isDark = variant === 'dark';
  return (
    <div className={`flex items-center gap-2 font-bold text-xl tracking-tight select-none ${className}`}>
      <img
        src={logoImage}
        alt="ViniThrive Global"
        className={`${imgHeight} w-auto object-contain`}
      />
      {showText && (
        <span className={isDark ? 'text-slate-900' : 'text-white'}>
          Vini<span className={isDark ? 'text-sky-600' : 'text-blue-200'}>Thrive</span>
        </span>
      )}
    </div>
  );
};

export default Logo;