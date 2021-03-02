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
    author: 'Stephen Hawking',
    quote: 'Quiet people have the loudest minds.'
  },
  {
    author: 'Martin Luther King Jr.',
    quote: 'Let no man pull you low enough to hate him.',
    year: '1956'
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
    quote: 'My religion is kindness.',
    tag: 'spirituality'
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
    quote: 'We\'re all just walking eachother home.',
    citation: 'Be Here Now',
    year: '1971',
    tag: 'spirituality'
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
    quote: 'Emancipate yourselves from mental slavery. None but ourselves can free our minds.',
    citation: 'Redemption Song',
    year: '1980',
    tag: 'spirituality'
  },
  {
    author: 'Dr. Seuss',
    quote: 'Today I shall behave as if this is the day I will be remembered.'
  },
  {
    author: 'Aristotle',
    quote: 'It is during our darkest moments that we must focus to see the light.'
  },
  {
    author: 'Dr. Seuss',
    quote: 'From there to here and here to there, funny things are everywhere.',
    tag: 'humor'
  },
  {
    author: 'David Goggins',
    quote: 'I don\'t stop when I\'m tired, I stop when I\'m done.',
    tag: 'inspiration'
  },
  {
    author: 'David Goggins',
    quote: 'Denial is the ultimate comfort zone.',
    tag: 'inspiration'
  },
  {
    author: 'Michael Jordan',
    quote: 'You have to expect things of yourself before you can do them.',
    tag: 'inspiration'
  },
  {
    author: 'Michael Jordan',
    quote: 'You miss 100% of the shots you don\'t take.',
    tag: 'inspiration'
  },
  {
    author: 'Rumi',
    quote: 'Don\'t be satisfied with stories, how things have gone with others. Unfold your own myth.',
    tag: 'inspiration'
  },
  {
    author: 'Rumi', 
    quote: 'Stop acting so small. You are the universe in ecstatic motion.',
    tag: 'inspiration'
  },
  {
    author: 'Eminem',
    quote: 'A normal life is boring.',
    citation: 'Lose Yourself',
    year: '2002'
  },
  {
    author: 'Shigeru Miyamoto',
    quote: 'A delayed game is eventually good, but a rushed game is always bad.',
    year: '1996'
  },
  {
    author: 'JRR Tolkien',
    quote: 'Not all those who wander are lost.',
    citation: 'The Fellowship of the Ring',
    year: '1954'
  },
  {
    author: 'JRR Tolkien',
    quote: 'Even the smallest person can change the course of the future.',
    citation: 'The Fellowship of the Ring',
    year: '1954'
  },
  {
    author: 'The Rock',
    quote: 'Be humble. Be hungry. And always be the hardest worker in the room.'
  },
  {
    author: 'Paul Coelho',
    quote: 'And, when you want something, all the universe conspires in helping you to achieve it.',
    citation: 'The Alchemist',
    year: '1988'
  },
  {
    author: 'Dan Millman',
    quote: 'There are no oridinary moments.',
    citation: 'Way of the Peaceful Warrior',
    year: '1980',
    tag: 'spirituality'
  },
  {
    author: 'Lao Tzu',
    quote: 'Those who know do not speak. Those who speak do not know.',
    citation: 'Tao Te Ching',
    year: '4th century BC',
    tag: 'spirituality'
  }
];

/***
 * `getRandomQuote` function
***/

function getRandomQuote (arrLength) {
  return quotes[Math.floor(Math.random() * arrLength)];
}




/***
 * `printQuote` function
***/

function printQuote() {

  let main = document.querySelector('main');

  // Random hexadecimal color generator, copied from https://css-tricks.com/snippets/javascript/random-hex-color/
  const setBg = () => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomColor;
  }
  setBg();

  let quote = getRandomQuote(quotes.length);

  let html = '';

  html = `
    <div class="container">
      <div id="quote-box" class="quote-box">
        <p class="quote">${quote.quote}</p>
        <p class="source">${quote.author}`;

  if (quote.citation){
    html += `<span class="citation">${quote.citation}</span>`;
  }

  if (quote.year){
    html += `<span class="year">${quote.year}</span>`;
  }

  if (quote.tag){
    html += `<span class="tag">${quote.tag}</span>`
  }

  html += `             
        </p>
      </div>
    </div>
  `;

  main.innerHTML = html;

}

// set interval to change quote every 10 seconds
setInterval(printQuote, 10000);

// initiate first quote
printQuote();



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);