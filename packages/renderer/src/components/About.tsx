import React from 'react';

const divStyle: React.CSSProperties = {
  textAlign: 'left',
  display: 'grid',
  justifyContent: 'center',
};

const About: React.FC = () => {
  const versions = Object.keys(window.versions).map((key, idx) => {
    return <li key={`ver-${idx}`}><strong>{key}</strong>: v{window.versions[key]}</li>;
  });

  return (
    <>
      <h2 id='versions'>
        Lib versions
      </h2>
      <div style={divStyle}>
        <ul aria-labelledby='versions'>
          {versions}
        </ul>
      </div>
    </>
  );
};

export default About;
