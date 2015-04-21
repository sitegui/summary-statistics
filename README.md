# Summary Statistics

Summarize a set of observations, in order to communicate the largest amount of information as simply as possible. [Learn more](http://en.wikipedia.org/wiki/Summary_statistics)

## Install
`npm install summary-statistics --save`

## Usage
```js
var ss = require('summary-statistics')

var values = [3, 14, 15, 92, 65, 35, 89, 79, 32, 38, 46, 26, 43, 38, 32, 79, 5]

var summary = ss(values)
/* {
 *     num: 17,
 *     sum: 731,
 *     avg: 43,
 * 
 *     min: 3,
 *     q1: 23.25,
 *     median: 38,
 *     q3: 68.5,
 *     max: 92
 * }
 */
```

## ss(values)
`values` is an array of numbers. Return an object with the keys:

* `num`: the number of elements in `array`
* `sum`: the sum of all elements
* `avg`: the average
* `min`: the least value
* `q1`: the lower quartile (splits off the lowest 25% of data from the highest 75%)
* `median`: the value in the 'middle' (cuts data set in half)
* `q3`: the upper quartile (splits off the highest 25% of data from the lowest 75%)
* `max`: the greatest value

`values` does not need to be ordered and it will *not* be modified.