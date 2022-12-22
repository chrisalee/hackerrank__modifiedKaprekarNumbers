/*
 * Complete the 'kaprekarNumbers' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER p
 *  2. INTEGER q
 */

function kaprekarNumbers(p, q) {
    let kapNums = '';
    
    for(let i = p; i <= q; i++) {
        let sqr = Math.pow(i, 2).toString().split('');
        let len = sqr.length;
        let splitter = Math.floor(len / 2);

        let rightSide = parseInt(sqr.slice(splitter).join(''));
        let leftSide = parseInt(sqr.slice(0, (splitter)).join(''));
        if(!leftSide) {
            leftSide = 0;
        }
        
        if(i === leftSide + rightSide) {
            kapNums +=i;
            kapNums +=' ';
        }     
    }
    console.log(kapNums.length === 0 ? "INVALID RANGE" : kapNums);
    return kapNums.length === 0 ? "INVALID RANGE" : kapNums;
}
