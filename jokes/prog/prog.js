var joketext = document.getElementById("joke");
var progsing = document.getElementById("progsing");
var progmult = document.getElementById("progmult");
var singurl = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";
var multurl = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";

let getPS = () => {
    joketext.classList.remove("fade");
    fetch(singurl)
    .then(data => data.json())
    .then(item =>{
        joketext.textContent = `${item.joke}`;
        joketext.classList.add("fade");
    });
};

let getPM = () => {
    joketext.classList.remove("fade");
    fetch(multurl)
    .then(data => data.json())
    .then(item =>{
        joketext.textContent = `${item.setup} \n ${item.delivery}`;
        joketext.classList.add("fade");
    });
};

progsing.addEventListener("click",getPS);
progmult.addEventListener("click",getPM);