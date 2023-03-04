package ruizhi.javase.day04.code._01选择结构_switch语句;

import java.util.Scanner;

/**
 * <pre>
 * 模拟单项选择题
 * 分析:
 *	A:出一个选择题, 然后供你选择
 *	B:键盘录入选择的数据。
 *	C:根据选择来给出你选择的结论。
 * </pre>
 */
class SwitchTest2 {

	public static void main(String[] args) {
		// 出一个选择题, 然后供你选择。
		// 由于我们现在没有办法键盘录入得到一个'A','B'
		// 这样的东西, 我就用65, 66这样的值替代
		// 将来我们获取到这样的值以后, 强制转换为字符类型
		System.out.println("下面的几个人你最爱谁?");
		System.out.println("65 林青霞");
		System.out.println("66 张曼玉");
		System.out.println("67 刘德华");
		System.out.println("68 王力宏");

		// 键盘录入选择的数据。
		Scanner sc = new Scanner(System.in);

		System.out.println("请输入你的选择：");
		int choiceNumber = sc.nextInt();

		// 强制转换为字符类型 => int 类型转换成为 char 类型
		// 其实我感觉不需要进行强制转换, 下面的这一步是没有必要的
		char choice = (char) choiceNumber;

		switch (choice) { // char 类型在做运算的时候, 会首先转换成为 int 类型
			case 'A':
				System.out.println("恭喜你,选择正确");
				break;
			case 'B':
				System.out.println("不好意思, 你选择有误");
				break;
			case 'C':
				System.out.println("不好意思, 你选择有误");
				break;
			case 'D':
				System.out.println("不好意思, 你选择有误");
				break;
			default:
				System.out.println("没有该选项");
				break;
		}
	}

}