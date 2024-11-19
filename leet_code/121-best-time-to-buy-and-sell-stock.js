/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minProfit = 0
    let minValueToBuy = prices[0]

    for (let i =1; i < prices.length; i++) { 
        let profitSellingToday = prices[i] - minValueToBuy
        minProfit = Math.max(minProfit, profitSellingToday)
        minValueToBuy = Math.min(minValueToBuy, prices[i])
    }

    return minProfit
};

console.log(maxProfit([7,1,5,3,6,4]))

console.log(maxProfit([7,1,5,3,6,4]) === 5)