const anagramsFinder = (s1, s2) => [...s1.toLowerCase()].sort().join('').trim() === [...s2.toLowerCase()].sort().join('').trim();
