// https://leetcode.com/problems/3sum-closest/description/

// V1
function threeSumClosest(nums: number[], target: number): number {
    let result = Infinity;
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length - 2; i++) {
        let lowPointer = i + 1;
        let highPointer = nums.length - 1;
        while (lowPointer < highPointer) {
            const sum = nums[i] + nums[lowPointer] + nums[highPointer];
            const diff = Math.abs(sum - target);
            result = diff < Math.abs(result - target) ? sum : result;
            if (sum < target) {
                while (nums[lowPointer] === nums[lowPointer + 1]) {
                    lowPointer++;
                }
                lowPointer++;
            } else {
                while (nums[highPointer] === nums[highPointer - 1]) {
                    highPointer--;
                }
                highPointer--;
            }
        }
    }
    return result;
};

const inputs = [[[-1, 2, 1, -4], 1], [[0, 0, 0], 1], [[-4, 2, 2, 3, 3, 3], 0]];
inputs.forEach(input => {
    console.log(threeSumClosest(input[0] as number[], input[1] as number));
})