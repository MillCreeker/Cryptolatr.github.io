var seed;

function save_seed_encrypt(){
    seed = document.getElementById("seed_text").value;

    if (seed === ''){
        seed = "Seed X";
    }

    localStorage.setItem("seedKey", seed);
    window.open("encryption.html","_self");
}

function goBack() {
  window.history.back();
}

function encryptcopy(message = '', key = ''){
    var message = CryptoJS.AES.encrypt(message, key);
    var messStr = message.toString();
    document.getElementById('textEncr').value = messStr;
    var copyText = document.getElementById("textEncr");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");
    return messStr;
}
