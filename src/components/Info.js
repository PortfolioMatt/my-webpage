import React from 'react';
import '../styles/Info.css';

function Info() {
  return (
    <main className="info">
      <section className="info-half info-left" aria-label="Info left panel" />
      <section className="info-half info-right" aria-label="Info right panel" />
    </main>
  );
}

export default Info;
