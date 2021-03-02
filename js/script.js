/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
  {
    author: 'Bob Marley',
    quote: 'Some people feel the rain, others just get wet.'
  },
  {
    author: 'Stephen Hawking',
    quote: 'Quiet people have the loudest minds.'
  },
  {
    author: 'Martin Luther King Jr.',
    quote: 'Let no man pull you low enough to hate him.'
  },
  {
    author: 'Maya Angelou',
    quote: 'If you\'re always trying to be normal you will never know how amazing you can be.'
  },
  {
    author: 'Maya Angelou',
    quote: 'You may kill me with your hatefulness, but still, like air, I\'ll rise.'
  },
  {
    author: 'The Dalai Lama',
    quote: 'Compassion is the radicalism of our time.'
  },
  {
    author: 'The Dalai Lama',
    quote: 'My religion is kindness.'
  },
  {
    author: 'George Washington',
    quote: 'The harder the conflict, the greater the triumph'
  },
  {
    author: 'Albert Einstein',
    quote: 'I have no special talents. I am only passionately curious.'
  },
  {
    author: 'Ram Dass',
    quote: 'We\'re all just walking eachother home.'
  },
  {
    author: 'Bill Nye',
    quote: 'Everyone you meet knows something you don\'t.'
  },
  {
    author: 'Martin Luther King Jr.',
    quote: 'Out of the mountain of despair, a stone of hope.'
  },
  {
    author: 'Bob Marley',
    quote: 'Emancipate yourselves from mental slavery. None but ourselves can free our minds.'
  },
  {
    author: 'Malcolm X',
    quote: 'A man who stands for nothing will fall for anything.'
  },
  {
    author: 'Dr. Seuss',
    quote: 'Today I shall behave as if this is the day I will be remembered.'
  },
  {
    author: 'Dr. Seuss',
    quote: 'From there to here and here to there, funny things are everywhere.'
  },
  {
    author: 'David Goggins',
    quote: 'I don\'t stop when I\'m tired, I stop when I\'m done.'
  },
  {
    author: 'David Goggins',
    quote: 'Denial is the ultimate comfort zone.'
  },
  {
    author: 'Michael Jordan',
    quote: 'You have to expect things of yourself before you can do them.'
  },
  {
    author: 'Michael Jordan',
    quote: 'You miss 100% of the shots you don\'t take.'
  },
  {
    author: 'Rumi',
    quote: 'Don\'t be satisfied with stories, how things have gone with others. Unfold your own myth.'
  },
  {
    author: 'Rumi', 
    quote: 'Stop acting so small. You are the universe in ecstatic motion.'
  },
  {
    author: 'Eminem',
    quote: 'A normal life is boring.'
  },
  {
    author: 'Eminem',
    quote: 'Some people dream of success while others wake up and work hard at it.'
  },
  {
    author: 'Shigeru Miyamoto',
    quote: 'A delayed game is eventually good, but a rushed game is always bad.'
  },
  {
    author: 'JRR Tolkien',
    quote: 'Not all those who wander are lost.'
  },
  {
    author: 'JRR Tolkien',
    quote: 'Even the smallest person can change the course of the future.'
  },
  {
    author: 'The Rock',
    quote: 'Be humble. Be hungry. And always be the hardest worker in the room.'
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote (arr, arrLength) {
  Math.floor(Math.random() * arrLength);
  console.log();
}

/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);