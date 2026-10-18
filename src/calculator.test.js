import { ACTIONS, calculatorReducer, evaluate, formatOperand, initialState } from './calculator';

const digit = (state, value) => calculatorReducer(state, { type: ACTIONS.ADD_DIGIT, payload: { digit: value } });
const operation = (state, value) => calculatorReducer(state, { type: ACTIONS.CHOOSE_OPERATION, payload: { operation: value } });

test('starts at zero and avoids leading zeros', () => {
  expect(digit(initialState, '0').currentOperand).toBe('0');
  expect(digit(initialState, '5').currentOperand).toBe('5');
});
test('keeps one decimal point', () => {
  const first = digit(initialState, '.');
  expect(first.currentOperand).toBe('0.');
  expect(digit(first, '.')).toEqual(first);
});
test('adds and allows new input after equals', () => {
  const state = digit(operation(digit(initialState, '2'), '+'), '3');
  const result = calculatorReducer(state, { type: ACTIONS.EVALUATE });
  expect(result.currentOperand).toBe('5');
  expect(digit(result, '7').currentOperand).toBe('7');
});
test('supports chained calculations', () => {
  const state = digit(operation(digit(initialState, '8'), '×'), '2');
  expect(operation(state, '+').previousOperand).toBe('16');
});
test('returns a clear error on division by zero', () => {
  expect(evaluate({ previousOperand: '4', currentOperand: '0', operation: '÷' })).toBe('Error');
});
test('deletes and clears', () => {
  const state = digit(digit(initialState, '1'), '2');
  expect(calculatorReducer(state, { type: ACTIONS.DELETE_DIGIT }).currentOperand).toBe('1');
  expect(calculatorReducer(state, { type: ACTIONS.CLEAR })).toEqual(initialState);
});
test('formats thousands and preserves typed decimals', () => {
  expect(formatOperand('12345.00')).toBe('12,345.00');
});
