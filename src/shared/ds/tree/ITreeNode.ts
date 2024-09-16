import { NodeColor } from '.';

/**
 * Represents a node in a binary tree.
 *
 * @template T - The type of the value held by the node.
 *
 * @property {T} value - The value stored in the node.
 * @property {ITreeNode<T> | null} left - The left child node.
 * @property {ITreeNode<T> | null} right - The right child node.
 * @property {ITreeNode<T> | null} parent - The parent node.
 * @property {NodeColor} color - The color of the node, typically used in Red-Black Trees.
 */
export interface ITreeNode<T> {
    value: T;
    left: ITreeNode<T> | null;
    right: ITreeNode<T> | null;
    parent: ITreeNode<T> | null;
    color: NodeColor;
}
