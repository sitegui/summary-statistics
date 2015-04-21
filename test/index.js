/*globals it*/
'use strict'

var ss = require('../')
require('should')

it('should cover the special zero-element case', function () {
	ss([]).should.be.eql({
		num: 0,
		sum: 0,
		avg: null,
		min: null,
		q1: null,
		median: null,
		q3: null,
		max: null
	})
})

it('should cover the special one-element case', function () {
	var n = rand(0, 1)
	ss([n]).should.be.eql({
		num: 1,
		sum: n,
		avg: n,
		min: n,
		q1: n,
		median: n,
		q3: n,
		max: n
	})
})

it('should work for N = 4*n', function () {
	var v = [
		rand(0, 1),
		rand(1, 2),
		rand(2, 3),
		rand(3, 4)
	]
	ss(v).should.be.eql({
		num: 4,
		sum: v[0] + v[1] + v[2] + v[3],
		avg: (v[0] + v[1] + v[2] + v[3]) / 4,
		min: v[0],
		q1: (v[0] + v[1]) / 2,
		median: (v[1] + v[2]) / 2,
		q3: (v[2] + v[3]) / 2,
		max: v[3]
	})
})

it('should work for N = 4*n + 1', function () {
	var v = [
		rand(0, 1),
		rand(1, 2),
		rand(2, 3),
		rand(3, 4),
		rand(4, 5)
	]
	ss(v).should.be.eql({
		num: 5,
		sum: v[0] + v[1] + v[2] + v[3] + v[4],
		avg: (v[0] + v[1] + v[2] + v[3] + v[4]) / 5,
		min: v[0],
		q1: (v[0] + 3 * v[1]) / 4,
		median: v[2],
		q3: (3 * v[3] + v[4]) / 4,
		max: v[4]
	})
})

it('should work for N = 4*n + 2', function () {
	var v = [
		rand(0, 1),
		rand(1, 2),
		rand(2, 3),
		rand(3, 4),
		rand(4, 5),
		rand(5, 6)
	]
	ss(v).should.be.eql({
		num: 6,
		sum: v[0] + v[1] + v[2] + v[3] + v[4] + v[5],
		avg: (v[0] + v[1] + v[2] + v[3] + v[4] + v[5]) / 6,
		min: v[0],
		q1: v[1],
		median: (v[2] + v[3]) / 2,
		q3: v[4],
		max: v[5]
	})
})

it('should work for N = 4*n + 3', function () {
	var v = [
		rand(0, 1),
		rand(1, 2),
		rand(2, 3),
		rand(3, 4),
		rand(4, 5),
		rand(5, 6),
		rand(6, 7)
	]
	ss(v).should.be.eql({
		num: 7,
		sum: v[0] + v[1] + v[2] + v[3] + v[4] + v[5] + v[6],
		avg: (v[0] + v[1] + v[2] + v[3] + v[4] + v[5] + v[6]) / 7,
		min: v[0],
		q1: (3 * v[1] + v[2]) / 4,
		median: v[3],
		q3: (v[4] + 3 * v[5]) / 4,
		max: v[6]
	})
})

it('should sort the vector', function () {
	var v = [rand(0, 1), rand(0, 1), rand(0, 1), rand(0, 1), rand(0, 1)],
		v2 = [v[3], v[1], v[4], v[2], v[0]]
	ss(v).should.be.eql(ss(v2))
})

it('should work for the readme example', function () {
	var values = [3, 14, 15, 92, 65, 35, 89, 79, 32, 38, 46, 26, 43, 38, 32, 79, 5]

	var summary = ss(values)

	summary.should.be.eql({
		num: 17,
		sum: 731,
		avg: 43,
		min: 3,
		q1: 23.25,
		median: 38,
		q3: 68.5,
		max: 92
	})
})

function rand(min, max) {
	return min + Math.random() * (max - min)
}