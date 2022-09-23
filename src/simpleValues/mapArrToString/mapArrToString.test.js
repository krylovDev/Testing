const mapArrToString = require("./mapArrToString");

describe('mapArrToString', () => {
	test('Корректное значение', () => {
		expect(mapArrToString([1,2,3])).toStrictEqual(['1','2','3'])
	})
	test('Массив с некорректными значениями', () => {
		expect(mapArrToString([1,2,3,null,undefined,true,'string'])).toStrictEqual(['1','2','3'])
	})
	test('Пустой массив', () => {
		expect(mapArrToString([])).toStrictEqual([])
	})
	test('Отрицание', () => {
		expect(mapArrToString([1,2,3])).not.toStrictEqual([1,2,3,4])
	})
})
