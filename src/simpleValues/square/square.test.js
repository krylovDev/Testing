const square = require("./square");

describe('mapArrToString', () => {
	// Выполняется 1 раз перед всеми тестами
	beforeAll(() => {
	})
	// Выполняется перед каждым запуском теста Например создаём МОКИ
	beforeEach(() => {
	})
	test('Корректное значение', () => {
		expect(square(2)).toBe(4)
		expect(square(2)).toBeLessThan(5)
		expect(square(2)).toBeGreaterThan(3)
		expect(square(2)).not.toBeUndefined()
		expect(square(1)).toBe(1)
		// spyOn имитирует глобальные функции и методы
		const spyMathPow = jest.spyOn(Math,"pow")
		square(2)
		// toBeCalledTimes проверяет сколько раз вызовется функция
		expect(spyMathPow).toBeCalledTimes(1)
	})
	// Выполняется после каждого запуска теста Например создаём МОКИ
	afterEach(() => {
	})
	// Выполняется 1 раз после всех тестов
	afterAll(() => {
	})
})
