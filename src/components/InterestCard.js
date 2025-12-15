import React from 'react';

function InterestCard({ label }) {
  return (
    <div className="interest-card" aria-label={`Interest: ${label}`}>
      {label}
    </div>
  );
}

export default InterestCard;
