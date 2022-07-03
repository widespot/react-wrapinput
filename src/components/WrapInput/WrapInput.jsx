import React from 'react';

import './WrapInput.css';

const spaceReplace = (s) => s && s.replace(/ /g, '\u00a0');

export default function WrapInput({
  value, onChange, style, type, placeholder,
}) {
  const elRef = React.useRef();

  const [v, setV] = React.useState(value);

  React.useEffect(() => {
    setV(value);
  }, [value]);

  return (
    <div
      style={{ ...style, cursor: 'text', display: 'inline-block' }}
      onClick={() => elRef.current.focus()}
    >
      <div style={{ position: 'relative' }}>
        <span style={{ whiteSpace: 'nowrap', minWidth: 15, display: 'inline-block' }}>
          {spaceReplace(v) || placeholder || <>&nbsp;</>}
        </span>
        <input
          placeholder={placeholder}
          type={type}
          ref={elRef}
          value={v}
          onChange={(e) => {
            setV(e.target.value);
            onChange && onChange(e);
          }}
        />
      </div>
    </div>
  );
}
