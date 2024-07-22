/**
 * 题目描述：给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 示例：   
    输入: [1,2,3]
    输出: [
    [1,2,3],
    [1,3,2],
    [2,1,3],
    [2,3,1],
    [3,1,2],
    [3,2,1]
    ]
 * 
 */

function fullRange(range: number[]) {
   const len = range.length;
   const result: number[][] = [];
   const currArray: number[] = [];
   const visitedMap: Map<number, boolean> = new Map();
   const dnf = (n: number) => {
      if (n === len) {
         result.push(currArray.slice());
         return;
      }
      for (let i = 0; i < len; i++) {
         const value = range[i];
         if (!visitedMap.has(value) || visitedMap.get(value) === false) {
            visitedMap.set(value, true);
            currArray.push(value);
            dnf(n + 1);
            currArray.pop();
            visitedMap.set(value, false);
         }
      }
   }
   dnf(0);
   return result;
}

console.log(fullRange([1, 2, 3]));

    