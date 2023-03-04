package ruizhi.javase.day04.code._01选择结构_switch语句;

import java.util.Scanner;

/**
 * <pre>
 * 用switch语句实现键盘录入月份, 输出对应的季节
 *
 * 分析: A:键盘录入一个月份, 用Scanner实现 B:用switch语句实现即可
 *
 * if 语句和switch 语句的区别?
 * 	if 语句:
 * 		A: 针对结果是boolean类型的判断
 * 		B: 针对一个范围的判断
 * 		C: 针对几个常量值的判断 switch语句: A:
 * 	switch 语句:
 * 		a: 针对几个常量值的判断 对于几个固定的值判断, 建议使用switch语句, 因为switch语句会将具体的答案都加载进内存。效率相对高一点。 解释: if
 * 		b: 语句需要一条一条执行, 而 switch 直接把答案加载进内存了, 因为 switch, 只有一个大括号; if 语句有多个大括号, 所以是一个区间一个区间执行的
 * </pre>
 */

class SwitchTest4 {

	public static void main(String[] args) {
		// 创建键盘录入对象
		Scanner sc = new Scanner(System.in);

		// 录入数据
		System.out.println("请输入月份(1-12): ");
		int month = sc.nextInt();

		// 这样写太麻烦了, 我们使用一个我们不想使用的东西: case穿透(不会继续走下面的 case 语句进行判断, 遇到 break 或者到了程序最后就结束)

		// enhanced switch edition:
		// switch (month) {
		// case 1, 2, 12 -> System.out.println("冬季");
		// case 3, 4, 5 -> System.out.println("春季");
		// case 6, 7, 8 -> System.out.println("夏季");
		// case 9, 10, 11 -> System.out.println("秋季");
		// default -> System.out.println("你输入的月份有误");

		// normal switch edition:
		switch (month) {
			case 1:
			case 2:
			case 12:
				System.out.println("冬季");
				break;
			case 3:
			case 4:
			case 5:
				System.out.println("春季");
				break;
			case 6:
			case 7:
			case 8:
				System.out.println("夏季");
				break;
			case 9:
			case 10:
			case 11:
				System.out.println("秋季");
				break;
			default:
				System.out.println("你输入的月份有误");
				// break可以省略不写
		}
	}

}