function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const middleNode = function (head) {
  const link = new ListNode(head, head[+1]);

  console.log(link.next);

  return null;
};

console.log(middleNode([1, 2, 3, 4, 5, 6, 7]));
