package ruizhi.javase.day04.code._02循环结构_for语句;

// 需求：请在控制台输出数据1-10
class ForDemo2 {

	public static void main(String[] args) {
		// 原始做法
		System.out.println(1);
		System.out.println(2);
		System.out.println(3);
		System.out.println(4);
		System.out.println(5);
		System.out.println(6);
		System.out.println(7);
		System.out.println(8);
		System.out.println(9);
		System.out.println(10);

		System.out.println("-------------");

		// 如何改进呢?用循环改进
		for (int x = 1; x <= 10; x++) { // 定义的变量 x 在所属的大括号内有效，所以后面如果重复定义，并不会报错
			System.out.println(x);
		}

		System.out.println("-------------");

		// 从0开始
		for (int x = 0; x < 10; x++) {
			System.out.println(x + 1);
		}
	}

}