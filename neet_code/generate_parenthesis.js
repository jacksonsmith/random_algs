class Solution {
    /**
     * @param {number} n
     * @return {string[]}
     */
    generateParenthesis(n) {
        const result = []
        this.backtrack(n, 0, "", result)
        console.log(result)
        return result
    }

    backtrack(n, start,  current, result) {
        if (start === n) {
            return result.push(`${current}`)
        }
        if (start > n) return

        this.backtrack(n, start + 1, current + "()", result)
        if (start > 0 ) {
            this.backtrack(n, start + 1, `(${current})`, result)
        }
    }
}

const solution = new Solution()

solution.generateParenthesis(3)

//["((()))","(()())","(())()","()(())","()()()"]
//[ '()()()', '(()())', '(())()', '((()))' ]