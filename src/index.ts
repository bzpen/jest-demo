
/** 1、杨辉三角
 * 杨辉三角形是排列成三角形的一系列数字。
 * 在杨辉三角形中，每一行的最左边和最右边的数字总是 
 * 1。 对于其余的每个数字都是前一行中直接位于它上面的两个数字之和。
 *    1
 *   1  1
 *  1  2  1
 * 1  3  3  1
 * ······
 *
 * 要求 
 *   triangle(i,j) 返回杨辉三角第i行 第j列的数 
 *    0 < i < 15  0 < j < 15
 *  例：
 *    triangle(4,2) = 3
 */
function triangle( i:number , j: number): number{
  // 杨辉三角代码
  return i + j
}

export {
  triangle
}
