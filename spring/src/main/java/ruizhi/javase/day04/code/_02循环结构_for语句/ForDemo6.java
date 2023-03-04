package ruizhi.javase.day04.code._02循环结构_for语句;

/**
 * <pre>
 * 需求: 在控制台输出所有的”水仙花数”
 *
 * 分析: 我们都不知道什么叫"水仙花数"，你让我怎么做呢?
 *
 * 所谓的水仙花数是指一个三位数，其各位数字的立方和等于该数本身.
 * 	举例：153就是一个水仙花数. 153 = 1*1*1 + 5*5*5 + 3*3*3 = 1 + 125 + 27 = 153
 *
 * 	A: 三位数其实是告诉了我们范围.
 * 	B: 通过for循环我们就可以实现获取每一个三位数 但是麻烦是如何获取这个三位数的个, 十, 百位上的数据
 * 		我们如何获取一个数据的个, 十, 百呢?
 * 		假设有个一个数据:153
 * 			ge: 153 % 10 = 3
 * 			shi: 153 / 10 % 10 = 5
 * 			bai：153 / 10 /10 % 10 = 1
 * 			qian：x / 10 / 10 / 10 % 10
 * 			wan: x / 10 / 10 / 10 / 10 %10 ...
 * 	C:让 ge * ge * ge + shi * shi * shi + bai * bai * bai和该数据比较 如果相同，就把该数据在控制台输出.
 * </pre>
 */
class ForDemo6 {

	public static void main(String[] args) {
		// 三位数其实是告诉了我们范围.
		int ge, shi, bai;
		for (int x = 100; x < 1000; x++) {
			ge = x % 10;
			shi = x / 10 % 10;
			bai = x / 10 / 10 % 10; // x / 100 % 10;

			// 让 ge * ge * ge + shi * shi * shi + bai * bai * bai 和该数据比较
			if (ge * ge * ge + shi * shi * shi + bai * bai * bai == x) {
				// 如果相同，就把该数据在控制台输出.
				System.out.println(x);
			}
		}
	}

}