var seed;

function save_seed_decrypt(){
    seed = document.getElementById("seed_text").value;

    if (seed === ''){
        seed = "Seed X";
    }

    localStorage.setItem("seedKey", seed);
    window.open("decryption.html","_self");
}

// Um mit seed arbeiten zu können, einfach folgende Zeile am Anfang der ersten Funktion einbauen:
// seed = localStorage.getItem("seedKey");
