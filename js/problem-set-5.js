/*
 * Mario. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style half-pyramid of that height.
 *
 *     ##
 *    ###
 *   ####
 *  #####
 * ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function mario() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  do {
  height = prompt("Please enter an integer from 1 to 23:");
} while ((Number.isInteger(height)) || (1 <= height && height <= 23) == false);

  let marioResult = document.getElementById('mario-easy-output');
  let x = 1;
  let space1 = "&nbsp&nbsp";

  while (x < (height - 1)) {
    space1 = space1 + "&nbsp&nbsp";
    x = x + 1;
  }

  let hashtag = "##";
  marioResult.innerHTML = space1 + hashtag + "<br/>";

  let y = 1;
  let z = 1;
  let zSub = 1;
  let space = "&nbsp&nbsp";

  while (y < (height - 1)) {
    hashtag = hashtag + "#";
    while (z < (height - 2)) {
      space = space + "&nbsp&nbsp";
      z = z + 1;
    }
    marioResult.innerHTML += space + hashtag + "<br/>";
    space = "&nbsp&nbsp";
    z = zSub + 1;
    zSub = zSub + 1;
    y = y + 1;
  }
  while (y < height) {
    hashtag = hashtag + "#";
    marioResult.innerHTML += hashtag;
    y = y + 1;
  }

  //towerHeight times # to add correct number of #'s
  //towerHeight controls the number of rows
  //Add height++ somewhere
  //have to add <br/>
  //put all of this in a loop
  ////////////////////////// DO NOT MODIFY
  check('mario', height); // DO NOT MODIFY
  ////////////////////////// DO NOT MODIFY
}

/*
 * Mario, Again. 10 points.
 *
 * Write a function that prompts the user for a height, and prints a
 * Mario-style pyramid of that height.
 *
 *     ##  ##
 *    ###  ###
 *   ####  ####
 *  #####  #####
 * ######  ######
 *
 * Height values must be integers within the range [1, 23]. Users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function marioAgain() {

  ////////////// DO NOT MODIFY
  let height; // DO NOT MODIFY
  ////////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 2 CODE HERE

  //////////////////////////////// DO NOT MODIFY
  check('mario-again', height); // DO NOT MODIFY
  //////////////////////////////// DO NOT MODIFY
}

/*
 * Credit. 10 points.
 *
 * Write a function that prompts the user for a credit card number (valid
 * and invalid examples will be provided), and displays either:
 *   - an invalid image (provided)
 *   - an American Express image (provided)
 *   - a Mastercard image (provided)
 *   - a Visa image (provided)
 *
 * We'll use Luhn's algorithm to determine the validity of a credit card
 * number. Review the steps of the algorithm below.
 *
 *   0. Multiply every other digit by 2, starting with the number’s
 *      second-to-last digit, and then add those products' digits together.
 *   1. Add the sum to the sum of the digits that weren’t multiplied by 2.
 *   2. If the total’s last digit is 0 (or, put more formally, if the total
 *      modulo 10 is congruent to 0), the number is valid!
 *
 * American Express uses 15-digit numbers, starting with 34 or 37.
 * Mastercard uses uses 16-digit numbers, starting with 51, 52, 53, 54,
 * or 55. Visa uses 13- or 16-digit numbers, starting with 4.
 *
 * 378282246310005 should verify as American Express.
 * 371449635398431 should verify as American Express.
 * 5555555555554444 should verify as Mastercard.
 * 5105105105105100 should verify as Mastercard.
 * 4111111111111111 should verify as Visa.
 * 4012888888881881 should verify as Visa.
 *
 * Credit card numbers must be integers. Users should be continuously
 * re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function credit() {

  //////////// DO NOT MODIFY
  let card; // DO NOT MODIFY
  //////////// DO NOT MODIFY

  // WRITE YOUR EXERCISE 3 CODE HERE

  /*
   * NOTE: After reading in the card number and storing it in the 'card'
   *       variable, do not modify it. If you find it necessary to manipulate
   *       this value, you will need to create a second variable to serve
   *       as a copy of the 'card' variable.
   */

  ///////////////////////// DO NOT MODIFY
  check('credit', card); // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
}

