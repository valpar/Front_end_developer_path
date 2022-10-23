// this is to test out javascript split method

const mySentence = "really cool colorful socks, where did you get those?";
const words = mySentence.split(" "); //with every spacebar in the middle of the split quotations, it splits the sentences into words

for (let i = 0; i < words.length; i++) {
  //goes over every word in the sentence
  words[i] = words[i][0].toUpperCase() + words[i].substring(1); //takes the first letter of the each word and capitalizes it and the second part replaces the previous letter
}

console.log(words.join(" "));
