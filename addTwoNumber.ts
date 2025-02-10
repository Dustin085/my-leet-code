// https://leetcode.com/problems/add-two-numbers/

class ListNode {
    public val: number
    public next: ListNode | null

    // 此寫法在需要複雜邏輯判斷時比較適合
    // constructor(val?: number, next?: ListNode | null) {
    //     this.val = (val === undefined ? 0 : val)
    //     this.next = (next === undefined ? null : next)
    // }

    // 此寫法較簡潔，大眾比較傾向此寫法
    constructor(val: number = 0, next: ListNode | null = null) {
        this.val = val;
        this.next = next;
    }

    // Below function is not done yet.
    returnArray(listNode: ListNode = this): number[] {
        const result: number[] = [];

        result.unshift(this.val);
        if (this.next != null) {
            return this.returnArray(this.next);
        };
        return result;
    }
};

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    if (l1 === null || l2 === null) return null;
    let result: ListNode = new ListNode();
    let nodeIndicator = result;
    let carry = 0;
    while (l1 != null || l2 != null || carry === 1) {
        let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
        if (sum >= 10) { carry = 1 } else { carry = 0 };
        nodeIndicator.val = sum % 10;
        console.log('sum: ' + sum);
        if (l1?.next != null || l2?.next != null || carry === 1) {
            nodeIndicator.next = new ListNode();
            nodeIndicator = nodeIndicator.next;
        };
        if (l1 != null) l1 = l1.next;
        if (l2 != null) l2 = l2.next;
    };

    return result;
};

let l1 = new ListNode(2, new ListNode(4, new ListNode(3, new ListNode(4))));
let l2 = new ListNode(5, new ListNode(6, new ListNode(4)));
console.log(addTwoNumbers(l1, l2));
