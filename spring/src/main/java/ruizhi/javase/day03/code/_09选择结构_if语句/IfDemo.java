package ruizhi.javase.day03.code._09选择结构_if语句;

/**
 * <pre>
 * 选择结构:
 * 	a. if语句
 * 	b. switch语句
 *
 * if语句:
 * 	格式1
 * 	格式2
 * 	格式3
 *
 * if语句的格式： if(比较表达式) { 语句体; }
 *
 * 执行流程: 先计算比较表达式的值, 看其返回值是true还是false.
 * 	a. 如果是true, 就执行语句体
 * 	b. 如果是false, 就不执行语句体
 * </pre>
 */
class IfDemo {

	public static void main(String[] args) {
		int x = 10;

		if (x == 10) {
			System.out.println("x等于10");
		}

		if (x == 20) {
			System.out.println("x等于20");
		}

		System.out.println("over");
	}

}