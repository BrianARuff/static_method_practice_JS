class Bird {
  static _changeColor(color) {
    this.color = color;
  }

  static _changeSound(sound) {
    this.sound = sound;
  }

  static _compareBirdColor(first, second) {
    return first.color === second.color ? true : false;
  }

  constructor(color = "red", sound = "tweet") {
    this.color = color;
    this.sound = sound;
  }
}

const redBird = new Bird();
const blueBird = new Bird("blue", "chirp");

console.log(redBird);
console.log(blueBird); 

Bird._changeColor.call(redBird, "blue");
Bird._changeSound.call(redBird, "chirp")

console.log(Bird._compareBirdColor(redBird, blueBird)); 
