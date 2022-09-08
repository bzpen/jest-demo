// 爬楼梯问题-例解
/**
 * 解题思路 
 * 理解 f（n） = f（n-1）+ f( n-2 )
 * 
 */
/**
 * 1、解法一 
 * 自下而上递推
 * 时间复杂度 O(n)
 * 空间复杂度 O(n)
 * ** 这个算法解决这个问题已经够了 其他方法难度系数增大性能优化效果一搬
 * 
 * @returns 
 * 
 */
function getStairsList():Array<number>{
  let arr_1:Array<number> = [0,1,2]
  for(let i=3;i<= 100;i++){
    arr_1.push(arr_1[i-1] + arr_1[i-2])
  }
  return arr_1
}

/**
 * 解法二 自上而下递归
 * 时间复杂度 O( n )
 * 空间复杂度  --  O(1)
 * 缺点： 利用递归栈 无法通过全部测试 存在爆栈情况 n < 44 通过
 * 
 * 递归转非递归可实现，能递归实现都能够通过自定义栈转化非递归，所以写出递归式，问问如何转非递归式子即可
 * 
 * 非递归思路：
 *  利用自定义栈模仿递归栈，
 *  递归式换成迭代
 * @param n 
 * @returns 
 */
function getStairs_2(n:number):number{
  if(n === 0)
    return 0;
  if(n === 1)
    return 1;
  if(n === 2)
    return 2;
  return getStairs_2(n-1) + getStairs_2(n-2)
}

export {
  getStairsList
  ,getStairs_2
}
