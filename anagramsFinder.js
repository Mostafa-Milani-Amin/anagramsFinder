function anagramsFinder(s1, s2) {
    return s1.replace(/[^\w]/g).toLowerCase().split("").sort().join() === s2.replace(/[^\w]/g).toLowerCase().split("").sort().join();
}