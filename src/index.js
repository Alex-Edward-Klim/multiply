module.exports = function multiply(first, second) {
  let firstArr = first.split('');
    for (let i = 0; i < firstArr.length; i++) {
        firstArr[i] = Number(firstArr[i]);
    }

    let secondArr = second.split('');
    for (let j = 0; j < secondArr.length; j++) {
        secondArr[j] = Number(secondArr[j]);
    }

    let topArr = [];
    let bottomArr = [];
    if (firstArr.length > secondArr.length) {
        topArr = firstArr;
        bottomArr = secondArr;
    } else {
        topArr = secondArr;
        bottomArr = firstArr;
    }

    topArr.reverse();
    bottomArr.reverse();

    let finalArr = [];
    let keepInMinder = 0;
    let num = 0;

    for (let m = 0; m < bottomArr.length; m++) {
        for (let n = 0; n < topArr.length; n++) {

            num = bottomArr[m] * topArr[n] + keepInMinder;
            

            if (num > 9) {
                keepInMinder = Number(String(num)[0]);
                num = Number(String(num)[1]);
            } else {
                keepInMinder = 0;
            }
            

            finalArr[m + n] = finalArr[m + n] + num || num;
            
            if (finalArr[m + n] > 9) {
                finalArr[m + n + 1] = finalArr[m + n + 1] + Number(String(finalArr[m + n])[0]) || Number(String(finalArr[m + n])[0]);
                finalArr[m + n] = Number(String(finalArr[m + n])[1]);
            }
           
            if (n == topArr.length - 1) {
                finalArr[m + n + 1] = finalArr[m + n + 1] + keepInMinder || keepInMinder;
                keepInMinder = 0;
            }

        }
    }

    let extraZero = finalArr.length - 1;
    while (finalArr[extraZero] == 0) {
        finalArr.pop();
        extraZero -= 1;
    }

    finalArr.reverse();

    return finalArr.join('');
}
