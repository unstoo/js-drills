```javascript
var increment = input => input + 1
var decrement = input => input - 1
var double = input => input * 2
var halve = input => input / 2

var pipeline = [
  increment,
  increment,
  double,
  increment,
  increment,
  decrement,
  halve
]

var initial_value = 1

var final_value = pipeline.reduce((acc, fn) => {
  return fn(acc)
}, initial_value)
```