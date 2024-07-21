/**
 * BFS实战：二叉树的层序遍历
 *      A
 *   B     C
 * D   E       F
 */

interface IRootItem {
    val: string;
    left?: IRootItem;
    right?: IRootItem;
}

const root = {
    val: "A",
    left: {
      val: "B",
      left: {
        val: "D"
      },
      right: {
        val: "E"
      }
    },
    right: {
      val: "C",
      right: {
        val: "F"
      }
    }
};



function BFS(root: IRootItem) {
    const queue: IRootItem[] = [];
    queue.push(root)
    while (queue.length) {
        const top = queue[0];

        console.log(top.val);

        if (top.left) {
            queue.push(top.left);
        }

        if (top.right) {
            queue.push(top.right);
        }

        queue.shift();
    }
}

BFS(root);