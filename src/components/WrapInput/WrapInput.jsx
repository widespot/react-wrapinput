import React from 'react';

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
          style={{
            lineHeight: 'inherit',
            textAlign: 'inherit',
            padding: 0,
            margin: 0,
            border: 'none',
            fontFamily: 'inherit',
            fontSize: '1em',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
          }}
          onChange={(e) => {
            setV(e.target.value);
            onChange && onChange(e);
          }}
        />
      </div>
    </div>
  );
}
