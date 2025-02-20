function checkVowelConsonant(char) {
    const vowels = 'aeiouAEIOU';
    if (vowels.includes(char)) {
        console.log('Vowel');
    } else {
        console.log('Consonant');
    }
}
checkVowelConsonant('a');
