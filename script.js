const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
 question.innerHTML = "Aaaaa I love you too";
 gif.src = 
     "https://raw.githubusercontent.com/DzarelDeveloper/Img/main/gifyou.webp";

});

noBtn.addEventListener("mouseover", () => {
    const noBtnrect = noBtn.getBoundingClientRect();
    const maxX = window.innerHeight - noBtnrect.width;
    const maxY = window.innerWidth - noBtnrect.height;

    const randomX = math.floor(math.random() * maxX)
    const randomY = math.floor(math.random() * maxY)

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";

});