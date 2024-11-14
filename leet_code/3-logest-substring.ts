function lengthOfLongestSubstring(s: string): number {
    let count = 0
    let best = 0

    for (let i=0; i < s.length - 1; i++) {

        let cur: number = i 
        let end: number = i+ 1
        
        
        while (end <= s.length && s[cur] != s[cur +1]) {
            count++
            end++
        }
        
        best = Math.max(count,best)
        
    }

    return best
}

console.log(lengthOfLongestSubstring('abc'))