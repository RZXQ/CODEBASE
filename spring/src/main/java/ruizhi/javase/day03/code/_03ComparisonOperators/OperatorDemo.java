package ruizhi.javase.day03.code._03ComparisonOperators;

/**
 * <pre>
 *	比较运算符:
 * 		==, !=, >, >=, <, <=
 *
 * 	特点:
 * 		无论你的操作是简单还是复杂，结果是boolean类型。
 *
 * 	注意事项：
 * 		"=="不能写成"="。
 * 	</pre>
 */
class OperatorDemo {

	public static void main(String[] args) {
		int x = 3;
		int y = 4;
		int z = 3;

		System.out.println(x == y);
		System.out.println(x == z);
		System.out.println((x + y) == (x + z));
		System.out.println("------------");

		System.out.println(x != y);
		System.out.println(x > y);
		System.out.println(x >= y);
		System.out.println(x < y);
		System.out.println(x <= y);
		System.out.println("------------");

		int a = 10;
		int b = 20;

		// boolean flag = (a == b); // 原本打算作比较
		// boolean flag = (a = b); // 这个是有问题的，不兼容的类型(把 a 赋值给了 flag)
		// System.out.println(flag);

		int c = (a = b); // 把b赋值给a，然后再把 a 赋值给 c
		System.out.println(c);
	}

}