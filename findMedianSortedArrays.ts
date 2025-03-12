function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
    let result = 0;
    let pointerOne = 0;
    let pointerTwo = 0;
    let mergedArray: number[] = [];
    while (pointerOne < nums1.length || pointerTwo < nums2.length) {
        const num1 = nums1[pointerOne];
        const num2 = nums2[pointerTwo];
        if (num1 === undefined) {
            mergedArray.push(num2);
            pointerTwo++;
            continue;
        } else if (num2 === undefined) {
            mergedArray.push(num1);
            pointerOne++;
            continue;
        }
        if (num1 <= num2) {
            mergedArray.push(num1);
            pointerOne++;
        } else {
            mergedArray.push(num2);
            pointerTwo++;
        }
    }
    if (mergedArray.length % 2 !== 0) {
        result = mergedArray[Math.floor(mergedArray.length / 2)];
    } else {
        result = (mergedArray[mergedArray.length / 2] + mergedArray[(mergedArray.length / 2) - 1]) / 2;
    }
    return result;
};

const inputs = [[[1, 3], [2]], [[1, 2], [3, 4]]];
inputs.forEach(input => {
    if (input.length >= 2) {
        console.log(findMedianSortedArrays(input[0], input[1]));
    } else {
        console.log('input的參數有誤');
    }
});