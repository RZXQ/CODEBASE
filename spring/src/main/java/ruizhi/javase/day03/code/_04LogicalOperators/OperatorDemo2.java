package ruizhi.javase.day03.code._04LogicalOperators;

/**
 * <pre>
 *	&&和&的区别? 同理||和|的区别?
 *		A:最终结果一样(只是运行效率的区别)
 *		B:&&具有短路效果。左边是false, 右边不执行.
 *		C:||具有短路效果。左边是true, 右边不执行.
 *
 *	开发中常用的逻辑运算符：
 *		&&, ||, ! (短路与, 短路或, 非), 效率会高一些(因为不需要判断后半部分的真假值, 提高了速度)
 * </pre>
 */
class OperatorDemo2 {

	public static void main(String[] args) {
		int a = 3;
		int b = 4;
		int c = 5;

		// && 双与
		System.out.println((a > b) && (a > c)); // false && false = false
		System.out.println((a > b) && (a < c)); // false && true = false
		System.out.println((a < b) && (a > c)); // true && false = false
		System.out.println((a < b) && (a < c)); // true && true = true
		System.out.println("----------------");

		int x = 3;
		int y = 4;

		// 与, 短路与; 或, 短路或, 其实不是特别容易观察出来. 这里面利用了自增, 如果其中一段表达式不执行, x 或者 y 的结果就会不一样
		// boolean b1 = ((x++ == 3) & (y++ == 4)); // x = 4; y = 5; b1 = true
		// boolean b1 = ((x++ == 3) && (y++ == 4)); // x = 4; y = 5; b1 = true
		// boolean b1 = ((++x == 3) & (y++ == 4)); // x = 4; y = 5; b1 = false
		boolean b1 = ((++x == 3) && (y++ == 4)); // x = 4; y = 4; b1 = false
		System.out.println("x:" + x);
		System.out.println("y:" + y);
		System.out.println(b1);
	}

}