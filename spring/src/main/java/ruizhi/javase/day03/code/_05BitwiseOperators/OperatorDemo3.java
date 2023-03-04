package ruizhi.javase.day03.code._05位BitwiseOperators;

/**
 * <pre>
 * <<: 左移 左边最高位丢弃，右边补齐0
 *
 * >>: 右移 最高位是0，左边补齐0；最高为是1，左边补齐1
 *
 * >>>: 无符号右移 无论最高位是0还是1，左边补齐0
 *
 * 面试: 请用最有效率的方式写出计算2乘以8的结果?
 * 		a. 乘法到底层永远都会转换成为位移运算, 直接做位移运算, 因为省去了转换的步骤, 所以更有效率 2 * 8
 * 		b. 答案: 2 << 3
 * </pre>
 */
class OperatorDemo3 {

	public static void main(String[] args) {
		// <<: 把 << 左边的数据乘以2的移动次幂
		System.out.println(3 << 2); // 3*2^2 = 3*4 = 12;

		// >>: 把 >> 左边的数据除以2的移动次幂
		System.out.println(24 >> 2); // 24 / 2^2 = 24 / 4 = 6
		System.out.println(24 >>> 2); // 对于正数, 无符号右移, 和一般的右移结果是相同的

		System.out.println(-24 >> 2);
		System.out.println(-24 >>> 2);
		// 对于 >> 或者 <<有符号左移或者右移, 对应的就是 乘法 或者 除法
		// 对于 >>> 无符号右移, 不对应任何, 所得到的数永远都是正数
	}

}
/**
 * <pre>
 * 3 << 2:
 * 计算出3的二进制: 11
 * 		00000000 00000000 00000000 00000011
 *  (00)000000 00000000 00000000 0000001100
 *
 * -24 >> 2:
 * 首先, 计算出24的二进制: 11000
 * 原码: 10000000 00000000 00000000 00011000
 * 反码: 11111111 11111111 11111111 11100111
 * 补码: 11111111 11111111 11111111 11101000
 *
 * 然后准备进行右移 2 位:
 * 补码: 11111111 11111111 11111111 11101000
 * 补码: 1111111111 11111111 11111111 111010(00)
 *
 * 补码: 1111111111 11111111 11111111 111010
 * 反码: 1111111111 11111111 11111111 111001
 * 原码: 1000000000 00000000 00000000 000110
 *
 * 结果: -6
 *
 * -24 >>> 2:
 * >>>的移动: 计算出24的二进制: 11000
 * 原码: 10000000 00000000 00000000 00011000
 * 反码: 11111111 11111111 11111111 11100111
 * 补码: 11111111 11111111 11111111 11101000
 *
 * 补码: 11111111 11111111 11111111 11101000
 * 补码: 0011111111 11111111 11111111 111010(00) 是一个正数, 原反补都相同
 *
 * 结果: 1073741818
 * </pre>
 */