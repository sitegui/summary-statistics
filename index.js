'use strict'

module.exports = function (values) {
	// Get num
	// Treat special zero-length case
	var num = values.length
	if (!num) {
		return {
			num: 0,
			sum: 0,
			avg: null,
			min: null,
			q1: null,
			median: null,
			q3: null,
			max: null
		}
	}

	// Get sum and avg
	// Also make a copy and convert to number
	var sum = 0,
		copy = new Array(num),
		avg, i, value
	for (i = 0; i < num; i++) {
		value = +values[i]
		sum += value
		copy[i] = value
	}
	avg = sum / num

	// Sort
	copy.sort(function (a, b) {
		return a - b
	})

	// Get min and max
	var min, max
	min = copy[0]
	max = copy[num - 1]

	// Get q1, median and q3
	// num = 4*a + b
	var b = num % 4,
		a = (num - b) / 4,
		q1, median, q3
	if (num === 1) {
		// Special length=1 case
		q1 = median = q3 = copy[0]
	} else if (b === 0) {
		q1 = (copy[a - 1] + copy[a]) / 2
		median = (copy[2 * a - 1] + copy[2 * a]) / 2
		q3 = (copy[3 * a - 1] + copy[3 * a]) / 2
	} else if (b === 1) {
		q1 = (copy[a - 1] + 3 * copy[a]) / 4
		median = copy[2 * a]
		q3 = (3 * copy[3 * a] + copy[3 * a + 1]) / 4
	} else if (b === 2) {
		q1 = copy[a]
		median = (copy[2 * a] + copy[2 * a + 1]) / 2
		q3 = copy[3 * a + 1]
	} else if (b === 3) {
		q1 = (3 * copy[a] + copy[a + 1]) / 4
		median = copy[2 * a + 1]
		q3 = (copy[3 * a + 1] + 3 * copy[3 * a + 2]) / 4
	}

	return {
		num: num,
		sum: sum,
		avg: avg,

		min: min,
		q1: q1,
		median: median,
		q3: q3,
		max: max
	}
}