import React from 'react';
import ReactDOM from 'react-dom';
import Section from './Section';

function hydrateSection() {
  const section = document.getElementById('hydrate-me');
  const heading = section.querySelector('h1').textContent;

  ReactDOM.hydrate(<Section heading={heading} />, section);
}

hydrateSection();