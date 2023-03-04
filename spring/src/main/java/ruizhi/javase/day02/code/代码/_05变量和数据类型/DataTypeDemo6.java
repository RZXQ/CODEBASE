package ruizhi.javase.day02.code.代码._05变量和数据类型;

/**
 * <pre>
 * 面试题:
 * 	byte b1 = 3, b2 = 4, b;
 * 	b = b1 + b2;
 * 	b = 3 + 4;
 * 哪句是编译失败的呢？为什么呢？
 * </pre>
 */

class DataTypeDemo6 {

	public static void main(String[] args) {
		byte b1 = 3, b2 = 4, b;

		// 变量 -> 这个是类型提升, 所以有问题 -> 原因： 两个 byte 数据做加法, 首先转换成为 int 类型
		// b = b1 + b2;

		// 常量 -> 先把结果计算出来, 然后看是否在 byte 的范围内, 如果在就不报错
		b = 3 + 4;

		// 原因: 变量是在运行的时候才可以确定的(因为变量的值是可以改变的), 而常量是在编译期间就可以确定的
	}

}