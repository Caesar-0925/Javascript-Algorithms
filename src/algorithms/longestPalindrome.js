function longestPalindrome(s) {
  const len = s.length
  let dp = Array.from({ length: len }, () => Array(len).fill(false))
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
        // 注意：与大多数编程语言不同，在Javascript中， 使用
        // String的substring方法截取出的字符串包括最后一位
        ans = s.substr(i, l + 1)
      }
    }
  }
  return ans
}

console.log(longestPalindrome('dcbbcdff')) 