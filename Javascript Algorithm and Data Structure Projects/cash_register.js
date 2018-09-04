/*
* Design a cash register drawer function checkCashRegister() that
*   accepts purchase price as the first argument (price),
*   payment as the second argument (cash),
*   and cash-in-drawer (cid) as the third argument.
* cid is a 2D array listing available currency.
* The checkCashRegister() function should always return an object with a status key and a change key.
*   Return {status: "INSUFFICIENT_FUNDS", change: []} if
*       cash-in-drawer is less than the change due, or
*       if you cannot return the exact change.
*   Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if
*       it is equal to the change due.
*   Otherwise, return {status: "OPEN", change: [...]},
*       with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*
* */


function checkCashRegister(price, cash, cid) {

    price *= 100; cash *= 100; // Convert to pennies
    // Really we're just trying to get the coins for cash-price
    var vals = [1,5,10,25,100,500,1000,2000,10000]; // How much each denomation is worth (in pennies)
    var cidHave = cid.map(x=>Math.round(x[1]*100)); // Convert each denomination we have into pennies (e.g. $1.05 in nickels to 105)
    var cidAmts = cidHave.map((x,i)=>Math.floor(x/vals[i])); // e.g. 105 pennies worth in nickels to 21 nickels or 20000 pennies worth in quarters to 80 quarters
    var best = [[0,0,0,0,0,0,0,0,0]]; // Start with $0.00 = 0 of each coin
    var bestScoreList = [0]; // # of coins for $0.00 is 0
    for (var i = 1; i <= cash-price; i++) { // For $0.00 to amt
        best[i] = [...Array(cid.length)].map(x=>0); // Empty array of denominations
        var bestScore = i+1; // Start just above the max amount in coins (all pennies + 1)
        for (var c = 0; c < cid.length; c++) { // For each denomination
            if (vals[c] > i || best[i-vals[c]][c] >= cidAmts[c]) continue; // If denomination is too high or we don't have enough, continue
            var bestIndex = i-vals[c]; // Index in "best" of the lower coin we're accessing. (e.g. dime and $0.25 would give $0.15 or index 15)
            var score = 0;
            if (bestScoreList[bestIndex] != 0 || bestIndex == 0) { // Make sure we don't have bestScore[bestIndex] being 0 coins AND bestIndex not being $0.00
                score = bestScoreList[bestIndex]+1; // We're adding a coin... this denomation
            }
            if (score < bestScore) { // Better score than another denomation? Heck yeah, change it!
                bestScore = score;
                best[i] = best[bestIndex].slice(0);
                best[i][c] += 1;
            }
        }
        bestScoreList[i] = bestScore; // Set best score and continue to next iteration
    }
    // "finish" converts it to the correct format (name and into dollars) in highest to lowerest denomination, e.g. [["QUARTER", 1.25], ["DIME", 0.3]]
    var finish = best[cash-price].map((x,i)=>{ return [cid[i][0], x*vals[i]/100]; }).reverse();
    var final = finish.filter(x => x[1] != 0);
    if (!final.length) return {status:'Insufficient Funds', change:final}; // Make sure we have coins
    else if (finish.reduce((a,b)=>a+b[1],0) == cidHave.reduce((a,b)=>a+b/100, 0)) return {status:'Closed', change:finish.reverse()}; // Can't be left with no coins (for some reason, I didn't design the problem)
    else {
        return {status:'OPEN', change:final}}; // Yes!!
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))