import React from 'react';

const spaceReplace = (s) => s && `${s}`.replace(/ /g, '\u00a0');

export default function WrapInput({
  value, onChange, style, type, placeholder, name, InputComponent,
}) {
  const elRef = React.useRef();

  const [v, setV] = React.useState(value);

  React.useEffect(() => {
    setV(value);
  }, [value]);

  const inputProps = {
    placeholder,
    type,
    ref: elRef,
    value: v,
    name,
    style: {
      lineHeight: 'inherit',
      textAlign: 'inherit',
      fontWeight: 'inherit',
      fontFamily: 'inherit',
      fontSize: '1em',
      padding: 0,
      margin: 0,
      border: 'none',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    onChange: (e) => {
      setV(e.target.value);
      onChange && onChange(e);
    },
  };

  return (
    <span
      style={{ ...style, cursor: 'text', display: 'inline-block' }}
      onClick={() => elRef.current.focus()}
    >
      <span style={{ position: 'relative', display: 'block' }}>
        <span style={{ whiteSpace: 'nowrap', minWidth: 15, display: 'inline-block' }}>
          {spaceReplace(v) || placeholder || <>&nbsp;</>}
        </span>
        {InputComponent ? <InputComponent {...inputProps} /> : <input {...inputProps} />}
      </span>
    </span>
  );
}
