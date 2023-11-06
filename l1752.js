// 1752. Check if Array Is Sorted and Rotated

// Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.F

var check = function(nums) {
    let order=0
 
    for(let i=0;i<nums.length;i++){
        if(nums[i]>nums[i+1]) order++
    }
    
     nums[0]<nums[nums.length-1] && order++
     
     return order<2
};