package ruizhi.javase.day03.code._05位BitwiseOperators;

/**
 * <pre>
 *	位运算符：
 * 		&, |, ~, ^ (与, 或, 按位取反, 异或)
 * 		<<, >>, >>> (左移, 右移, 无符号右移)
 *
 * 	注意: 要做位运算，首先要把数据转换为二进制(补码)
 *
 * 	逻辑运算 与 位运算的区别?
 * 	    a. 当（...& |...）两边是布尔值，做的是逻辑运算
 * 	    b. 当两边是数据，做的是位运算
 *
 * 分析：因为是位运算, 所以我们必须先把数据换算成二进制, 下面的 3 和 4 的二进制都是补码, 因为正数的原反补都相同
 *
 * 3的二进制: 00000000 00000000 00000000 00000011
 * 4的二进制: 00000000 00000000 00000000 00000100
 *
 * &位与运算: 有0则0(可以把 0 看成 false)
 * 		00000000 00000000 00000000 00000011
 * 	&	00000000 00000000 00000000 00000100
 * 		-----------------------------------
 * 		00000000 00000000 00000000 00000000 结果是: 0
 *
 * |位或运算: 有1则1(可以把 1 看成 true)
 * 		00000000 00000000 00000000 00000011
 * 	|	00000000 00000000 00000000 00000100
 * 	-----------------------------------
 * 		00000000 00000000 00000000 00000111 结果是: 7
 *
 * ^位异或运算：相同则0, 不同则1
 * 		00000000 00000000 00000000 00000011
 * 	^	00000000 00000000 00000000 00000100
 * 	-----------------------------------
 * 		00000000 00000000 00000000 00000111 结果是: 7
 *
 * ~按位取反运算符: 0变1，1变0(包括符号位)
 * 				 00000000 00000000 00000000 00000011
 * 	(正数的补码) ~11111111 11111111 11111111 11111100 (得到的也是补码)
 *
 * 补码: 		11111111 11111111 11111111 11111100
 * 反码: 		11111111 11111111 11111111 11111011
 * 原码:		10000000 00000000 00000000 00000100 (我们看到的是负数的原码) 结果: -4(十进制)
 *
 * 按位取反的规律: 如对 a 按位取反，则得到的结果为 -(a + 1) => 对正数, 负数都适用
 * </pre>
 */
class OperatorDemo {

	public static void main(String[] args) {
		// &, |, ~, ^

		int a = 3;
		int b = 4;

		System.out.println(3 & 4); // 0
		System.out.println(3 | 4); // 7
		System.out.println(~3); // -4
		System.out.println(3 ^ 4); // 7
	}

}
