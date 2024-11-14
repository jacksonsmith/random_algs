function lengthOfLongestSubstring(s) {
    var best = 0;
    for (var i = 0; i < s.length; i++) {
        var count = 0;

        var end = i;
        var currentLetters = new Set()

        while (end < s.length && !currentLetters.has(s[end])) {
            currentLetters.add(s[end])
            count++;
            end++;
        }
        best = Math.max(count, best);
    }

    return best;
}
console.log(lengthOfLongestSubstring('zexabbcde'));
