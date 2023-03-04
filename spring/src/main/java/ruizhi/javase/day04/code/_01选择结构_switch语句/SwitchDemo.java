package ruizhi.javase.day04.code._01选择结构_switch语句;

import java.util.Scanner;

/**
 * <pre>
 *	switch语句格式：
 * 		switch(表达式) {
 * 			switch 就是选择题
 * 				case 值1:
 * 				break;
 * 			case意思: 一个case(案例), 小case 语句体;
 * 				break;
 * 			case 值2: 语句体2;
 * 			   	break; ...
 * 			default: 语句体n+1;
 * 				break; => break 可以省略
 * 		}
 *	格式的解释:
 * 		switch: 表示这是switch选择结构 表达式:这个地方的取值是有限定的: byte, short, char, int, 字符串, 枚举
 * 		case:	后面跟的是要和表达式进行比较的值 => 注意是值(不是变量) 语句体:要执行的代码 break:表示中断, 结束的意思, 可以控制switch语句的结束.
 * 		default:当所有的值都和表达式不匹配的时候, 就执行default控制的语句. 其实它就相当于if语句(或者是 if..else if...else)的else.
 *
 *	增强 switch 语句格式: enhanced switch:
 *		Scanner sc = new Scanner(System.in);
 *		switch (sc.nextInt()) {
 * 			case 1 -> System.out.println("Monday");
 * 			case 2 -> System.out.println("Tuesday");
 * 			case 3 -> System.out.println("Wednesday");
 * 			case 4 -> System.out.println("Thursday");
 * 			case 5 -> System.out.println("Friday");
 * 			case 6 -> System.out.println("Saturday");
 * 			case 7 -> System.out.println("Sunday");
 * 			default -> System.out.println("Wrong input");
 *		}
 *
 *	面试题:
 * 		byte可以作为switch的表达式吗?
 * 		long可以作为switch的表达式吗?
 * 		String可以作为switch的表达式吗?
 *
 *	案例: 键盘录入一个数据, 根据这个数据, 我们输出对应的星期? 键盘录入1, 对应输出星期一 键盘录入2, 对应输出星期二 ... 键盘录入7, 对应输出星期日
 * 		分析:
 * 			1:键盘录入, 用Scanner实现
 * 			2:判断我们既可以使用if语句, 也可以使用我们要讲解的switch语句
 *
 * 		注意:
 * 			a. 遇到左大括号缩进一个tab的位置.
 * 			b. 关联不是很大的语句间空行
 *
 * </pre>
 */
class SwitchDemo {

	public static void main(String[] args) {
		// 创建键盘录入对象
		Scanner sc = new Scanner(System.in);

		// 控制键盘录入数据
		System.out.println("请输入一个数据(1-7):");
		int week = sc.nextInt(); // 3

		// switch判断语句
		switch (week) {
			case 1:
				System.out.println("星期一");
				break;
			case 2:
				System.out.println("星期二");
				break;
			case 3:
				System.out.println("星期三");
				break;
			case 4:
				System.out.println("星期四");
				break;
			case 5:
				System.out.println("星期五");
				break;
			case 6:
				System.out.println("星期六");
				break;
			case 7:
				System.out.println("星期日");
				break;
			default:
				System.out.println("你输入的数据有误");
				break;
		}
	}

}