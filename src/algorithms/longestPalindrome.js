function longestPalindrome(s) {
  const len = s.length
  /* 
    注意：与Dart类似，在Javascript中，Array对象的fill方法会使用同一实例填充
    const dp = Array(len).fill(Array(len).fill(false)) 
  */
  const dp = Array.from({ length: len }, () => Array(len).fill(false))
  let ans = ''
  for (let l = 0; l < len; l++) {
    for (let i = 0; i + l < len; i++) {
      const j = i + l
      if (l == 0) {
        dp[i][j] = true
      } else if (l == 1) {
        dp[i][j] = s[i] == s[j]
      } else {
        dp[i][j] = (s[i] == s[j]) && dp[i + 1][j - 1]
      }
      if (dp[i][j] && l + 1 > ans.length) {
        /*
          注意：与大多数编程语言不同，在Javascript中，使用String
          对象的substring方法截取出的字符串会包含最后一位
         */
        ans = s.substr(i, l + 1)
      }
    }
  }
  console.log(dp)
  return ans
}

console.log(longestPalindrome('dcbbcdff')) 