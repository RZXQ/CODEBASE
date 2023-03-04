package ruizhi.javase.day03.code._02AssignmentOperators;

/**
 * <pre>
 * 面试题:
 * 	short s = 1;
 * 	s = s + 1;
 *
 * 	short s = 1;
 * 	s += 1;
 * 	上面两个代码有没有问题，如果有，那里有问题。
 *
 * 	为什么第二个木有问题呢?
 * 		a. 扩展的赋值运算符其实隐含了一个强制类型转换。
 * 		b. s += 1; 不是等价于 s = s + 1; 而是等价于 s = (s的数据类型)(s + 1);
 */
class OperatorTest {

	public static void main(String[] args) {
		// short s = 1;
		// s = s + 1; => short 类型参与运算， 要首先转换成为 int 类型
		// System.out.println(s);

		short s = 1;
		s += 1; // 好像是 s = s + 1; 但是其实不是, 里面隐藏了一个强制类型转换
		System.out.println(s);
	}

}