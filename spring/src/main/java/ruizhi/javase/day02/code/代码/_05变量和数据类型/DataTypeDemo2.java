package ruizhi.javase.day02.code.代码._05变量和数据类型;

/**
 * <pre>
 * 使用变量的时候要注意的问题:
 * 	A:作用域
 * 		a. 变量定义在哪个大括号内, 它就在这个大括号内有效
 * 		b. 并且, 在同一个大括号内不能同时定义同名的变量
 *
 * 	B:初始化值
 * 		a. 没有初始化值的变量不能直接使用
 * 		b. 你只要在使用前给值就行, 不一定非要在定义的时候立即给值
 * 		c. 推荐在定义的时候直接给值, 怕忘记赋值
 *
 * 定义变量的格式:
 * 	a:数据类型 变量名 = 初始化值;
 * 	b:数据类型 变量名; 变量名 = 初始化值;
 *
 * 注意: 在一行上建议只定义一个变量, 可以定义多个, 但是不建议
 * </pre>
 */
class DataTypeDemo2 {

	public static void main(String[] args) {
		// 定义变量
		int x = 100;
		// 错误，不能有同名的
		// int x = 200;

		// 定义变量必须给值
		// int y;
		// System.out.println(y);

		// 可以先定义, 之后再赋值
		int z;
		z = 100;
		System.out.println(z);

		// 在一行上定义多个变量
		// int a = 10; int b = 20; int c = 30;
		// 上面的写法可以，但是不建议。
		int a = 10;
		int b = 20;
		int c = 30;

		// int d, e; -> 简写, 用逗号隔开
		// d = 40;
		// e = 50;

		// int f,int g; // 错误 -> 相当于是 int f; int int g;
		// int h; int i; // 正确
	}

}