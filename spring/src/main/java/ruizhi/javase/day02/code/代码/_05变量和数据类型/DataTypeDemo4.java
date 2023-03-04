package ruizhi.javase.day02.code.代码._05变量和数据类型;

/**
 * <pre>
 * 强制转换: 从大的数据类型到小的数据类型
 *
 * 格式: 目标数据类型 变量 = (目标数据类型) (被转换的数据)
 *
 * 注意: 不要随意的去使用强制转换, 因为它隐含了精度损失问题
 * </pre>
 */
class DataTypeDemo4 {

	public static void main(String[] args) {
		byte a = 3;
		int b = 4;

		// 这个肯定没有问题
		// int c = a + b;
		// byte c = 7;

		// 这个是有问题的: 因为编译器认为, 后面的 a + b 是一个 int 类型, 如果要赋值给一个 byte 类型, 会出现精度损失(虽然 7 在 byte
		// 允许表示的范围之内)
		// byte c = a + b;
		// 用强制类型转换改进
		byte c = (byte) (a + b); // 如果加了强制转换, 精确度不会丢失, 只是把 int 类型的 7 前面的 3 个字节给去掉了,
									// 只留下来了最后的一个字节
		System.out.println(c);
	}

}