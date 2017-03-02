#!/usr/bin/env node

// chmod +x flags.js

'use strict';

const chalk = require('chalk')

const makeFlag = () => {

  for(let i = 0; i < 7; i++){
    blueSquare(i)

    if( i % 2 === 0){
      shortRedStripe()
    } else {
      shortWhiteStripe()
    }
  }

  for(let i = 0; i < 3; i++) {
    longWhiteStripe()
    longRedStripe()
  }
}

const blueSquare = (iter) => {
  // console.log(chalk.bgBlue(' ').repeat(20))
  // process.stdout.write(chalk.bgBlue(' ').repeat(20))

  if (iter % 2 === 0) {
    // console.log("7 stars")
    // process.stdout.write(chalk.white.bgBlue(' * * * * * * *').repeat(20))
    process.stdout.write(chalk.white.bgBlue(' * * * * * * * '))
    // process.stdout.write(chalk.bgBlue(' ').repeat(3))
  } else {
    // console.log("6 stars")
    process.stdout.write(chalk.white.bgBlue('  * * * * * *  '))
    // process.stdout.write(chalk.bgBlue(' ').repeat(2))
  }
}

const longWhiteStripe = () => {
  // process.stdout.write(chalk.bgWhite(' ').repeat(60) + '\n').repeat(3)
  console.log(chalk.bgWhite(' ').repeat(60))
}

const longRedStripe = () => {
  // process.stdout.write(chalk.bgRed(' ').repeat(60) + '\n').repeat(3)
  console.log(chalk.bgRed(' ').repeat(60))
}

const shortWhiteStripe = () => {
  // process.stdout.write(chalk.bgWhite(' ').repeat(60) + '\n').repeat(3)
  console.log(chalk.bgWhite(' ').repeat(45))
}

const shortRedStripe = () => {
  // process.stdout.write(chalk.bgWhite(' ').repeat(60) + '\n').repeat(3)
  console.log(chalk.bgRed(' ').repeat(45))
}

makeFlag()
