package ruizhi.javase.day04.code._03循环结构_while语句;

/**
 * <pre>
 *	我国最高山峰是珠穆朗玛峰: 8848m, 我现在有一张足够大的纸张, 厚度为: 0.01m。
 * 	请问, 我折叠多少次, 就可以保证厚度不低于珠穆朗玛峰的高度?
 *
 * 	分析:
 * 		A:定义一个统计变量, 默认值是0
 * 		B:最高山峰是珠穆朗玛峰: 8848m这是最终的厚度
 * 		  我现在有一张足够大的纸张, 厚度为: 0.01m这是初始厚度
 * 		C:我折叠多少次, 就可以保证厚度不低于珠穆朗玛峰的高度?
 * 		  折叠一次有什么变化呢?就是厚度是以前的2倍。
 * 		D:只要每次变化的厚度没有超过珠穆朗玛峰的高度, 就折叠, 统计变量++
 * 		E:输出统计变量
 * </pre>
 */
class WhileDemo5 {

	public static void main(String[] args) {
		// 第一种方法: for 循环
		// int count = 0;
		// for (double i = 0.01; i <= 8848; i *= 2) {
		// System.out.println(i);
		// }
		// System.out.println(count);

		// 第二种方法: while 循环
		int count = 0;
		double i = 0.01;
		while (i <= 8848) {
			System.out.println(i);
			count++;
			i *= 2;
		}
		System.out.println(count);
	}

}