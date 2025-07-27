
const images = ["0.png", "1.png", "2.png ", "3.jpg", "4.webp"]; // 3.jpg 추가
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("background-img"); // CSS에서 전체화면 스타일 적용
document.body.appendChild(bgImage);

bgImge.src = `img/${chosenImge}`;

document.body.appendChild(bgImge);

