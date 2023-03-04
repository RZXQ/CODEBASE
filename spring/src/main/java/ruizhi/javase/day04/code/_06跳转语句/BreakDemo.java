package ruizhi.javase.day04.code._06跳转语句;

/**
 * <pre>
 *	控制跳转语句:
 * 		break: 中断
 * 		continue: 继续
 * 		return: 返回
 *
 * 产生背景:
 * 		Java 中的 goto 是保留字, 目前不能使用, 虽然没有 goto 语句可以增强程序的安全性, 但是也带来很多不便, 比如说, 我想在某个循环直到某一步的时候就结束, 现在就做不了这件事情. 为了弥补这个缺陷, Java 提供了 break, continue 和 return 来实现控制语句的跳转和中断.
 *
 * break 使用场景:
 * 		A:switch语句中
 * 		B:循环语句中(循环语句中加入了if判断的情况)
 * 			注意:
 * 				1. 离开上面的两个场景, 无意义.
 * 				2. 记住: 当break语句单独存在时, 下面不要定义其他语句, 因为执行不到. (有 if 就不一定了)
 *
 * 如何使用呢?
 * 		A:跳出单层循环: break默认跳出所在的当前循环
 * 		B:跳出多层循环: 如果出现了循环嵌套, break想要跳出指定的循环, 可以通过标号来完成
 * 			要想实现这个效果, 就必须知道一个东西. 带标签的语句.
 * 			格式:
 * 				标签名: 语句
 */
class BreakDemo {

	public static void main(String[] args) {
		// 在 switch 或 loop 外部中断
		// break;

		// 跳出单层循环
		for (int x = 0; x < 10; x++) {
			if (x == 3) {
				break;
			}
			System.out.println("HelloWorld");
		}

		System.out.println("over"); // break 只是中断了当前循环, 并不影响后面的执行语句
		System.out.println("-------------");

		wc: for (int x = 0; x < 3; x++) {
			for (int y = 0; y < 4; y++) {
				if (y == 2) {
					// break nc;
					break wc; // => 直接结束了外循环
				}
				System.out.print("*");
			}
			System.out.println();
		}
	}

}