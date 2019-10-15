import React, { useState } from 'react';

export default function Section(props) {
  const [ heading, setHeading ] = useState(props.heading || '');

  return (
    <section>
      <h1>{heading}</h1>
      <a href="#">link</a>
      <button onClick={() => setHeading('jeremy')}>change</button>
    </section>
  )
}