package ruizhi.javase.day02.code.代码._05变量和数据类型;

/**
 * <pre>
 * 字符串数据和其他数据做 +, 结果是字符串类型.
 *
 * 这里的+不是加法运算, 而是字符串连接符.
 * </pre>
 */
class DataTypeDemo9 {

	public static void main(String[] args) {
		System.out.println("hello" + 'a' + 1); // helloa1
		System.out.println('a' + 1 + "hello"); // 98hello

		System.out.println("5 + 5 = " + 5 + 5); // 5 + 5 = 55
		System.out.println(5 + 5 + " = 5 + 5"); // 10 = 5 + 5
	}

}