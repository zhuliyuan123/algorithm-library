/**
 * 
 * 2850. 将石头分散到网格图的最少移动次数
 * 给你一个大小为 3 * 3 ，下标从 0 开始的二维整数矩阵 grid ，分别表示每一个格子里石头的数目。网格图中总共恰好有 9 个石头，一个格子里可能会有 多个 石头。

    每一次操作中，你可以将一个石头从它当前所在格子移动到一个至少有一条公共边的相邻格子。

    请你返回每个格子恰好有一个石头的 最少移动次数 。

    

    示例 1：



    输入：grid = [[1,1,0],[1,1,1],[1,2,1]]
    输出：3
    解释：让每个格子都有一个石头的一个操作序列为：
    1 - 将一个石头从格子 (2,1) 移动到 (2,2) 。
    2 - 将一个石头从格子 (2,2) 移动到 (1,2) 。
    3 - 将一个石头从格子 (1,2) 移动到 (0,2) 。
    总共需要 3 次操作让每个格子都有一个石头。
    让每个格子都有一个石头的最少操作次数为 3 。
    示例 2：



    输入：grid = [[1,3,0],[1,0,0],[1,0,3]]
    输出：4
    解释：让每个格子都有一个石头的一个操作序列为：
    1 - 将一个石头从格子 (0,1) 移动到 (0,2) 。
    2 - 将一个石头从格子 (0,1) 移动到 (1,1) 。
    3 - 将一个石头从格子 (2,2) 移动到 (1,2) 。
    4 - 将一个石头从格子 (2,2) 移动到 (2,1) 。
    总共需要 4 次操作让每个格子都有一个石头。
    让每个格子都有一个石头的最少操作次数为 4 。
    

    提示：

    grid.length == grid[i].length == 3
    0 <= grid[i][j] <= 9
    grid 中元素之和为 9 。
 */

function getCount(x1: number, y1: number, x2: number, y2: number) {
    return Math.abs(x1 - x2) + Math.abs(y1 - y2);
}

export function minimumMoves(grid: number[][]): number {
    const lessArray: { x: number, y: number }[] = [];
    const moreArray: { x: number, y: number }[] = [];
    for (let y = 0; y < grid.length; y++) {
        for (let x = 0; x < grid[y].length; x++){
            if (grid[y][x] = 0) {
                lessArray.push({ x, y });
            };
            for (let k = 0; k < grid[y][x] - 1; k++) {
                moreArray.push({ x, y })
            }
        }
    }
    let result: number = 0;
    for (let i = 0; i < moreArray.length; i++) {

    }
    return result;
};