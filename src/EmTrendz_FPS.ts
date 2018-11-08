// Import here Polyfills if needed. Recommended core-js (npm i -D core-js)
// import "core-js/fn/array.find"
// ...

import calculator from './calculator/index';
export default class EmTrendz_FPS {
  constructor() {
    let calc = new calculator();
    alert(calc.sum(2,3));
  }
}

