/* =========================
   PRELOADER
========================= */

window.addEventListener("load", () => {

    setTimeout(() => {

        const loader =
        document.getElementById("loader");

        if(loader){
            loader.style.display = "none";
        }

    }, 1500);

});


/* =========================
   COUNTDOWN TIMER
========================= */

const weddingDate =
new Date("December 20, 2026 18:00:00").getTime();

setInterval(() => {

    const now = new Date().getTime();

    const gap = weddingDate - now;

    const days =
    Math.floor(gap / (1000 * 60 * 60 * 24));

    const hours =
    Math.floor(
    (gap % (1000 * 60 * 60 * 24))
    / (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
    (gap % (1000 * 60 * 60))
    / (1000 * 60)
    );

    const seconds =
    Math.floor(
    (gap % (1000 * 60))
    / 1000
    );

    const dayEl =
    document.getElementById("days");

    const hourEl =
    document.getElementById("hours");

    const minEl =
    document.getElementById("minutes");

    const secEl =
    document.getElementById("seconds");

    if(dayEl) dayEl.innerHTML = days;
    if(hourEl) hourEl.innerHTML = hours;
    if(minEl) minEl.innerHTML = minutes;
    if(secEl) secEl.innerHTML = seconds;

}, 1000);


/* =========================
   MUSIC PLAYER
========================= */

const musicBtn =
document.getElementById("musicBtn");

const bgMusic =
document.getElementById("bgMusic");

let isPlaying = false;

if(musicBtn){

    musicBtn.addEventListener("click", () => {

        if(isPlaying){

            bgMusic.pause();

            musicBtn.innerHTML =
            "🎵 Music";

        }
        else{

            bgMusic.play();

            musicBtn.innerHTML =
            "⏸ Pause";

        }

        isPlaying = !isPlaying;

    });

}


/* =========================
   INVITATION POPUP
========================= */

function closePopup(){

    const popup =
    document.getElementById("invitePopup");

    popup.style.display = "none";

}


/* =========================
   FLOATING FLOWERS
========================= */

setInterval(() => {

    const petal =
    document.createElement("div");

    petal.className = "petal";

    const flowers = [
        "🌸",
        "🌺",
        "🌷",
        "💮"
    ];

    petal.innerHTML =
    flowers[
        Math.floor(
            Math.random() * flowers.length
        )
    ];

    petal.style.left =
    Math.random() * 100 + "vw";

    petal.style.animationDuration =
    (Math.random() * 5 + 5) + "s";

    petal.style.fontSize =
    (Math.random() * 15 + 15) + "px";

    document.body.appendChild(petal);

    setTimeout(() => {

        petal.remove();

    }, 10000);

}, 500);


/* =========================
   SMOOTH SCROLL ANIMATION
========================= */

const cards =
document.querySelectorAll(
".card, .event-card"
);

const observer =
new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if(entry.isIntersecting){

            entry.target.style.opacity = "1";

            entry.target.style.transform =
            "translateY(0)";

        }

    });

},{
    threshold:0.2
});

cards.forEach(card => {

    card.style.opacity = "0";

    card.style.transform =
    "translateY(50px)";

    card.style.transition =
    "0.8s ease";

    observer.observe(card);

});