/*
 * Guess. 5 points.
 *
 * Write a function that generates a random number, and asks the user to
 * try to guess this number. When all is said and done, your function
 * should output the random number and the number of attempts it took the
 * user to correctly guess that number. Your function should also provided
 * helpful hints, indicating whether the most recent guess was greater than
 * or less than the target.
 *
 * Random numbers must be between 1 and 1000. User guesses must be integers
 * within the range [1, 1000], and users should be continuously re-prompted
 * until they comply with this restriction. In the event a user guesses
 * something that violates this restriction, an attempt should not be
 * recorded.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function guess() {

  // WRITE YOUR EXERCISE 4 CODE HERE
  let answer = Math.floor((Math.random() * 1000) + 1);
  console.log(answer);

  let guess = prompt("Try to guess a randomly generated integer between 1 and 1000");

  let tries = 1;
  while (guess != answer) {
    if (guess > answer && guess > 0 && Number.isInteger(Number(guess))) {
      guess = prompt("That guess was too high, try again");
      tries++;
    } else if (guess < answer && guess > 0 && Number.isInteger(Number(guess))) {
      guess = prompt("That was too low, try again");
      tries++;
    } else {
        guess = prompt("Stupid! I said put in an integer between 1 and 1000");
    }
  }
  if (guess == answer) {
    let correct = document.getElementById("guess-output");
    correct.innerHTML = "Nice, you got it. It only took you " + tries + " tries!";
  }




  // push each guess into a list and return the length of that list as the number of tries
  //while guess !== something, repeat this sequnce, within sequence ask for guess
  //in the loop, i will be used ot track the number of times the loop is repeated (number of tries)
  // probably better to return i instead of putting the guesses into a list, might be more efficient
  // let correct = Math.floor(Math.random() * 1000) + 1);

  ////////////////// DO NOT MODIFY
  check('guess'); // DO NOT MODIFY
  ////////////////// DO NOT MODIFY
}

/*
 * Hurricane. 5 points.
 *
 * Write a function that prompts the user to enter a windspeed, and prints
 * the hurricane category (if applicable) for that windspeed. We'll be
 * using the Saffir-Simpson scale, shown below in MPH.
 *   - Category 5: 157+
 *   - Category 4: 130-156
 *   - Category 3: 111-129
 *   - Catgeory 2: 96-110
 *   - Category 1: 74-95
 *   - Tropical Storm: 39-73
 *
 * Windspeeds must be non-negative integers in the range [0, INF), and
 * users should be continuously re-prompted until they comply with this
 * restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function hurricane() {

  ///////////////// DO NOT MODIFY
  let windspeed; // DO NOT MODIFY
  ///////////////// DO NOT MODIFY

  windspeed = prompt("Want to see some magic? Enter a positive windspeed as an integer and I'll tell you what it's categorized as.");

  while (windspeed < 0 || !Number.isInteger(windspeed)) {
    windspeed = prompt("Hey stupid! I said enter a non-negtive integer.");
  }

  if (windspeed >= 157) {
    let cat5 = document.getElementById("hurricane-output");
    cat5.innerHTML = "Category 5";
  } else if (windspeed >= 130) {
    let cat4 = document.getElementById("hurricane-output");
    cat4.innerHTML = "Category 4";
  } else if (windspeed >= 111) {
    let cat3 = document.getElementById("hurricane-output");
    cat3.innerHTML = "Category 3";
  } else if (windspeed >= 96) {
    let cat2 = document.getElementById("hurricane-output");
    cat2.innerHTML = "Category 2";
  } else if (windspeed >= 74) {
    let cat1 = document.getElementById("hurricane-output");
    cat1.innerHTML = "Category 1";
  } else if (windspeed >= 39) {
    let tropStorm = document.getElementById("hurricane-output");
    tropStorm.innerHTML = "Tropical Storm";
  } else {
    let p = document.getElementById("hurricane-output");
    p.innerHTML = "Wind is not strong enough";
  }


  ///////////////////////////////// DO NOT MODIFY
  check('hurricane', windspeed); // DO NOT MODIFY
  ///////////////////////////////// DO NOT MODIFY
}

/*
 * Gymnastics. 5 points.
 *
 * Write a function that prompts the user to enter six scores. From those
 * six scores, the lowest and highest should be discarded. An average score
 * should be computed from the remaining four. Your function should output
 * the discarded scores, as well as the average score.
 *
 * Scores must be real numbers in the range [0.0, 10.0], and users should
 * be continuously re-prompted until they comply with this restriction.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function gymnastics() {

  /////////////////// DO NOT MODIFY
  let total = 0; //// DO NOT MODIFY
  let scores = []; // DO NOT MODIFY
  /////////////////// DO NOT MODIFY
  let firstScore = Number(prompt("Please enter a number between 1.0 and 10.0 as the first score"));
  let secondScore = Number(prompt("Please enter a number between 1.0 and 10.0 as the second score"));
  let thirdScore = Number(prompt("Please enter a number between 1.0 and 10.0 as the third score"));
  let fourthScore = Number(prompt("Please enter a number between 1.0 and 10.0 as the fourth score"));
  let fifthScore = Number(prompt("Please enter a number between 1.0 and 10.0 as the fifth score"));
  let sixthScore = Number(prompt("Please enter a number between 1.0 and 10.0 as the sixth score"));

  scores.push(firstScore);
  scores.push(secondScore);
  scores.push(thirdScore);
  scores.push(fourthScore);
  scores.push(fifthScore);
  scores.push(sixthScore);
//checks to see if first score is an integer
  while (Numb)
    firstScore = (Number.isInteger(firstScore))? firstScore = firstScore : prompt("Stupid! Enter a number between 1.0 and 10.0 as the first score");

  total = firstScore + secondScore + thirdScore + fourthScore + fifthScore + sixthScore;

  let minimum = Math.min(...scores);
  let maximum = Math.max(...scores);

  let discarded = document.getElementById("gymnastics-output");
  discarded.innerHTML = "Discarded: " + minimum + ", " + maximum;

  let minimumIndex = scores.indexOf(minimum);
  let maximumIndex = scores.indexOf(maximum);

  scores.splice(maximumIndex);
  scores.splice(minimumIndex);
  console.log(scores);

  /*
   * NOTE: The 'total' variable should be representative of the sum of all
   *       six of the judges' scores.
   */

  /*
   * NOTE: You need to add each score (valid or not) to the 'scores' variable.
   *       To do this, use the following syntax:
   *
   *       scores.push(firstScore);   // your variable names for your scores
   *       scores.push(secondScore);  // will likely be different than mine
   */

  /////////////////////////////// DO NOT MODIFY
  check('gymnastics', scores); // DO NOT MODIFY
  /////////////////////////////// DO NOT MODIFY
}

