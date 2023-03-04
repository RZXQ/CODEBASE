package ruizhi.javase.day04.code._04循环结构_dowhile语句;

/**
 * <pre>
 * a. do...while循环的基本格式:
 * 		do {
 *			循环体语句;
 * 		}while(判断条件语句);
 *
 *
 * b. 扩展格式；
 * 		初始化语句;
 * 		do {
 * 			循环体语句;
 * 			控制条件语句;
 * 		}while(判断条件语句);
 * </pre>
 */
class DoWhileDemo {

	public static void main(String[] args) {
		// 输出10次HelloWorld。
		int x = 0;
		do {
			System.out.println("HelloWorld");
			x++; // x++ 与 ++x 在单独使用的时候没有任何区别, 就代表自增
		}
		while (x < 10); // 这里也可以写成是 ++x < 10, 然后省略上一行的 x++;

		System.out.println("--------------");

		// 求和1-100
		int sum = 0;
		int a = 1;
		do {
			sum += a;
			a++;
		}
		while (a <= 100); // 这里面也可以写成 ++a, 然后省略上面的 a++

		System.out.println(sum);
	}

}