package ruizhi.javase.day03.code._09选择结构_if语句;

import java.util.Scanner;

/**
 * <pre>
 * 键盘录入月份的值，输出对应的季节。
 *
 * 	春	3,4,5
 * 	夏	6,7,8
 * 	秋	9,10,11
 * 	冬	12,1,2
 *
 * 分析：
 * 	A:键盘录入月份的值，所以我们要使用Scanner。
 * 	B:我们应该判断这个月份在那个季节，而这个判断情况较多，所以，用if语句格式3。
 *
 * if语句的使用场景：
 * 	A:针对表达式是一个boolean类型的判断
 * 	B:针对一个范围的判断
 * </pre>
 */

class IfTest3 {

	public static void main(String[] args) {
		// 创建键盘录入对象
		Scanner sc = new Scanner(System.in);

		// 录入数据
		System.out.println("请你输入一个月份:");
		int month = sc.nextInt();

		// 第一种方法: 利用 || 运算符
		if (month < 1 || month > 12) {
			System.out.println("你输入的月份有误");
		}
		else if (month == 3 || month == 4 || month == 5) { // 这里用短路运算符, 只要在这个范围就执行下面的语句
			System.out.println("春季");
		}
		else if (month == 6 || month == 7 || month == 8) {
			System.out.println("夏季");
		}
		else if (month == 9 || month == 10 || month == 11) {
			System.out.println("秋季");
		}
		else {
			System.out.println("冬季");
		}
		System.out.println("--------------");

		// 用范围也是可以改进的
		if (month < 1 || month > 12) {
			System.out.println("你输入的月份有误");
		}
		else if (month >= 3 && month <= 5) {
			System.out.println("春季");
		}
		else if (month >= 6 && month <= 8) {
			System.out.println("夏季");
		}
		else if (month >= 9 && month <= 11) {
			System.out.println("秋季");
		}
		else {
			System.out.println("冬季");
		}
		System.out.println("--------------");
	}

}