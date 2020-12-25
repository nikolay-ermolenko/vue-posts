const sentences: string[] = [
  'I can almost see it',
  'That dream I\'m dreamin\' but',
  'There\'s a voice inside my head saying',
  'You\'ll never reach it',
  'Every step I\'m taking',
  'Every move I make feels',
  'Lost with no direction',
  'My faith is shakin',
  'But I I gotta keep tryin',
  'Gotta keep my head held high',
  'There\'s always gonna be another mountain',
  'I\'m always gonna wanna make it move',
  'Always gonna be an uphill battle',
  'Sometimes I\'m gonna have to lose',
  'Ain\'t about how fast I get there',
  'Ain\'t about what\'s waitin on the other side',
  'It\'s the climb',
  'The struggles I\'m facing',
  'The chances I\'m taking',
  'Sometimes might knock me down but',
  'No I\'m not breaking',
  'I may not know it',
  'But these are the moments that',
  'I\'m gonna remember most yeah',
  'Just gotta keep going',
  'And I I gotta be strong',
  'Just keep pushing on \'cause',
  'There\'s always gonna be another mountain',
  'I\'m always gonna wanna make it move',
  'Always gonna be an uphill battle',
  'But Sometimes I\'m gonna have to lose',
  'Ain\'t about how fast I get there',
  'Ain\'t about what\'s waitin on the other side',
  'It\'s the climb',
  'Yeah-yeah',
  'There\'s always gonna be another mountain',
  'I\'m always gonna wanna make it move',
  'Always gonna be an uphill battle',
  'Sometimes you\'re gonna have to lose',
  'Ain\'t about how fast I get there',
  'Ain\'t about what\'s waitin on the other side',
  'It\'s the climb',
  'Yeah-yeah-yea',
  'Keep on moving',
  'Keep climbing',
  'Keep the faith',
  'Baby It\'s all about',
  'It\'s all about the climb',
  'Keep your faith',
  'Whoa O Whoa',
];

export default function getSentences(min = 1, max = 6) {
  const results = [];

  let counts = min + Math.floor((max - min) * Math.random());

  while (counts) {
    counts -= 1;
    results.push(sentences[Math.floor(sentences.length * Math.random())]);
  }

  return `${results.join('. ')}.`;
}

export { sentences };
