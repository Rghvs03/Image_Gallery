let imgs = document.querySelectorAll("#gallery img");
let modal = document.getElementById("modal");
let modalImg = document.querySelector(".bigImage");
let left = document.querySelector(".nav.left");
let right = document.querySelector(".nav.right");
let closeBtn = document.querySelector(".closeBtn");
let idx = 0;

imgs.forEach((img, i) => {
    img.addEventListener("click", function () {
        idx = i;
        modalImg.src = img.src;
        modal.classList.add("active");
        modal.style.display = "flex";
    });
});

function fadeSwitch(newIdx) {
    modalImg.classList.add("fade");
    setTimeout(function () {
        modalImg.src = imgs[newIdx].src;
        modalImg.classList.remove("fade");
    }, 180);
}

left.addEventListener("click", function () {
    idx = (idx - 1 + imgs.length) % imgs.length;
    fadeSwitch(idx);
});
right.addEventListener("click", function () {
    idx = (idx + 1) % imgs.length;
    fadeSwitch(idx);
});
closeBtn.addEventListener("click", function () {
    modal.classList.remove("active");
    setTimeout(function () {
        modal.style.display = "none";
    }, 330);
});
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.classList.remove("active");
        setTimeout(function () {
            modal.style.display = "none";
        }, 330);
    }
});

document.addEventListener("keydown", function (e) {
    if (modal.classList.contains("active")) {
        if (e.key === "Escape") {
            modal.classList.remove("active");
            setTimeout(function () {
                modal.style.display = "none";
            }, 330);
        }
        if (e.key === "ArrowLeft") {
            idx = (idx - 1 + imgs.length) % imgs.length;
            fadeSwitch(idx);
        }
        if (e.key === "ArrowRight") {
            idx = (idx + 1) % imgs.length;
            fadeSwitch(idx);
        }
    }
});

modalImg.classList.remove("fade");
let styleTag = document.createElement("style");
styleTag.innerHTML = `
.bigImage.fade {
    opacity: 0.25;
    transition: opacity 0.18s;
}
.bigImage {
    transition: opacity 0.22s;
    opacity: 1;
}
`;
document.head.appendChild(styleTag);
