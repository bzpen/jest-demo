import { test,describe,expect,beforeAll } from "@jest/globals"

import { getStairsList } from "../src/stairs-el"

import { getStairs } from "../src/stairs"


var res:Array<number> = []

describe("Stairs Test",()=>{

  beforeAll(()=>{
    res = getStairsList()
  })

  for(let i =0;i<=100;i++){
    test(`result: [${i}]`,()=>{
      expect(getStairs[i]).toBe(res[i])
    })
  }
})
