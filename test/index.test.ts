import { test,describe,expect,beforeAll } from "@jest/globals"

import { triangle_1,getTriangle,triangle_2 } from "../src/triangle-el"

var res:Array<Array<number>>

var test_1 = [
  [1,1],[1,2],[2,2],[2,5],[10,8],[10,15],[15,10],[15,15]
]

describe("YangHui triangle moudle test result",()=>{
  beforeAll(()=>{
    res = getTriangle(15)
  })
  
  test_1.forEach(([i,j]) => {
    test(`迭代法： result [${i},${j}] :`,()=>{
      if(i > 15 || j > 15 || i<1 || j < 1 || i < j){
        expect(triangle_1(i,j)).toBe(0)
      }else{
        expect(triangle_1(i,j)).toBe(res[i-1][j-1])
      }
    })
  })

  test_1.forEach(([i,j]) => {
    test(`递归： result [${i},${j}] :`,()=>{
      if(i > 15 || j > 15 || i<1 || j < 1 || i < j){
        expect(triangle_2(i,j)).toBe(0)
      }else{
        expect(triangle_2(i,j)).toBe(res[i-1][j-1])
      }
    })
  })
})
