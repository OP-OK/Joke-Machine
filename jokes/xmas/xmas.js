var joketext = document.getElementById("joke");
var xmasmult = document.getElementById("xmasmult");
var multurl = "https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";

let getCM = () => {
    joketext.classList.remove("fade");
    fetch(multurl)
    .then(data => data.json())
    .then(item =>{
        joketext.textContent = `${item.setup} \n ${item.delivery}`;
        joketext.classList.add("fade");
    });
};

xmasmult.addEventListener("click",getCM);