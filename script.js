/* =========================================
   HALAMAN PEMBUKA
========================================= */

function mulai() {

    document.getElementById("opening").style.display = "none";

    document.getElementById("message").style.display = "block";

    buatHati(15);
}


/* =========================================
   LANJUT KE GAME
========================================= */

function lanjutGame() {

    document.getElementById("message").style.display = "none";

    document.getElementById("game").style.display = "block";

    buatHati(10);
}


/* =========================================
   TOMBOL TIDAK
========================================= */

function jawabTidak() {

    const noButton =
        document.getElementById("noButton");

    const hint =
        document.getElementById("hint");

    const buttonsArea =
        document.querySelector(".buttons-area");

    const areaWidth =
        buttonsArea.offsetWidth;

    const areaHeight =
        buttonsArea.offsetHeight;

    const buttonWidth =
        noButton.offsetWidth;

    const buttonHeight =
        noButton.offsetHeight;

    const maxX =
        (areaWidth / 2) - buttonWidth;

    const maxY =
        (areaHeight / 2) - buttonHeight;

    const randomX =
        (Math.random() * maxX * 2) - maxX;

    const randomY =
        (Math.random() * maxY * 2) - maxY;

    noButton.style.transform =
        `translate(${randomX}px, ${randomY}px)`;

    hint.innerHTML =
        "Hehe 😜 pilihan itu belum tersedia... coba IYA ❤️";
}


/* =========================================
   TOMBOL IYA
========================================= */

function jawabIya() {

    document.getElementById("game").style.display = "none";

    document.getElementById("result").style.display = "block";

    buatHati(60);
}


/* =========================================
   TOMBOL PELUK
========================================= */

function peluk() {

    document.getElementById("hugMessage").innerHTML =
        "🤗 Peluk virtual dari Ael untuk kamu... ❤️";

    buatHati(35);
}


/* =========================================
   MEMBUAT HATI TERBANG
========================================= */

function buatHati(jumlah) {

    for (let i = 0; i < jumlah; i++) {

        setTimeout(() => {

            const heart =
                document.createElement("div");

            heart.className =
                "floating-heart";

            const daftarHati = [
                "❤️",
                "💕",
                "💗",
                "💖",
                "💓",
                "💘",
                "💝"
            ];

            heart.innerHTML =
                daftarHati[
                    Math.floor(
                        Math.random() *
                        daftarHati.length
                    )
                ];

            heart.style.left =
                Math.random() * 100 + "%";

            heart.style.fontSize =
                Math.random() * 25 + 18 + "px";

            heart.style.animationDuration =
                Math.random() * 3 + 3 + "s";

            document.body.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 6000);

        }, i * 80);
    }
}


/* =========================================
   ANIMASI HATI OTOMATIS
========================================= */

setInterval(() => {

    buatHati(1);

}, 1500);