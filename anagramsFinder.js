const anagramsFinder = (w1, w2) => [...w1.toLowerCase()].sort().join('') === [...w2.toLowerCase()].sort().join('');
