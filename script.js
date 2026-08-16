let jumlah = 0;

function bukaPesan() {

    const pesan = document.getElementById("pesan");

    if (pesan.style.display === "block") {

        pesan.style.display = "none";

    } else {

        pesan.style.display = "block";

    }
}

function tambahCinta() {

    jumlah++;

    document.getElementById("jumlahCinta").innerHTML =
        "❤️ " + jumlah + " cinta";

    buatHati();
}

function buatHati() {

    const hati = document.createElement("div");

    hati.innerHTML = "❤️";

    hati.style.position = "fixed";

    hati.style.left =
        Math.random() * 100 + "%";

    hati.style.bottom = "20px";

    hati.style.fontSize =
        Math.random() * 20 + 20 + "px";

    hati.style.pointerEvents = "none";

    hati.style.zIndex = "999";

    document.body.appendChild(hati);

    hati.animate(
        [
            {
                transform: "translateY(0)",
                opacity: 1
            },
            {
                transform:
                    "translateY(-100vh) rotate(360deg)",
                opacity: 0
            }
        ],
        {
            duration: 2000,
            easing: "ease-out"
        }
    );

    setTimeout(() => {

        hati.remove();

    }, 2000);
}