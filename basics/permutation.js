const permutation = (str, prefix = []) => {
    if (str.length === 0) {
        console.log("result: ", prefix)
        console.log("----------")
        return
    }

    console.log("str: ", str)
    console.log("prefix: ", prefix)
    console.log("----------")

    for (let i = 0; i < str.length; i++) {
        let newStr = str.slice(0, i) + str.slice(i + 1)
        permutation(newStr, prefix + str[i])
    }
}

permutation("123")

/*

"ABC"
"ACB"
"BAC"
"BCA"
"CAB"
"CBA"

*/