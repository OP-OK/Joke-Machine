const joketext = document.getElementById("joke");
const clicky = document.getElementById("clicky");
const url = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
let getJoke = () => {
    joketext.classList.remove("fade");
    fetch(url)
    .then(data => data.json())
    .then(item =>{
        joketext.textContent = `${item.joke}`;
        joketext.classList.add("fade");
    });
}
clicky.addEventListener("click",getJoke);
getJoke();