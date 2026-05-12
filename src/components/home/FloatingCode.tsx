import React from 'react';

const KW  = '#fde68a';
const TY  = '#a5f3fc';
const STR = '#86efac';
const FN  = '#c4b5fd';
const DIM = 'rgba(255,255,255,0.7)';

const CARD: React.CSSProperties = {
  background: 'rgba(0,0,0,0.45)',
  border: '1px solid rgba(255,255,255,0.15)',
  boxShadow: '0 4px 12px rgba(0,0,0,0.35)',
  borderRadius: '6px',
  padding: '8px 12px',
};

type Token = { text: string; color: string };

const BLOCKS: { lines: Token[][]; left: string; duration: string; delay: string }[] = [
  {
    lines: [
      [{ text: 'const', color: KW }, { text: ' [data, setData]', color: DIM }],
      [{ text: '  = ', color: DIM }, { text: 'useState', color: FN }, { text: '<', color: DIM }, { text: 'Data', color: TY }, { text: '>(null)', color: DIM }],
    ],
    left: '3%', duration: '11s', delay: '0s',
  },
  {
    lines: [
      [{ text: 'useEffect', color: FN }, { text: '(() => {', color: DIM }],
      [{ text: '  fetchData', color: FN }, { text: '()', color: DIM }],
      [{ text: '}, [deps])', color: DIM }],
    ],
    left: '52%', duration: '14s', delay: '3s',
  },
  {
    lines: [
      [{ text: 'export ', color: KW }, { text: 'default', color: KW }],
      [{ text: 'function ', color: KW }, { text: 'Page', color: FN }, { text: '() {', color: DIM }],
      [{ text: '  return ', color: KW }, { text: '<', color: DIM }, { text: 'Layout', color: TY }, { text: ' />', color: DIM }],
      [{ text: '}', color: DIM }],
    ],
    left: '22%', duration: '10s', delay: '6s',
  },
  {
    lines: [
      [{ text: 'type ', color: KW }, { text: 'Props', color: TY }, { text: ' = {', color: DIM }],
      [{ text: '  name', color: DIM }, { text: ': ', color: DIM }, { text: 'string', color: TY }],
      [{ text: '  role', color: DIM }, { text: ': ', color: DIM }, { text: 'string', color: TY }],
      [{ text: '}', color: DIM }],
    ],
    left: '65%', duration: '13s', delay: '1.5s',
  },
  {
    lines: [
      [{ text: 'const ', color: KW }, { text: 'res = ', color: DIM }, { text: 'await', color: KW }],
      [{ text: '  fetch(', color: DIM }, { text: '\'/api/data\'', color: STR }, { text: ')', color: DIM }],
    ],
    left: '36%', duration: '9s', delay: '8s',
  },
  {
    lines: [
      [{ text: 'import ', color: KW }, { text: '{ ', color: DIM }, { text: 'useSelector', color: FN }, { text: ' }', color: DIM }],
      [{ text: '  from ', color: KW }, { text: '\'react-redux\'', color: STR }],
    ],
    left: '12%', duration: '12s', delay: '4.5s',
  },
];

export const FloatingCode = () => (
  <>
    {BLOCKS.map(({ lines, left, duration, delay }, i) => (
      <pre
        key={left}
        className='absolute text-xs font-mono pointer-events-none select-none animate-float-up'
        style={{
          left,
          animationDuration: duration,
          animationDelay: delay,
          animationFillMode: 'backwards',
          zIndex: i,
          ...CARD,
        }}>
        {lines.map((tokens, li) => (
          <React.Fragment key={li}>
            {li > 0 && '\n'}
            {tokens.map(({ text, color }, ti) => (
              <span key={ti} style={{ color }}>{text}</span>
            ))}
          </React.Fragment>
        ))}
      </pre>
    ))}
  </>
);
