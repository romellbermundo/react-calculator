export const ACTIONS = Object.freeze({
  ADD_DIGIT: 'add-digit',
  CHOOSE_OPERATION: 'choose-operation',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  EVALUATE: 'evaluate',
});

export const initialState = {
  currentOperand: '0',
  previousOperand: null,
  operation: null,
  overwrite: false,
};

export function evaluate({ currentOperand, previousOperand, operation }) {
  const left = Number(previousOperand);
  const right = Number(currentOperand);
  if (!Number.isFinite(left) || !Number.isFinite(right)) return 'Error';

  let result;
  switch (operation) {
    case '+': result = left + right; break;
    case '−': result = left - right; break;
    case '×': result = left * right; break;
    case '÷': result = right === 0 ? NaN : left / right; break;
    default: return 'Error';
  }
  if (!Number.isFinite(result)) return 'Error';
  // Reduce common binary floating-point artifacts without hiding meaningful precision.
  return String(Number(result.toPrecision(12)));
}

export function calculatorReducer(state, { type, payload }) {
  switch (type) {
    case ACTIONS.ADD_DIGIT: {
      const digit = payload?.digit;
      if (!/^[0-9.]$/.test(digit || '')) return state;
      if (state.overwrite || state.currentOperand === 'Error') {
        return { ...state, currentOperand: digit === '.' ? '0.' : digit, overwrite: false };
      }
      const current = state.currentOperand ?? '0';
      if (digit === '.' && current.includes('.')) return state;
      if (digit === '.' ) return { ...state, currentOperand: current + '.' };
      if (current === '0' || state.currentOperand == null) return { ...state, currentOperand: digit };
      return { ...state, currentOperand: current + digit };
    }
    case ACTIONS.CHOOSE_OPERATION: {
      const operation = payload?.operation;
      if (!['+', '−', '×', '÷'].includes(operation)) return state;
      if (state.currentOperand === 'Error') return state;
      if (state.previousOperand == null) {
        return { ...state, previousOperand: state.currentOperand, currentOperand: null, operation, overwrite: false };
      }
      if (state.currentOperand == null) return { ...state, operation };
      const result = evaluate(state);
      if (result === 'Error') return { ...initialState, currentOperand: result, overwrite: true };
      return { previousOperand: result, currentOperand: null, operation, overwrite: false };
    }
    case ACTIONS.EVALUATE: {
      if (state.previousOperand == null || state.currentOperand == null || !state.operation) return state;
      return { ...initialState, currentOperand: evaluate(state), overwrite: true };
    }
    case ACTIONS.DELETE_DIGIT: {
      if (state.overwrite || state.currentOperand === 'Error') return { ...state, currentOperand: '0', overwrite: false };
      const current = state.currentOperand ?? '0';
      return { ...state, currentOperand: current.length > 1 ? current.slice(0, -1) : '0' };
    }
    case ACTIONS.CLEAR:
      return { ...initialState };
    default:
      return state;
  }
}

const integerFormatter = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });
export function formatOperand(operand) {
  if (operand == null) return '';
  if (operand === 'Error') return operand;
  const [integer, decimal] = operand.split('.');
  const formatted = integerFormatter.format(integer || '0');
  return decimal === undefined ? formatted : `${formatted}.${decimal}`;
}
