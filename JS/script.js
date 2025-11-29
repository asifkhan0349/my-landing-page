function generateCaptcha() {
    let captcha = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("captchaValue").innerText = captcha;
}

generateCaptcha();

function generateCaptchaa() {
    let num = Math.floor(1000 + Math.random() * 9000);
    document.getElementById("captchaValue2").textContent = num;
}

generateCaptchaa();
