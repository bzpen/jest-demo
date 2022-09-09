import { test,describe,expect,beforeAll } from "@jest/globals"

import { getStairsList,getStairs_2 } from "../src/stairs-el"

import { getStairs } from "../src/stairs"


var res:Array<number> = []

describe("Stairs Test",()=>{

  beforeAll(()=>{
    res = getStairsList()
  })

  for(let i = 0;i<=43;i++){
    test(`result: [${i}]`,()=>{
      expect(getStairs_2(i)).toBe(res[i])
    })
  }
})
