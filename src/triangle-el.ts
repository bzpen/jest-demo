/**
 * 杨辉三角答案生成
 * @param i :number  生成行数
 * @return arr_1 :Array<Array<number>>
 */
 function getTriangle(i:number):Array<Array<number>>{
  let arr_1:Array<Array<number>> = []
  for(let a = 0;a< i ; a++){
    let arr_2:Array<number> = []
    arr_1.push(arr_2)
    for(let b = 0; b <= a; b++){
      if(b === 0 || a === b)
        arr_2.push(1)
      else{
        arr_2.push(arr_1[a-1][b-1] + arr_1[a-1][b])
          
      }
    }
  }
  return arr_1;
}

/**
 * 解法一：迭代实现
 *  时间复杂度 O（n^2）
 * @param i :number
 * @param j :number
 * @return res :number
 */
function triangle_1(i:number,j:number):number{

  let arr_1:Array<Array<number>> = []
  
  for(let a = 0;a< i ; a++){
    let arr_2:Array<number> = []
    arr_1.push(arr_2)
    for(let b = 0; b <= a; b++){
      if(b === 0 || a === b)
        arr_2.push(1)
      else{
        arr_2.push(arr_1[a-1][b-1] + arr_1[a-1][b])
          
      }
    }
  }
  return (j-1 < arr_1[i-1].length && j-1 >= 0)?arr_1[i-1][j-1]:0;
}


/**
 * 解法二：递归实现
 * 时间复杂度 O（logn）
 * @param i :number
 * @param j :number
 * @return res :number
 */
 function triangle_2(i:number,j:number):number{
  if(i < j || j <= 0 )
    return 0;
  if(i===j || j===1 )
    return 1;
  return triangle_2(i-1,j-1) + triangle_2(i-1,j)
}


export {
  getTriangle
  ,triangle_1
  ,triangle_2
}
