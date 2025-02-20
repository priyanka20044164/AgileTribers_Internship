function intersection(nums1, nums2) {
    return [...new Set(nums1.filter(num => nums2.includes(num)))];
}

console.log(intersection([1, 2, 2, 1], [2, 2])); 
