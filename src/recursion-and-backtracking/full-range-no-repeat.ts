/**
 * 
 * 题目描述：给定一组不含重复元素的整数数组 nums，返回该数组所有可能的子集（幂集）。
    说明：解集不能包含重复的子集。

    示例: 输入: nums = [1,2,3]
    输出:
    [
    [3],
    [1],
    [2],
    [1,2,3],
    [1,3],
    [2,3],
    [1,2],
    []
    ]
 */

const subsets = (numArray: number[]) => {
    const currArray: number[] = [];
    const result: number[][] = [];
    const dnf = (n: number) => {
        result.push(currArray.slice());
        for (let i = n; i < numArray.length; i++) {
            const value = numArray[i];
            currArray.push(value);
            dnf(i + 1);
            currArray.pop();
        }
    }
    dnf(0);
    return result;
}

console.log(subsets([1,2,3]));