class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s, k) {
        let max = 0
        let freq = {}
        let mostFrquent = 0
        let start = 0

        for (let end = start; end < s.length; end++) {
            if (freq[s[end]] === undefined) freq[s[end]] = 0
            freq[s[end]]++

            mostFrquent = Math.max(freq[s[end]], mostFrquent)

            while ((end - start + 1) - mostFrquent > k) {
                freq[s[start]]--
                // mostFrquent = Math.max(freq[s[end]], freq[s[start]])
                start++
            }

            max = Math.max(end - start + 1, max)
        }

        return max
    }
}

class NormalPeopleSolution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s, k) {
        let max = 0
        let freq = {}
        let mostFrquent = 0
        let start = 0

        for (let end = start; end < s.length; end++) {
            if (freq[s[end]] === undefined) freq[s[end]] = 0
            freq[s[end]]++

            mostFrquent = Math.max(freq[s[end]], mostFrquent)

            while ((end - start + 1) - mostFrquent > k) {
                freq[s[start]]--
                mostFrquent = Math.max(...Object.values(freq))
                start++
            }

            max = Math.max(end - start + 1, max)
        }

        return max
    }
}

class SolutionBruteForce {
    lengthOfLongestSubstring(s, k) {
        let max = 0
        // 0 1 2 3
        for (let start = 0; start < s.length; start++) { //X YYX
            let freq = {}
            let mostFrquent = 0
            if (freq[s[start]] === undefined) freq[s[start]] = 0
            for (let end = start; end < s.length; end++) {
                if (freq[s[end]] === undefined) freq[s[end]] = 0
                freq[s[end]]++

                mostFrquent = Math.max(freq[s[end]], mostFrquent)
                const windowSize = end - start + 1

                if (windowSize - mostFrquent > k) {
                    break
                }

                max = Math.max(windowSize, max)
            }
        }

        return max
    }
}


const solution = new NormalPeopleSolution()
console.log(solution.lengthOfLongestSubstring("AAABABB", 1))
// console.log(solution.lengthOfLongestSubstring("BAAAB", 2))
// console.log(solution.lengthOfLongestSubstring("AAABABBBB", 1))