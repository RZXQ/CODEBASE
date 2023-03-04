package ruizhi.javase.day03.code._01ArithmeticOperators;

/**
 * <pre>
 * + 的用法:
 * 		A: 加法
 * 		B: 正号
 * 		C: 字符串连接符
 * </pre>
 */
class OperatorDemo3 {

	public static void main(String[] args) {
		// 加法
		System.out.println(3 + 4);

		System.out.println('a'); // 直接输出单引号的这个东西, 表示要输出的是这个字符
		System.out.println('a' + 1); // 这里是加法: char 类型参与运算, 就会转换成为 int 类型
		System.out.println("a" + 1); // 这里是拼接: 字符串和任何数据类型进行操作, 都会转换成为字符串

		// 正号
		System.out.println(+4);

		// 字符串连接符
		System.out.println("hello" + 'a' + 1); // 从左到右进行运算
		System.out.println('a' + 1 + "hello"); // 98hello
	}

}