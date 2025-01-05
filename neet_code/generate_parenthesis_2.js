/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []

    function backtracking(open, closed, current) {
        if (current.length === 2 * n) {
            result.push(current)
            return
        }
    
    
        if (open < n )
        backtracking(open + 1, closed, current + "(")

        if (closed < open)
        backtracking(open, closed + 1, current + ")")
        
    }

    backtracking(0, 0, [], "")

    return result
};


console.log(generateParenthesis(3))

//Output: ["((()))","(()())","(())()","()(())","()()()"]
