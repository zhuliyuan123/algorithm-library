
/**
 * 题目描述：给定不同面额的硬币 coins 和一个总金额 amount。编写一个函数来计算可以凑成总金额所需的最少的硬币个数。如果没有任何一种硬币组合能组成总金额，返回 -1。

    示例1：
    输入: coins = [1, 2, 5], amount = 11
    输出: 3
    解释: 11 = 5 + 5 + 1

    示例2：
    输入: coins = [2], amount = 3
    输出: -1
*/

const amountMap: Map<number, number> = new Map();

export const findCoins = (coins: number[], amount: number) => {
    amountMap.set(0, 0);
    coins.forEach((coin: number) => {
        amountMap.set(coin, 1);
    })
    for (let i = 1; i <= amount; i++) {
        amountMap.set(i, Infinity);
        for (let j = 0; j < coins.length; j++) {
            if (i - coins[j] >= 0) {
                amountMap.set(i, Math.min((amountMap.get(i) as number), (amountMap.get(i - coins[j]) as number) + 1))
            }
        }
    }

    if (amountMap.get(amount) === Infinity) {
        return -1;
    }

    return amountMap.get(amount);
}

console.log(findCoins([1, 2, 5], 11));

console.log(findCoins([2], 3));


