import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import '../styles/Info.css';

function Info() {
  const [selected, setSelected] = useState('personal');

  return (
    <main className="info">
      <div className="info-top" aria-label="Info selection">
        <ButtonGroup variant="contained" size="medium" aria-label="Info toggle">
          <Button
            disabled={selected === 'personal'}
            variant={selected === 'personal' ? 'contained' : 'outlined'}
            onClick={() => setSelected('personal')}
          >
            Personal Info
          </Button>
          <Button
            disabled={selected === 'professional'}
            variant={selected === 'professional' ? 'contained' : 'outlined'}
            onClick={() => setSelected('professional')}
          >
            Professional Info
          </Button>
        </ButtonGroup>
      </div>

      {selected === 'professional' ? (
        <div className="info-panels" aria-label="Professional info panels">
          <section className="info-half info-left" aria-label="Info left panel" />
          <section className="info-half info-right" aria-label="Info right panel" />
        </div>
      ) : (
        <section className="info-single" aria-label="Personal info section" />
      )}
    </main>
  );
}

export default Info;