/*
 * Report Card. 5 points.
 *
 * Write a function that prompts the user to enter test, quiz, and homework
 * grades for the marking period. Users can enter as many grades of each
 * category, entering -1 to signal they are finished. Your function should
 * output the user's final grade, where tests, quizzes, and homework are
 * weighted at 60%, 30%, and 10%, respectively.
 *
 * Grades must be real numbers in the range [0.0, 100.0], and users should
 * be continuously re-prompted until they comply with this restriction. The
 * only exception is -1, which signals the user is finished entering grades
 * for that category.
 *
 * As always, certain portions of the starter code are critical to the
 * the feedback script. Please do not modify these sections. They are
 * clearly marked.
 *
 * All output should be displayed on the page, not printed to the console.
 */

function reportCard() {

  ///////////////////////// DO NOT MODIFY
  let testTotal = 0; ////// DO NOT MODIFY
  let quizTotal = 0; ////// DO NOT MODIFY
  let homeworkTotal = 0; // DO NOT MODIFY
  ///////////////////////// DO NOT MODIFY
  let testInput = " ";
  for (testTotal = 0; testInput == -1; testTotal += testInput) {
    testInput = prompt("Enter a test score. When you have finished, please enter -1");
  }

  let quizInput = " ";
  for (quizTotal = 0; quizInput == -1; quizTotal += quizInput) {
    quizInput = prompt("Enter a quiz score. When you have finished, please enter -1");
  }

  let homeworkInput = 0;
  for (homeworkTotal = 0; homework == -1; homeworkTotal += homeworkTotal) {
    homework = prompt("Enter a homework grade. When you have finished, please enter -1");
  }

  /*
   * NOTE: The 'testTotal', 'quizTotal', and 'homeworkTotal' variables
   *       should be representative of the sum of the test scores, quiz
   *       scores, and homework scores the user enters, respectively.
   */

  ///////////////////// DO NOT MODIFY
  let tests = 0; ////// DO NOT MODIFY
  let quizzes = 0; //// DO NOT MODIFY
  let homeworks = 0; // DO NOT MODIFY
  ///////////////////// DO NOT MODIFY

  /*
   * NOTE: The 'tests', 'quizzes', and 'homeworks' variables should be
   *       representative of the number of tests, quizzes, and homework
   *       grades the user enters, respectively.
   */




  /////////////////////// DO NOT MODIFY
  check('report-card', // DO NOT MODIFY
    testTotal, ////////// DO NOT MODIFY
    tests, ////////////// DO NOT MODIFY
    quizTotal, ////////// DO NOT MODIFY
    quizzes, //////////// DO NOT MODIFY
    homeworkTotal, ////// DO NOT MODIFY
    homeworks /////////// DO NOT MODIFY
  ); //////////////////// DO NOT MODIFY
  /////////////////////// DO NOT MODIFY
}
