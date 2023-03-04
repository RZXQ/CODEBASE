package ruizhi.javase.day02.code.代码._05变量和数据类型;

/**
 * <pre>
 * 思考题1: 请问下面这个有没有问题:
 * 		double d = 12.345;
 * 		float f = d;
 *
 * 思考题2: 看看下面两个定义有没有区别呢?
 * 		float f1 = (float)12.345;
 * 		float f2 = 12.345f;
 *
 * f1 其实是通过一个 double 类型转换过来的, 而 f2 本身就是一个 float 类型
 * </pre>
 */
class DataTypeDemo5 {

	public static void main(String[] args) {
		// 把double赋值给float, 加了强制类型转换
		double d = 12.345;
		float f = (float) d;

		// 看看下面两个定义有没有区别呢? 有区别
		float f1 = (float) 12.345;
		float f2 = 12.345F;
	}

}