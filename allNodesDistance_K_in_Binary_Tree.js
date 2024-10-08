// Given the root of a binary tree, the value of a target node target, and an integer k, return an array of the values of all nodes that have a distance k from the target node.

// You can return the answer in any order.

// Input: root = [3,5,1,6,2,0,8,null,null,7,4], target = 5, k = 2
// Output: [7,4,1]
// Explanation: The nodes that are a distance 2 from the target node (with value 5) have values 7, 4, and 1.


/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
const distanceK = (root, target, k) => {
	const parent = new Map(); // children: parent
	
	// map children to parent
	// this is so we can traverse "up" from our given target node
	const traverse = root => {
		if (!root) return;

		if (root.left) {
			parent.set(root.left, root);
			traverse(root.left);
		}

		if (root.right) {
			parent.set(root.right, root);
			traverse(root.right);
		}
	};

	const output = [];
	const visited = new Set();
	const findNodes = (root, distance) => {
		if (!root) return;
		if (visited.has(root)) return;
		if (distance === k) output.push(root.val); // k-distance node found

		visited.add(root); // mark visited
		
		// traverse left/right and "up" parent
		findNodes(root.left, distance + 1); // left
		findNodes(root.right, distance + 1); // right
		findNodes(parent.get(root), distance + 1); // parent
	};

	traverse(root);
	findNodes(target, 0);
	return output;
};
