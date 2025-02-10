// https://leetcode.com/problems/subarray-product-less-than-k/description/


function numSubarrayProductLessThanK(nums: number[], k: number): number {
    if (k <= 1) return 0;
    let count = 0;
    let left = 0;
    let right = 0;
    let product = nums[left];
    while (right < nums.length) {
        if (product < k) {
            count += right - left + 1;
            right++;
            product *= nums[right];
        } else {
            product /= nums[left];
            left++;
        }
    }
    return count;
};


/**
 * V1 一開始的想法
 * @param nums 
 * @param k 
 * @returns 
 */
// function numSubarrayProductLessThanK(nums: number[], k: number): number {
//     let count = 0;
//     nums.forEach((_val, lowPointer) => {
//         let product = nums[lowPointer];
//         if (product < k) count++;
//         let highPointer = lowPointer + 1;
//         while (highPointer < nums.length) {
//             product *= nums[highPointer];
//             if (product < k) {
//                 count++;
//                 highPointer++;
//             } else {
//                 break;
//             }
//         }
//     });
//     return count;
// };

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
console.log(numSubarrayProductLessThanK([1, 1, 1], 2));