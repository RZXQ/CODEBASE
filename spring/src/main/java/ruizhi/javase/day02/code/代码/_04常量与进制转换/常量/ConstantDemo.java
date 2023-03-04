package ruizhi.javase.day02.code.代码._04常量与进制转换.常量;

/**
 * <pre>
 * 常量: 在程序执行过程中, 其值不发生改变的量
 *
 * 分类: A:字面值常量 B:自定义常量(面向对象讲 -> final 关键字)
 * 字面值常量:
 * 	A:整数常量 所有的整数 举例：100, 200
 * 	B:浮点数常量 所有的小数 举例：10.23, 110.11
 * 	C:字符常量 用单引号括起来的内容 举例：'a', 'A', '0' 错误的：'ab'
 * 	D:字符串常量 用双引号括起来的内容 举例："hello", "world", "HelloWorld", ""(空字符串)
 * 	E:布尔常量 比较特殊 举例：true, false
 * 	F:空常量 后面讲 举例：null
 * </pre>
 */
class ConstantDemo {

	public static void main(String[] args) {
		// 整数常量的输出
		System.out.println(100);

		// 小数常量的输出
		System.out.println(100.10);

		// 字符常量的输出
		System.out.println('a');
		System.out.println('A');
		System.out.println('0');
		// 这个是有问题的
		// System.out.println('ab');

		// 布尔常量的输出
		System.out.println(true);
		System.out.println(false);

		// 字符串常量的输出
		System.out.println("hello");
	}

}
