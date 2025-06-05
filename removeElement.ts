// https://leetcode.com/problems/remove-element/

// 修改原陣列，將陣列中等於val的整數移到陣列尾端，回傳陣列中不等於val的整數數量

// 參考解答後
export function removeElement(nums: number[], val: number): number {
    let i = 0;

    for (let j = 0; j < nums.length; j++) {
        if (nums[j] != val) {
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                i++;
            }
    }
    return i;
}

// 一開始的想法
// export function removeElement(nums: number[], val: number): number {
//     if (nums.length === 0) { return 0 };

//     let leftPointer = 0;
//     let rightPointer = nums.length - 1;
//     while (leftPointer < rightPointer) {
//         while (nums[rightPointer] === val) {
//             rightPointer--;
//         }
//         if (nums[leftPointer] === val) {
//             // swap left and right
//             const temp = nums[leftPointer];
//             nums[leftPointer] = nums[rightPointer];
//             nums[rightPointer] = temp;
//             rightPointer--;
//         }

//         leftPointer++;
//     }
//     return leftPointer + 1;
// }