function minPatches(nums, n) {
  let patches = 0
  let x = 1
  let index = 0
  const len = nums.length

  while (x <= n) {
    if (index < len && nums[index] <= x) {
      x += nums[index]
      index++
    } else {
      x *= 2
      patches++
    }
  }
  
  return patches
}

console.log(minPatches([1,3], 6))
console.log(minPatches([1,5,10], 20))
console.log(minPatches([1,2,2], 5))