// Defining a Self Data Type(data and pointer)
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

let arr = [12, 8, 15, 20, 6];

// To convert an Array to a Linked List
function convertArr2LL(arr) {
  let head = new Node(arr[0]);

  let mover = head;

  for (let i = 1; i < arr.length; i++) {
    let temp = new Node(arr[i]);

    mover.next = temp;
    mover = temp;
  }

  return head;
}

let head = convertArr2LL(arr);

// To travel thru a Linked List --> T.C -> O(N)
function traverseLL(head) {
  let temp = head;

  while (temp) {
    console.log(temp.data);
    temp = temp.next;
  }
}

// To Count nodes in a Linked List --> T.C -> O(N)
function countNodes(head) {
  let temp = head;
  let cnt = 0;

  while (temp) {
    temp = temp.next;
    cnt++;
  }

  console.log(cnt);
}

// To find Length of a Linked List --> T.C -> O(N)
function findLength(head) {
  let temp = head;
  let cnt = 0;

  while (temp) {
    temp = temp.next;
    cnt++;
  }

  console.log(cnt);
}

// To Search Item in a Linked List --> T.C -> O(N)
function searchItem(head, value) {
  let temp = head;

  while (temp) {
    if (temp.data === value) return 1;
    temp = temp.next;
  }

  return 0;
}

// traverseLL(head);
// findLength(head);

console.log(searchItem(head, 20));
console.log(searchItem(head, 200));
