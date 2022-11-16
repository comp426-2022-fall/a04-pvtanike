export function roll(sides, dice, rolls){
    var results = [];
    for (var i=0;i<rolls;i++){
        var resulttemp = 0;
        for (var j =0; j<dice;j++){
            resulttemp+= Math.floor(Math.random()*sides)+1;
        }
        results.push(resulttemp);
    }
    const returnObject = {
        sides : sides,
        dice: dice,
        rolls: rolls,
        results: results
    }
    return JSON.stringify(returnObject)
}

// export{
//     roll
// }