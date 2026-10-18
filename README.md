# The Quiet Calculator

*A little clarity goes a long way.*

A warm, minimalist React calculator for everyday arithmetic, thoughtfully refined from a learning project.

## Features

- Addition, subtraction, multiplication, and division
- Decimal input, clear, delete, and chained operations
- Responsive, touch-friendly keypad
- Calm, accessible visual design with keyboard focus indicators
- Quiet footer with centered, expandable About and Disclaimer text

## Getting started

```bash
npm install
npm start
```

Open [http://localhost:3000](http://localhost:3000). To create a production build, run `npm run build`.

## How it works

React's `useReducer` manages calculator input and operations. Components `DigitButton` and `OperationButton` dispatch the appropriate actions; `App.css` defines the visual presentation.

## Credits

**Original learning foundation:** [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified) React Calculator tutorial. The original calculator logic and component structure are based on that tutorial. The Quiet Calculator's visual presentation and accompanying experience were subsequently refined for this portfolio.

## Version history

### v1.0.0 — The Quiet Calculator
- Introduced a warm, responsive visual identity and welcoming microcopy.
- Added an understated footer with a shared, invisible centered detail area.
- Preserved the original React reducer-based calculator functionality.
