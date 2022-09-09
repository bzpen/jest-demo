## 1、杨辉三角算法题- jest + ts

```javascript
  杨辉三角形是排列成三角形的一系列数字。
  在杨辉三角形中，每一行的最左边和最右边的数字总是 1。
  对于其余的每个数字都是前一行中直接位于它上面的两个数字之和。
     1
    1  1
   1  2  1
  1  3  3  1
  ······
 
  要求 
    triangle(i,j) 返回杨辉三角第i行 第j列的数 
     0 < i < 15 ; 0 < j < 15
   例：
     triangle(4,2) = 3
```
## Run
[ 代码写在 index.ts 中]
- npm install
- npm run test-index

以上操作可通过 jest 自动验证答案正确性

## 2、爬楼梯算法题- jest + ts
```javascript
  假设你正在爬楼梯，需要n阶你才能到达顶部。但每次你只能爬一阶或者两阶，爬到顶部的方法有多少种？
 
  要求 
    getStairs(n) 返回n阶楼梯共几种方法  n=0  getStairs(n) = 0  
     0 <= n <= 100
   例：
     getStairs(3)
     返回 3
```
## Run
[ 代码写在 stairs.ts 中]
- npm install
- npm run test
## 3、
