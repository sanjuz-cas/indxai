import React from 'react';

// Header Icons
export const CartIcon: React.FC = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
);

export const UserCircleIcon: React.FC = () => (
    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
       <circle cx="12" cy="12" r="10" />
    </svg>
);

// Partner Icons
const partnerIconProps = {
  className: "w-7 h-7",
  fill: "currentColor"
};

export const BoltshiftIcon: React.FC = () => (
  <svg {...partnerIconProps} viewBox="0 0 24 24">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export const ClandestineIcon: React.FC = () => (
  <svg {...partnerIconProps} viewBox="0 0 24 24">
    <path d="M12 2l-5.5 9h11zM12 22l5.5-9h-11z" />
  </svg>
);

export const BiosynthesisIcon: React.FC = () => (
    <svg {...partnerIconProps} viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M12 2l8 8-8 8-8-8 8-8z"/>
    </svg>
);

export const BuildingBlocksIcon: React.FC = () => (
    <svg {...partnerIconProps} viewBox="0 0 24 24">
        <path d="M2 2h8v8H2zM14 2h8v8h-8zM2 14h8v8H2zM14 14h8v8h-8z" />
    </svg>
);

export const AltShiftIcon: React.FC = () => (
    <svg {...partnerIconProps} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 8v8M8 12h8" />
    </svg>
);

export const CloudWatchIcon: React.FC = () => (
    <svg {...partnerIconProps} viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="4" fill="white" />
        <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16z" />
    </svg>
);
