package ruizhi.javase.day04.code._05循环嵌套;

/**
 * <pre>
 *	需求: 在控制台输出九九乘法表。
 *
 * 	首先我们写出九九乘法表:
 * 	1*1=1
 * 	1*2=2	2*2=4
 * 	1*3=3	2*3=6	3*3=9
 * 	1*4=4	2*4=8	3*4=12	4*4=16
 * 	...
 * 	1*9=9	2*9=18	3*9=27	...
 *
 * 我们先把这个九九乘法表看出是这样的一个形状:
 * 	*
 * 	**
 * 	***
 * 	****
 * 	*****
 * 	******
 * 	*******
 * 	********
 * 	*********
 *
 * 注意:
 * 	'\x' 	x表示任意，这种做法叫转义字符
 * 	'\t'	tab键的位置
 * 	'\r'	回车
 * 	'\n'	换行
 * </pre>
 */
class ForForDemo3 {

	public static void main(String[] args) {
		// 为了方便, 我们的 i 还有 j 从 1 开始
		for (int i = 1; i <= 9; i++) {
			for (int j = 1; j <= i; j++) {
				System.out.print(i + " * " + j + " = " + i * j + "\t");
			}
			System.out.println();
		}
	}

}