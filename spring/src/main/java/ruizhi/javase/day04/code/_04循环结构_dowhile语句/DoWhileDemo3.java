package ruizhi.javase.day04.code._04循环结构_dowhile语句;

/**
 * <pre>
 * 注意死循环:
 * A. 一定要注意控制条件语句控制的那个变量的问题，不要弄丢了，否则就容易死循环。
 * B. 两种最简单的死循环格式
 *		while(true){...}
 * 		for(;;){...}
 * C. 死循环之后的代码执行不到
 * </pre>
 */
class DoWhileDemo3 {

	public static void main(String[] args) {
		int x = 0;
		while (x < 10) {
			System.out.println(x);
			x++; // 要改变循环条件, 不然会形成死循环
		}
		System.out.println("--------------");

		// while 形式的死循环
		// while (true) {
		// System.out.println("今天我很高兴，学习了死循环");
		// }

		// for 形式的死循环
		// for (; ; ) { // => 中间的循环控制语句不写, 默认的是 true
		// System.out.println("今天我很高兴，学习了死循环");
		// }

		// System.out.println("--------------"); // => 用了死循环之后, 后面的语句执行不到
	}

}