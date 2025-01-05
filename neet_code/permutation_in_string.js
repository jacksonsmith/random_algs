class BruteForceSolution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        const arr1 = s1.split("")
        const arr2 = s2.split("")

        let freqExpected = {}

        for (const s of s1) {
            if (freqExpected[s] === undefined) freqExpected[s] = 0
            freqExpected[s]++
        }

        for (let start = 0; start < arr2.length; start++) {
            let current = []
            let freq = {}
            for (let end = start; end < arr2.length; end++) {
                current.push(arr2[end])
                if (freq[arr2[end]] === undefined) freq[arr2[end]] = 0

                freq[arr2[end]]++

                if (current.length < arr1.length) continue
                if (current.length > arr1.length) break

                let isPermutation = true

                for (const key of Object.keys(freq)) {
                    if (freq[key] !== freqExpected[key]) {
                        isPermutation = false
                        break
                    }
                }

                if (isPermutation) return true
            }
        }

        return false
    }
}

class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    checkInclusion(s1, s2) {
        let freqExpected = {}
        const uniqueChars = Object.keys(freqExpected).length;


        for (const s of s1) {
            if (freqExpected[s] === undefined) freqExpected[s] = 0
            freqExpected[s]++
        }

        let start = 0
        let freq = {}
        let matchCount = 0

        for (let end = 0; end < s2.length; end++) {
            const current = s2[end]

            freq[current] = (freq[current] || 0) + 1;

            if (freq[current] === freqExpected[current]) {
                matchCount++
            }

            if (end - start + 1 > s1.length) {
                if (freq[s2[start]] === freqExpected[s2[start]]) matchCount--
                freq[start]--
                start++
            }


            //check permutation
            if(matchCount === uniqueChars) return true
        }

        return false
    }
}

const s = new Solution()

// const s1 = "ab"
const s1 = "ab"
const s2 = "lecabee"
// const s2 = "eidboaoo"

console.log(s.checkInclusion(s1,s2))
//expected false
