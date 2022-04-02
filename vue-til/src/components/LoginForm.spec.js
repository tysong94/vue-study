import { sum } from './math';

sum(10, 20);

// 테스트 케이스의 묶음.
describe('math.js', () => {
	test('10 + 20 = 30', () => {
		const result = sum(10, 20);
		expect(result).toBe(30);
	});
});
