package ruizhi.javase.day04.code._01选择结构_switch语句;


// 看程序，写结果
class SwitchTest {

	public static void main(String[] args) {
		int x = 2;
		int y = 3;
		switch (x) {
			default:
				y++; // 单独使用的时候, y++ 和 ++y 结果一样
				break;
			case 3:
				y++;
			case 4:
				y++;
		}
		System.out.println("y = " + y);
		System.out.println("---------------");

		int a = 2;
		int b = 3;
		switch (a) {
			default:
				b++;
			case 3:
				b++;
			case 4:
				b++;
		}
		System.out.println("b = " + b);
	}

}