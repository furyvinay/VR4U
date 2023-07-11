const sentence = "WELCOME TO THE FAMILY"; 
const delay = 100;

let i = 0;
function typeWriter() {
  if (i < sentence.length) {
    document.getElementById("typewriter").innerHTML += sentence.charAt(i);
    i++;
    setTimeout(typeWriter, delay);
  }
}
typeWriter();
