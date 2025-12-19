import React from 'react';

function InterestCard({ label, onClick, title, className }) {
  const baseClassName = className ? `interest-card ${className}` : 'interest-card';

  if (typeof onClick === 'function') {
    return (
      <button
        type="button"
        className={`${baseClassName} interest-card--clickable`}
        aria-label={`Interest: ${label}`}
        onClick={onClick}
        title={title}
      >
        {label}
      </button>
    );
  }

  return (
    <div className={baseClassName} aria-label={`Interest: ${label}`}>
      {label}
    </div>
  );
}

export default InterestCard;
