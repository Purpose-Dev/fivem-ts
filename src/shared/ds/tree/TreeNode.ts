import { ITreeNode, NodeColor } from '.';

/**
 * Represents a node in a binary tree.
 *
 * @template T - The type of the value held by this node.
 */
export class TreeNode<T> implements ITreeNode<T> {
    value: T;
    left: TreeNode<T> | null = null;
    right: TreeNode<T> | null = null;
    parent: TreeNode<T> | null = null;
    color: NodeColor;

    constructor(value: T, color = NodeColor.RED) {
        this.value = value;
        this.color = color;
    }
}
