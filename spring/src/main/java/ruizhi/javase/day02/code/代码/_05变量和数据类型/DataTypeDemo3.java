package ruizhi.javase.day02.code.代码._05变量和数据类型;

/**
 * <pre>
 * +是一个运算符(我们等会讲解)。做加法运算的。
 *
 * 一般来说，我们在运算的时候，要求参与运算的数据类型必须一致。
 *
 * 注意： boolean类型不能转换为其他的数据类型, boolean不参与数值运算
 *
 * 默认转换(从小到大的转换):
 * 	A: [byte, short, char] => int => long => float => double
 * 	B: byte, short, char相互之间不转换，他们参与运算首先转换为int类型(个人认为, 做比较运算的时候, 也会转换成为 int 类型, 因为比较运算也是运算)
 * </pre>
 */

class DataTypeDemo3 {

	public static void main(String[] args) {
		// 直接输出的方式做加法
		System.out.println(3 + 4);

		// 两个int类型做加法
		int x = 3;
		int y = 4;
		int z = x + y;
		System.out.println(z);
	}

}
