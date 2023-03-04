package ruizhi.javase.day04.code._03循环结构_while语句;

/**
 * <pre>
 * 练习: 用while循环实现
 * 	a. 求出1-100之和
 * 	b. 统计水仙花数有多少个
 *
 * 	while(判断条件语句) {
 * 		循环体语句;
 * 		控制条件语句;
 *	}
 *
 *
 *
 * 	for(初始化语句; 判断条件语句; 控制条件语句) {
 * 		循环体语句;
 *	}
 *</pre>
 */
class WhileDemo2 {

	public static void main(String[] args) {
		// 求出1-100之和, for语句版本
		int sum = 0;

		for (int x = 1; x <= 100; x++) {
			sum += x;
		}

		System.out.println("sum:" + sum);
		System.out.println("--------");

		// while语句版本
		int sum2 = 0;

		int y = 1;
		while (y <= 100) {
			sum2 += y;
			y++;
		}

		// while (y <= 100) {
		// sum2 += y++; => ; 两行合并到了一行
		// }

		System.out.println("sum2:" + sum2);
		System.out.println("--------");
	}

}