//*https://baffinlee.com/leetcode-javascript/problem/reorder-list.html


/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */


 var reorderList = function(head) {
    if(!head) return head;
    
    //*Here we're iterating through the list.
    //*Since [fast] is looping 2x faster than [slow], when [fast] reaches to the end of the list,
    //*[slow] will be in the middle of the list.
    let slow = head;
    let fast = head;
    while(head && head.next){
        slow = slow.next;
        fast = fast.next.next
    }

    //*Reversing the second half of the list
    let previous = slow.next;
    let tail = previous.next;
    while(tail){
        let next = tail.next;
        tail.next = previous;
        previous = tail;
        tail = next;
    } //*Here [previous] is the head

    //*Merging 2 list
    //*First one starts at [head]
    //*Second onw starts at [prev]
    let first = head;
    let second = previous;
    while(first && right){
        temp = first.next;
        first.next = second;
        first = temp;

        temp = second.next;
        second.next = first;
        second = temp;
    }

    return head;
};
