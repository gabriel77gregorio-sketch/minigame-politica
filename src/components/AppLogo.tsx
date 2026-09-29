import React from 'react';

interface AppLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showBackgroundWall?: boolean;
}

export const AppLogo: React.FC<AppLogoProps> = ({ 
  className = '', 
  size = 'md',
  showBackgroundWall = false 
}) => {
  const sizeMap = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-20 h-20',
    xl: 'w-32 h-32 sm:w-40 sm:h-40',
  };

  return (
    <div className={`relative inline-flex items-center justify-center shrink-0 ${sizeMap[size]} ${className}`}>
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full drop-shadow-xl select-none"
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Optional Retro Brick Wall Background */}
        {showBackgroundWall && (
          <g opacity="0.25">
            <rect width="200" height="200" fill="#e07a5f" rx="24" />
            <path d="M0 25h200M0 50h200M0 75h200M0 100h200M0 125h200M0 150h200M0 175h200" stroke="#f4f1de" strokeWidth="2" />
            <path d="M40 0v25M120 0v25M80 25v25M160 25v25M40 50v25M120 50v25M80 75v25M160 75v25M40 100v25M120 100v25M80 125v25M160 125v25M40 150v25M120 150v25M80 175v25M160 175v25" stroke="#f4f1de" strokeWidth="2" />
          </g>
        )}

        {/* Handheld Shadow */}
        <rect x="58" y="24" width="92" height="158" rx="8" fill="#1c0707" opacity="0.45" />

        {/* Console Main Body (Crimson Red) */}
        <rect x="54" y="20" width="92" height="158" rx="7" fill="#dc2626" stroke="#991b1b" strokeWidth="3" />
        
        {/* Subtle Pixel Shading Top & Side */}
        <rect x="56" y="22" width="88" height="4" fill="#ef4444" />
        <rect x="56" y="26" width="4" height="148" fill="#ef4444" />
        <rect x="140" y="26" width="4" height="148" fill="#991b1b" />

        {/* Top Logo / Brand Notch Header */}
        <rect x="68" y="28" width="64" height="6" rx="2" fill="#991b1b" />
        <text x="100" y="33.5" fill="#fecaca" fontSize="5" fontWeight="bold" fontFamily="monospace" textAnchor="middle" letterSpacing="1">
          BRICK
        </text>

        {/* Bezel Frame around LCD Screen */}
        <rect x="66" y="38" width="68" height="54" rx="4" fill="#b91c1c" stroke="#7f1d1d" strokeWidth="1.5" />
        <rect x="69" y="41" width="62" height="48" rx="2" fill="#7f1d1d" />

        {/* Retro LCD Screen (Green Olive Tint) */}
        <rect x="72" y="44" width="56" height="42" rx="1" fill="#8da88a" stroke="#607c5e" strokeWidth="1" />

        {/* LCD Pixel Grid Pattern & Falling Brick Game elements */}
        <g fill="#2d4a2b" opacity="0.9">
          {/* Border bricks inside LCD */}
          <rect x="74" y="46" width="3" height="3" />
          <rect x="74" y="50" width="3" height="3" />
          <rect x="74" y="54" width="3" height="3" />
          <rect x="74" y="58" width="3" height="3" />
          <rect x="74" y="62" width="3" height="3" />
          <rect x="74" y="66" width="3" height="3" />
          <rect x="74" y="70" width="3" height="3" />
          <rect x="74" y="74" width="3" height="3" />
          <rect x="74" y="78" width="3" height="3" />
          <rect x="74" y="82" width="3" height="3" />

          {/* Falling T-Shape Tetromino Brick */}
          <rect x="94" y="50" width="4" height="4" />
          <rect x="98" y="50" width="4" height="4" />
          <rect x="102" y="50" width="4" height="4" />
          <rect x="98" y="54" width="4" height="4" />

          {/* Bottom Stacked Bricks */}
          <rect x="86" y="78" width="4" height="4" />
          <rect x="90" y="78" width="4" height="4" />
          <rect x="94" y="78" width="4" height="4" />
          <rect x="98" y="78" width="4" height="4" />
          <rect x="102" y="78" width="4" height="4" />
          <rect x="106" y="78" width="4" height="4" />
          <rect x="110" y="78" width="4" height="4" />

          <rect x="86" y="82" width="4" height="4" />
          <rect x="90" y="82" width="4" height="4" />
          <rect x="98" y="82" width="4" height="4" />
          <rect x="102" y="82" width="4" height="4" />
          <rect x="106" y="82" width="4" height="4" />
          <rect x="110" y="82" width="4" height="4" />
          <rect x="114" y="82" width="4" height="4" />

          {/* Side Score Indicator (Mini score pixel representation) */}
          <rect x="118" y="47" width="6" height="2" opacity="0.6" />
          <rect x="118" y="51" width="6" height="2" opacity="0.6" />
          <rect x="118" y="55" width="6" height="2" opacity="0.6" />
          <rect x="118" y="60" width="4" height="4" opacity="0.7" />
        </g>

        {/* Center Divider Groove */}
        <line x1="56" y1="99" x2="142" y2="99" stroke="#991b1b" strokeWidth="1.5" />
        <line x1="56" y1="100.5" x2="142" y2="100.5" stroke="#ef4444" strokeWidth="0.8" />

        {/* D-PAD (Yellow Diamond Layout) */}
        {/* UP Button */}
        <rect x="82" y="112" width="10" height="10" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
        {/* LEFT Button */}
        <rect x="70" y="123" width="10" height="10" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
        {/* RIGHT Button */}
        <rect x="94" y="123" width="10" height="10" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />
        {/* DOWN Button */}
        <rect x="82" y="134" width="10" height="10" rx="2" fill="#fbbf24" stroke="#d97706" strokeWidth="1" />

        {/* Center D-Pad Accent Dot */}
        <circle cx="87" cy="128" r="2" fill="#b45309" />

        {/* Big Action Rotate Button (Yellow Arcade Button) */}
        <circle cx="128" cy="127" r="9" fill="#fbbf24" stroke="#d97706" strokeWidth="1.5" />
        <circle cx="128" cy="127" r="6" fill="#f59e0b" />

        {/* Small Function Buttons (On/Off, Sound, Reset) */}
        <circle cx="104" cy="107" r="2.5" fill="#fcd34d" />
        <circle cx="118" cy="107" r="2.5" fill="#fcd34d" />

        {/* Retro Pixel "BRICK GAME" Typo on Lower Casing */}
        <g fill="#ffffff" opacity="0.95">
          {/* B */}
          <path d="M72 154h4v6h-4zm1 1v4h2v-4z" />
          {/* R */}
          <path d="M78 154h4v6h-4zm1 1v2h2v-2z" />
          {/* I */}
          <path d="M84 154h2v6h-2z" />
          {/* C */}
          <path d="M88 154h4v1h-3v4h3v1h-4z" />
          {/* K */}
          <path d="M94 154h2v2h1v-2h2v6h-2v-2h-1v2h-2z" />

          {/* G */}
          <path d="M102 154h4v1h-3v4h3v-2h-2v-1h3v4h-5z" />
          {/* A */}
          <path d="M108 154h4v6h-1v-2h-2v2h-1zm1 1v2h2v-2z" />
          {/* M */}
          <path d="M114 154h4v6h-1v-3h-1v2h-1v-2h-1v3h-1z" />
          {/* E */}
          <path d="M120 154h4v1h-3v1.5h2v1h-2v1.5h3v1h-4z" />
        </g>

        {/* Bottom Speaker Grille Slots */}
        <rect x="94" y="166" width="12" height="2" rx="1" fill="#7f1d1d" />
        <rect x="96" y="170" width="8" height="1.5" rx="0.75" fill="#7f1d1d" />
      </svg>
    </div>
  );
};
