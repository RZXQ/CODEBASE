package ruizhi.javase.day04.code._03循环结构_while语句;

/**
 * while循环和for循环的区别?
 *
 * 使用区别:
 * 	a. 如果你想在循环结束后，继续使用控制条件的那个变量, 用while循环, 否则用for循环。不知道用for循环
 *  b. 因为变量及早的从内存中消失, 可以提高内存的使用效率
 */
class WhileDemo4 {

	public static void main(String[] args) {
		// for循环实现
		for (int x = 0; x < 10; x++) {
			System.out.println("学习Java技术哪家强,中国北京传智播客");
		}
		// 这里不能在继续访问了, x 在内存中就已经不存在了
		// System.out.println(x);

		// while循环实现
		int y = 0;
		while (y < 10) {
			System.out.println("学习Java技术哪家强,中国北京传智播客");
			y++;
		}
		// 这里是可以继续访问的, 还驻留在内存空间, 浪费内存空间
		System.out.println(y);
	}

}