
export const CoinCounter = (counter, coinArray = [0,0,0,0]) => {
  if (counter == 0){
    return coinArray; 
  }
  
  if (counter >= 1) {
    // let wholeNumber = Math.floor(counter)
    let quarter = .25;
    let dime = .10;
    let nickle = .05;
    let penny = .01;
    
   // 0.99
    if (counter >= quarter){
      coinArray[0] = Math.floor(counter / quarter); //0.99 - (0.99 % 0.25) = 3
      counter = counter % quarter;

    } else if (counter >= dime){
        countCoins += 0.24 / 0.10; 
        // counter = quarterRemainder % dime; 
        // coinArray[1] = 
    } else if (dimeRemainder >= nickle) {
          let nickleRemainder = dimeRemainder % nickle;
    } else {
          let nickleRemainder = dimeRemainder % penny;
    }
  }
    // then divide decimal into quarter which will be 3
    // then remainder of that (.24) by dimes which should be equat to 2
    // counter = wholeNumber / qaurter;
    console.log(counter);
    return CoinCounter(counter, coinArray);
}

CoinCounter(4.99);



// 4.99
// $1 x 4 => 4 x 4 = 16 quarters

// 0.99

// if 0.99 > 0.25 
//  0.99 - 0.25 - 0.25 -0.25 (3 quaters)

// if 0.24 > 0.10
//  0.24 - 0.10 - 0.10 (2 dimes)

//if .04 > .5
// 0.05 x 0
// if .04> .01
// 0.01 x 4



//CoinCounter



//Create a coin counter application that takes X amount of money (such as $4.99) and determines the exact amount of change needed in quarters, dimes, nickels and pennies. Do not worry about adding a user interface to the application. Instead, focus on writing good tests and functional code.

//Part 1
//Create a coin counter function that uses recursion to solve the problem.

//Part 2
//Create a coin counter function that uses a closure that can be used with functions for each type of change (quarters, nickels, dimes and pennies).

// let amount = "$4.99";