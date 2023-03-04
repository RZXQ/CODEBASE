package ruizhi.javase.day03.code._06三目运算符;

/**
 * <pre>
 * 练习:
 * 	a. 获取两个整数中的最大值
 *	b. 获取三个整数中的最大值
 *	c. 比较两个整数是否相同
 * </pre>
 */
class OperatorTest {

	public static void main(String[] args) {
		// 获取两个整数中的最大值
		int x = 100;
		int y = 200;

		int max = (x > y ? x : y);
		System.out.println("max: " + max);
		System.out.println("--------");

		// 获取三个整数中的最大值
		int a = 10;
		int b = 30;
		int c = 20;

		// 分两步: A:先比较a,b的最大值 B:拿a,b的最大值在和c进行比较
		int temp = ((a > b) ? a : b);
		int max1 = (temp > c ? temp : c);
		System.out.println("max1: " + max1);

		// 一步搞定的第一种方法:
		// int max2 = a > b ? (a > c ? a : c) : (b > c ? b : c);
		// 一步搞定的第二种方法(但是不推荐)
		// int max2 = a > b ? a > c ? a : c : b > c ? b : c; => 省略了括号也能运行成功, 但是这样就没有任何的可读性
		// System.out.println("max2: " + max2);

		// 比较两个整数是否相同
		int m = 100;
		int n = 200;

		// boolean flag = (m == n)? true: false;
		boolean flag = (m == n);
		System.out.println(flag);
	}

}