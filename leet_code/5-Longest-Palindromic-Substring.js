/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    return naiveTwo(s)
};

function naive(s) {
    let max = ""
    for (let i = 0; i < s.length; i++) {
        let j = i
        while (j < s.length) {
            const current = s.slice(i,j + 1)
            if (isPalindrome(current)) {
                if (current.length > max.length) {
                    max = current
                }
            }
            j++
        }
    }

    return max
}


function centerFromBorder(s) {
    let max = ""
    for (let i = 0; i < s.length; i++) {
        let j = i
        while (j < s.length) {
            const current = s.slice(i,j + 1)
            if (isPalindrome(current)) {
                if (current.length > max.length) {
                    max = current
                }
            }
            j++
        }
    }

    return max
}

function naiveTwo(s) {
    let memoization = {}
    let max = ""
    let count = 0
    for (let i = 0; i < s.length; i++) {
        let j = i
        while (j < s.length) {
            const current = s.slice(i,j + 1)
            if (memoization[current]) {
                j++
                continue
            }

            count++
            memoization[current] = isPalindrome(current)
            if (memoization[current]) {
                if (current.length > max.length) {
                    max = current
                }
            }
            j++
        }
    }

    console.log("count: ", count++)
    return max
}

function isPalindrome(s) {
    let j = s.length -1

    for (let i=0; i < s.length / 2; i++) {
        if (s[i] !== s[j]) {
            return false
        }
        j--
    }
    return true
}

function exploreAll(s,start,end, p1 = start, p2 = end, maxCount = 0) {
    let localPalindrome = ""

    while( (start > 0 || s.length < s.length)) {

        if (isPalindrome(s.slice(p1 + 1, p2)) ) {
            localPalindrome = s.slice(p1 + 1, p2)
            p1++
        } 
    
        if (isPalindrome(s.slice(p1, p2 + 1)) ) {
            localPalindrome = s.slice(p1, p2 + 1)
            p2++
        } 
    

        start--
        end++
    }

    return localPalindrome
}



console.log(exploreAll("babd",1,2))
console.log(exploreAll("babd",0,1))

//babad