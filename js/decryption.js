var seed;

function save_seed_decrypt(){
    seed = document.getElementById("seed_text").value;

    if (seed === ''){
        seed = "Seed X";
    }

    localStorage.setItem("seedKey", seed);
    window.open("decryption.html","_self");
}

function goBack() {
    window.history.back();
}

function decrypt(message = '', key = ''){
    var code = CryptoJS.AES.decrypt(message, key);
    console.log(code);
    var decryptedMessage = code.toString(CryptoJS.enc.Utf8);
    console.log(decryptedMessage);
    var messStr = decryptedMessage.toString();

    // for as long as it's not working lol
    if (messStr === ''){
        messStr = "abc";
    }

    alert("Decrypted Message: " + messStr);
    return messStr;
}
