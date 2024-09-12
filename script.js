let qrcode = new QRCode(document.querySelector(".qrcode"));
qrcode.makeCode("Why did you scan me?");

function generateQr() {
    let inputValue = document.querySelector("input").value.trim();
    if (inputValue === "") {
        alert("Input Field Cannot be blank!");
    } else {
        qrcode.makeCode(inputValue);
    }
}
