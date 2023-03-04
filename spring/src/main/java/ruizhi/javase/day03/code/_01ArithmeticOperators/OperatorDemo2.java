package ruizhi.javase.day03.code._01ArithmeticOperators;

/**
 * <pre>
 * ++,-- 运算符的使用:
 *
 * 	单独使用: 放在操作数的前面和后面效果一样(这种用法是我们比较常见的)
 * 	参与运算使用:
 * 		a. 放在操作数的前面, 先自增或者自减, 然后再参与运算
 * 		b. 放在操作数的后面，先参与运算，再自增或者自减。
 *
 * 	作用：就是对变量进行自增1或者自减1。
 * </pre>
 */
class OperatorDemo2 {

	public static void main(String[] args) {
		// 定义两个变量
		int x = 3;
		int y = 4;

		System.out.println("x:" + x + ",y:" + y); // 字符串和任何数据做运算,  结果都是字符串

		// 单独使用
		x++; // ++x;
		y--; // --y;
		System.out.println("x:" + x + ",y:" + y);

		// 意外的类型,常量是不可以这样做的 -> 因为常量的值不可以改变
		// System.out.println(10++);

		System.out.println("-------------------");
		// 参与运算使用
		int a = 3;
		int b = 4;

		int c = a++;
		int d = b--;
		// int c = ++a;
		// int d = --b;

		System.out.println("a:" + a); // 4, 4
		System.out.println("b:" + b); // 3, 3
		System.out.println("c:" + c); // 3, 4
		System.out.println("d:" + d); // 4, 3
	}

}