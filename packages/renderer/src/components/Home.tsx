import React, { useCallback, useMemo, useState } from 'react';

const aStyle: React.CSSProperties = {
  color: '#42b983',
};

const fieldSetStyle: React.CSSProperties = {
  margin: '2rem',
  padding: '1rem',
};

const Home: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [rawString, setRawString] = useState<string>('HelloWorld');

  const onCountClicked = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const onInputChange = useCallback(
    (event) => {
      setRawString(event.target.value);
    },
    [rawString],
  );

  const hashedString = useMemo(() => {
    return window.nodeCrypto.sha256sum(rawString);
  }, [rawString]);

  return (
    <div>
      <p>
        For a guide and recipes on how to configure / customize this project,
        <br />
        check out the{' '}
        <a
          href="https://github.com/cawa-93/vite-electron-builder"
          rel="noopener noreferrer"
          target="_blank"
          style={aStyle}
        >
          vite-electron-builder documentation
        </a>
        .
      </p>

      <p>
        <a
          href="https://vitejs.dev/guide/features.html"
          target="_blank"
          rel="noreferrer"
          style={aStyle}
        >
          Vite Documentation
        </a>{' '}
        |{' '}
        <a href="https://reactjs.org/docs/getting-started.html" target="_blank" rel="noreferrer">
          React Documentation
        </a>
      </p>

      <fieldset style={fieldSetStyle}>
        <legend>Test React Reactivity</legend>
        <button onPointerUp={onCountClicked}>count is: {count}</button>
      </fieldset>

      <fieldset style={fieldSetStyle}>
        <legend>Test Node.js API</legend>
        <label>
          Raw value
          <input value={rawString} type="text" onChange={onInputChange} />
        </label>
        <br />
        <label>
          Hashed by node:crypto
          <input value={hashedString} type="text" readOnly={true} />
        </label>
      </fieldset>

      <p>
        Edit
        <code>renderer/components/Home.vue</code> to test hot module
        replacement.
      </p>
    </div>
  );
};

export default Home;
