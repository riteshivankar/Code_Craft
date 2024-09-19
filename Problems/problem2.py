def threeSum(nums):
    # Sort the array first
    nums.sort()
    result = []
    
    # Iterate through the array
    for i in range(len(nums) - 2):
        # Skip duplicates for the first element
        if i > 0 and nums[i] == nums[i - 1]:
            continue
        
        # Use two-pointer technique
        left, right = i + 1, len(nums) - 1
        while left < right:
            total = nums[i] + nums[left] + nums[right]
            
            if total == 0:
                result.append([nums[i], nums[left], nums[right]])
                
                # Skip duplicates for the second element
                while left < right and nums[left] == nums[left + 1]:
                    left += 1
                # Skip duplicates for the third element
                while left < right and nums[right] == nums[right - 1]:
                    right -= 1
                
                
                left += 1
                right -= 1
            elif total < 0:
                left += 1  
            else:
                right -= 1  
    
    return result


nums = [-1, 0, 1, 2, -1, -4]
print(threeSum(nums)) 
