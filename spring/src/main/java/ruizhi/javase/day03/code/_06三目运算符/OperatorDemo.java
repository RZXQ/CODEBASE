package ruizhi.javase.day03.code._06三目运算符;

/**
 * <pre>
 *	单目运算符: ~3
 *
 * 	双目运算符: 3 + 4
 *
 * 	三目运算符
 * 		格式: 比较表达式 ? 表达式1 : 表达式2;
 *
 * 		比较表达式:结果是一个boolean类型。(运算符要有结果， 结果是一个boolean类型)
 *
 * 		执行流程: 根据比较表达式的计算返回一个true或者false, 如果是true，就把表达式1作为结果; 如果是false，就把表达式2作为结果。
 * </pre>
 */
class OperatorDemo {

	public static void main(String[] args) {
		int x = 100;
		int y = 200;

		int z = ((x > y) ? x : y);

		// int z = ((x < y)? x: y);

		// int z = ((x == y)? x: y);

		// 下面的会报错 -> 原因: 把 y 赋值给 x，留下来 x，但是要求的是 boolean 类型，所以会报错
		// int z = ((x = y)? x : y);

		System.out.println("z:" + z);
	}

}
