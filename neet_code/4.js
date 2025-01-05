class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        if (strs.length === 1) return [strs]
        let dict = {}
        let result = []
        let set = new Set()

        for (const s of strs) { // "act"
            if (!dict[s]) dict[s] = {} // {act: {a: 1}}
            for (const l of s) {
                if(!dict[s][l]) dict[s][l] = 0
                dict[s][l] += 1
            }
        }


        for (let i = 0; i < strs.length; i++) {
            const firstPointer = strs[i]
            if (set.has(firstPointer)) continue

            let agg = [strs[i]]

            for (let j = 0; j < strs.length; j++) {
                if(i === j) continue

                const secondPointer = strs[j]

                const secondLetterDict = dict[secondPointer]
                const firstLetterDict = dict[firstPointer]

                const firstLetters = Object.keys(firstLetterDict)
                const secondLetters = Object.keys(secondLetterDict)

                if (firstLetters.length !== secondLetters.length) continue

                let isEqual = true

                for (const letter of firstLetters) {
                    if (!secondLetterDict[letter] && !firstLetterDict[letter] !== secondLetterDict[letter]) {
                        isEqual = false
                    }
                }
                if (isEqual) agg.push(secondPointer)
            }

            result.push(agg)
            set.add(firstPointer)
        }

        return result
    }
}


const s = new Solution()
const strs = ["act","pots","tops","cat","stop","hat"]

console.log(s.groupAnagrams(strs))