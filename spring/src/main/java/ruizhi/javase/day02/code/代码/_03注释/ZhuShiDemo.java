package ruizhi.javase.day02.code.代码._03注释;

/**
 * <pre>
 * 注释:	用于解释说明程序的文字
 *
 * Java中注释的分类及格式:
 * 	单行注释: // 注意: 单行可以嵌套使用
 * 	多行注释: /星 星/ 注意: 多行不可以嵌套使用
 * 	文档注释: /星星 星/ 被javadoc工具解析生成一个说明书，面向对象部分讲解 => 单行, 多行注释很多语言都有, 但是只有文档注释是 Java 特有的注释
 * 	注意:
 * 		A. 这个文档注释是给 Developer 看的, 不是给最终的用户看的(Client)
 * 		B. 编译 javac不对注释进行编译(成为class字节码可执行文件), 所以 class 文件(java可执行文件)的大小不会变大
 * </pre>
 */
class ZhuShiDemo {

	// 程序要想独立运行, 必须要有 main 方法, main 方法是程序入口, 被 JVM 调用
	public static void main(String[] args) {
		System.out.println("好好学习, 天天向上");
	}

}