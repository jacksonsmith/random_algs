/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let cpuIntervals = 0
    let avaibleTime = {}
    let queue = []
    const result = []

    for (const task of tasks) {
        avaibleTime[task] = (avaibleTime[task] || 0)
        queue.push(task)
    }

    while(queue.length) { // ["A","A","A","B","B","B"] n = 2
    //A-B-Idle-A-B
    //0-1-2xxx-3-4
        let isIdle = true

        const l = queue.length

        for (let i = 0; i < l; i++) {
            if (avaibleTime[queue[i]] <= cpuIntervals) {
                isIdle = false
                avaibleTime[queue[i]] += (n + 1)
                result.push(queue.shift())
                break
            } else {
                queue.push(queue.shift())
            }
        }

        if (isIdle) {
            result.push("idle")
        }

        cpuIntervals++
    }

    console.log(result)


    return result.length
};

const tasks = ["A","A","A","B","B","B"], n = 2

console.log(leastInterval(tasks, n))