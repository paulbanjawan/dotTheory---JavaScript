
let score = 0;

const RANK_GOLD = 'Gold';
const RANK_SILVER = 'Silver';
const RANK_BRONZE = 'Bronze';
const RANK_NONE = 'No crown';
let rank = RANK_NONE;

const main = document.querySelector('main');

const answer1 = prompt('Taylor Swift\'s latest album');

if ( answer1.toLowerCase() === 'midnights' ) {
  score += 1;
}
const answer2 = prompt('Capital of South Korea');

if ( answer2.toLowerCase() === 'seoul' ) {
  score += 1;
}

// Sing a song
const answer3 = prompt('It was rare I was there I remember it all too ____');

if ( answer3.toLowerCase() === 'well' ) {
  score += 1;
}

const answer4 = prompt('Best programming language');

if ( answer4.toLowerCase() === 'php' ) {
  score += 1;
}

const answer5 = prompt('Year I graduated from college');

if ( answer5.toLowerCase() === '2017' ) {
  score += 1;
}

/*
  5. Rank player based on number of correct answers
   - 5 correct = Gold
   - 3-4 correct = Silver
   - 1-2 correct = Bronze
   - 0 correct = No crown
*/
if ( score === 5 ) {
  rank = RANK_GOLD;
} else if ( score >= 3 ) {
  rank = RANK_SILVER;
} else if ( score >= 1 ) {
  rank = RANK_BRONZE;
} else {
  rank = RANK_NONE;
}

// 6. Output results to the <main> element
const result = `<p>You got ${score} out of 5 answers.</p>`;
const ranking = `Your rank: ${rank.toUpperCase()}`;

main.innerHTML = result + ranking;
