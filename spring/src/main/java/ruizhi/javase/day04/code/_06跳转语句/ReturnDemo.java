package ruizhi.javase.day04.code._06跳转语句;

/**
 * return:返回: 其实它的作用不是结束循环的, 而是结束方法的(只能结束 void 的方法) -> 其实是结束了 main 方法
 */
class ReturnDemo {

	public static void main(String[] args) {
		for (int x = 0; x < 10; x++) {
			if (x == 2) {
				System.out.println("退出");
				// break;
				// continue;
				return;
			}

			System.out.println(x);
		}

		System.out.println("over");
	}

	public static void myPrint() {
		System.out.println("hello java");
		// 注意：所有的方法都有 return, 只不过, 如果返回值类型是void, 那么函数中的return语句可以省略不写, 写上也可以.
	}

}
