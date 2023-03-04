package ruizhi.javase.day03.code._05位BitwiseOperators;

/**
 * <pre>
 * 面试题: 请自己实现两个整数变量的交换
 * 	注意: 以后讲课的过程中, 我没有明确指定数据的类型, 默认int类型。
 * </pre>
 */
class OperatorTest {

	public static void main(String[] args) {
		int a = 10;
		int b = 20;

		System.out.println("a:" + a + ",b:" + b);

		// 只推荐下面的方式 1 和 2
		// 方式1: 使用第三方变量(开发中用的)
		// int c = a;
		// a = b;
		// b = c;
		// System.out.println("a:" + a + ",b:" + b);
		// System.out.println("------------");

		// 方式2: 用位异或实现(面试用)
		// 左边: a, b, a
		// 右边: a ^ b
		// a = a ^ b;
		// b = a ^ b; //a ^ b ^ b = a
		// a = a ^ b; //a ^ b ^ a = b(b 的值已经变成了 a, 所以可以替换)
		// System.out.println("a:" + a + ",b:" + b);
		//
		// 方式2:
		// 用位异或一句话实现
		// b = (a ^ b) ^ (a = b);
		// 或者也可以写成 a = (a ^ b) ^ (b = a);
		// System.out.println("a:" + a + ",b:" + b);

		// 方式3: 用变量相加的做法 => 这种方式不要用, 如果两个整数的数值过大, 会超出int范围, 会强制转换。数据会变化。
		// a = a + b; // a = 30
		// b = a - b; // b = 10
		// a = a - b; // a = 20
		// System.out.println("a:" + a + ",b:" + b);
		//
		// 方式3: 用变量相加一句话搞定 => 这种方式不要用, 如果两个整数的数值过大, 会超出int范围, 会强制转换。数据会变化。
		// b = (a + b) - (a = b); //b = 30 - 20 = 10, a = 20
		// System.out.println("a:" + a + ",b:" + b);
	}

}