package ruizhi.javase.day03.code._01ArithmeticOperators;

/**
 * <pre>
 * 运算符: 就是对常量和变量进行操作的符号。
 *
 * 分类：算术运算符，赋值运算符，比较运算符，逻辑运算符，位运算符，三目运算符 (一元运算符， 二元运算符， 三元运算符)
 *
 * 算术运算符： + , - , * , / , % , ++ , --
 *
 * 	注意事项:
 * 		A: 整数相除只能得到整数. 如果想得到小数, 必须把数据变化为浮点数类型
 * 		B: / 获取的是除法操作的商, % 获取的是除法操作的余数
 * </pre>
 */
class OperatorDemo {

	public static void main(String[] args) {
		// 定义变量
		int x = 3; // 把 3 赋值给 int 类型的变量 x, 从右边往左边念
		int y = 4;

		System.out.println(x + y);
		System.out.println(x - y);
		System.out.println(x * y);
		System.out.println(x / y); // 整数相除只能得到整数

		// 我就想得到小数，该肿么办呢?
		// 只需要把操作的数据中任意的一个数据变为浮点数
		System.out.println(x * 1.0 / y);

		// %的应用
		System.out.println(x % y); // 得到的是余数
		// 如果参与负数的取模运算, 只参考左边数字(5)的位置正负, 如果左边是一个正数, 答案就是一个正数; 如果左边是一个负数, 答案就是一个负数
		System.out.println(5 % 2); // 1
		System.out.println(5 % -2); // 1
		System.out.println(-5 % 2); // -1
		System.out.println(-5 % -2); // -1
	}

}