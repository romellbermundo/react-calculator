import { useEffect, useReducer, useRef, useState } from 'react';
import { ACTIONS, calculatorReducer, formatOperand, initialState } from './calculator';
import './App.css';

const keys = [
  { label: 'AC', action: ACTIONS.CLEAR, className: 'span-two utility-key destructive-key', accessible: 'Clear all' },
  { label: 'DEL', action: ACTIONS.DELETE_DIGIT, className: 'utility-key destructive-key', accessible: 'Delete last digit' },
  { label: '÷', action: ACTIONS.CHOOSE_OPERATION, value: '÷', className: 'operation-key', accessible: 'Divide' },
  { label: '7' }, { label: '8' }, { label: '9' },
  { label: '×', action: ACTIONS.CHOOSE_OPERATION, value: '×', className: 'operation-key', accessible: 'Multiply' },
  { label: '4' }, { label: '5' }, { label: '6' },
  { label: '−', action: ACTIONS.CHOOSE_OPERATION, value: '−', className: 'operation-key', accessible: 'Subtract' },
  { label: '1' }, { label: '2' }, { label: '3' },
  { label: '+', action: ACTIONS.CHOOSE_OPERATION, value: '+', className: 'operation-key', accessible: 'Add' },
  { label: '.', accessible: 'Decimal point' }, { label: '0' },
  { label: '=', action: ACTIONS.EVALUATE, className: 'span-two equals-key', accessible: 'Equals' },
];

const keyboardOperations = { '+': '+', '-': '−', '*': '×', '/': '÷' };

function App() {
  const [state, dispatch] = useReducer(calculatorReducer, initialState);
  const [footerPanel, setFooterPanel] = useState(null);
  const [glowingKey, setGlowingKey] = useState(null);
  const glowTimer = useRef(null);
  const clearTimer = useRef(null);
  const [clearing, setClearing] = useState(null);
  const [startupLights] = useState(() => keys.map(() => Math.random() * 0.55));
  const [startupActive, setStartupActive] = useState(true);

  useEffect(() => () => { window.clearTimeout(glowTimer.current); window.clearTimeout(clearTimer.current); }, []);

  function dispatchWithClear(action) {
    if (action.type === ACTIONS.CLEAR) {
      window.clearTimeout(clearTimer.current);
      const previous = `${formatOperand(state.previousOperand)} ${state.operation || ''}`.trim();
      const current = formatOperand(state.currentOperand);
      dispatch(action);
      if (previous || (current && current !== '0')) {
        setClearing({ previous, current, id: Date.now() });
        clearTimer.current = window.setTimeout(() => setClearing(null), 1000);
      } else setClearing(null);
    } else {
      window.clearTimeout(clearTimer.current);
      setClearing(null);
      dispatch(action);
    }
  }

  useEffect(() => {
    const timer = window.setTimeout(() => setStartupActive(false), 1000);
    return () => window.clearTimeout(timer);
  }, []);

  function illuminateKey(label) {
    window.clearTimeout(glowTimer.current);
    setGlowingKey(label);
    glowTimer.current = window.setTimeout(() => setGlowingKey(null), 500);
  }

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.altKey || event.ctrlKey || event.metaKey || event.target instanceof HTMLInputElement) return;
      const key = event.key;
      if (/^[0-9.]$/.test(key)) dispatchWithClear({ type: ACTIONS.ADD_DIGIT, payload: { digit: key } });
      else if (keyboardOperations[key]) dispatchWithClear({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation: keyboardOperations[key] } });
      else if (key === 'Enter' || key === '=') dispatchWithClear({ type: ACTIONS.EVALUATE });
      else if (key === 'Backspace') dispatchWithClear({ type: ACTIONS.DELETE_DIGIT });
      else if (key === 'Escape') dispatchWithClear({ type: ACTIONS.CLEAR });
      else return;
      event.preventDefault();
    }
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  });

  function pressKey(key) {
    illuminateKey(key.label);
    dispatchWithClear({
      type: key.action || ACTIONS.ADD_DIGIT,
      payload: key.action === ACTIONS.CHOOSE_OPERATION
        ? { operation: key.value }
        : { digit: key.label },
    });
  }

  return (
    <main className="app-shell">
      <header className="app-heading">
        <span className="eyebrow">PRECISION INTERFACE // 2076</span>
        <h1>NEXUS <span>01</span></h1>
        <p>Intelligence in every calculation.</p>
      </header>

      <section className="calculator-grid" aria-label="Calculator">
        <div className="output" aria-label="Calculator display">
          <div className="display-topline"><span className="status-dot" /> SYSTEM ONLINE <span className="display-channel">CALC / 01</span></div>
          <div className="previous-operand">{clearing ? <span key={`prev-${clearing.id}`} className="clear-digits">{Array.from(clearing.previous).map((char, i, chars) => <span key={i} style={{ '--clear-step': `${i * (0.66 / Math.max(1, chars.length - 1))}s` }}>{char === ' ' ? '\u00a0' : char}</span>)}</span> : <>{formatOperand(state.previousOperand)} {state.operation}</>}</div>
          <div className="current-operand" aria-live="polite" aria-atomic="true">
            {clearing ? <span key={`current-${clearing.id}`} className="clear-digits">{Array.from(clearing.current).map((char, i, chars) => <span key={i} style={{ '--clear-step': `${i * (0.66 / Math.max(1, chars.length - 1))}s` }}>{char}</span>)}</span> : formatOperand(state.currentOperand)}
          </div>
          <div className="display-bottomline"><span>READY FOR INPUT</span><span className="signal-bars" aria-hidden="true">▂ ▄ ▆ █</span></div>
        </div>
        {keys.map((key) => (
          <button
            key={key.label}
            type="button"
            className={`${key.className || ''} ${glowingKey === key.label ? 'key-afterglow' : ''} ${startupActive ? 'startup-light' : ''}`.trim()}
            style={startupActive ? { '--startup-delay': `${startupLights[keys.indexOf(key)]}s` } : undefined}
            aria-label={key.accessible || key.label}
            onClick={() => pressKey(key)}
          >
            {key.label}
          </button>
        ))}
      </section>

      <footer className="app-footer">
        <span className="footer-symbol" aria-hidden="true">✳</span>
        <p className="footer-quote">“The future is calculated.”</p>
        <div className="footer-links">
          <button type="button" aria-expanded={footerPanel === 'about'} onClick={() => setFooterPanel(footerPanel === 'about' ? null : 'about')}>About</button>
          <button type="button" aria-expanded={footerPanel === 'disclaimer'} onClick={() => setFooterPanel(footerPanel === 'disclaimer' ? null : 'disclaimer')}>Disclaimer</button>
          <a href="https://github.com/romellbermundo/react-calculator" target="_blank" rel="noopener noreferrer">Source code ↗</a>
        </div>
        <div className="footer-panel" aria-live="polite">
          {footerPanel === 'about' && 'NEXUS 01 is a futuristic, responsive calculator built with React. A precision instrument for everyday arithmetic.'}
          {footerPanel === 'disclaimer' && 'For everyday calculations. Results may be affected by floating-point precision; verify important figures.'}
        </div>
        <small>NEXUS 01 · v1.4.0</small>
      </footer>
    </main>
  );
}

export default App;
