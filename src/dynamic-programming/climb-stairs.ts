
/**
 * 
 * 题目描述：假设你正在爬楼梯。需要 n 阶你才能到达楼顶。
    每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

    注意：给定 n 是一个正整数。

    示例 1：

    输入： 2
    输出： 2
    解释： 有两种方法可以爬到楼顶。

    1 阶 + 1 阶
    2 阶
    示例 2：
    输入： 3
    输出： 3
    解释： 有三种方法可以爬到楼顶。

    1 阶 + 1 阶 + 1 阶
    1 阶 + 2 阶
    2 阶 + 1 阶
*/

// step1: 使用递归

const climbStairs = (n: number): number => {
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    return climbStairs(n - 1) + climbStairs(n - 2);
}

console.log(climbStairs(20));

// step2: 优化使用计算过的存入数组

const map: Map<number, number> = new Map();

const climbStairs2 = (n: number): number => {
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    if (!map.has(n)) {
        map.set(n, climbStairs(n-1) + climbStairs(n-2))
    }

    return map.get(n) as number;
}

console.log(climbStairs2(20));

// step3: 使用动态规划

const map2: Map<number, number> = new Map();

const climbStairs3 = (n: number): number => {
    if (n === 1) {
        return 1;
    }

    if (n === 2) {
        return 2;
    }

    map2.set(1, 1);
    map2.set(2, 2);

    for (let i = 3; i <= n; i++) {
        map2.set(i, (map2.get(i - 1) as number) + (map2.get(i - 2) as number))
    }

    return map2.get(n) as number;
}

console.log(climbStairs3(20))





