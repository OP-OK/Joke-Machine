var joketext = document.getElementById("joke");
var punsing = document.getElementById("punsing");
var singurl = "https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

let getPS = () => {
    joketext.classList.remove("fade");
    fetch(singurl)
    .then(data => data.json())
    .then(item =>{
        joketext.textContent = `${item.joke}`;
        joketext.classList.add("fade");
    });
};

punsing.addEventListener("click",getPS)