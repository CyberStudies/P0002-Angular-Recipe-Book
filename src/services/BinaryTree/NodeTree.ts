// NodeTree.ts
export class NodeTree {
  key: string;
  left: NodeTree | null;
  right: NodeTree | null;

  constructor(item: string) {
    this.key = item;
    this.left = null;
    this.right = null;
  }
}

// NodeTreeType.ts
export interface NodeTreeType {
  key: string;
  left: NodeTreeType | null;
  right: NodeTreeType | null;
}
