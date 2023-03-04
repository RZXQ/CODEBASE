package ruizhi.javase.day02.code.代码._05变量和数据类型;

/**
 * <pre>
 * 数据类型: Java是一种强类型的语言, 针对每一种数据都定义了明确的数据类型。
 *
 * 数据类型分类
 *	A:基本数据类型(整型, 浮点型, 字符型, 布尔型)
 *	B:引用数据类型(类, 接口, 数组, 枚举, 注解)
 *
 * 基本数据类型: 4类8种
 *	A:整数			占用字节数
 *		byte			1
 *		short			2
 *		int				4
 *		long			8
 *
 *	B:浮点数
 *		float 			4
 *		double 			8
 *
 *	C:字符
 *		char			2
 *
 *	D:布尔
 *		boolean			1
 *
 *	注意
 *		A. 整数默认是int类型
 *		B. 浮点数默认是double类型
 *		C. 长整型后缀用L或者l标记。建议使用L: 出于不是特别好分辨的原因
 *		D. 单精度浮点数用F或者f标记。建议使用F
 *
 * 引用数据类型: 类, 接口, 数组, 枚举, 注解(Annotation)
 * </pre>
 */
class DataTypeDemo {

	public static void main(String[] args) {
		// 定义变量的格式
		// 数据类型 变量名 = 初始化值;

		// 定义一个字节变量
		byte b = 10; // -128 ~ 127 => 整数默认是 int 类型
		System.out.println(10);
		System.out.println(b);

		// 定义一个短整型变量
		short s = 100;
		System.out.println(s);

		// 定义一个整型变量
		int i = 1000;
		System.out.println(i);

		// 超过了int的范围
		// int j = 1000000000000; => 原因: 整数默认是int类型(右边的 int 类型装不下这个数)
		long j = 1000000000000L;
		// long j = 100L; => 如果不加 L 也不会报错，因为100在 int 范围之内
		System.out.println(j);

		// 定义浮点数据变量
		float f = 12.345F;
		System.out.println(f);

		double d = 12.345;
		System.out.println(d);

		// 定义字符变量
		char ch = 'a';
		System.out.println(ch);

		// 定义布尔变量
		boolean flag = true;
		System.out.println(flag);
	}

}