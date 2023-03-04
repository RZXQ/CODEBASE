package ruizhi.javase.day03.code._07键盘录入;

/**
 * <pre>
 * 键盘录入练习: 键盘录入两个数据，获取这两个数据中的最大值
 * </pre>
 */
import java.util.Scanner;

class ScannerTest2 {

	public static void main(String[] args) {
		// 创建键盘录入对象
		Scanner sc = new Scanner(System.in);

		System.out.println("请输入第一个数据：");
		int a = sc.nextInt();

		System.out.println("请输入第二个数据：");
		int b = sc.nextInt();

		// 获取这两个数据中的最大值
		int max = (a > b ? a : b);
		System.out.println("max:" + max);
	}

}