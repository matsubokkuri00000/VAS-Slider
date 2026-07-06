const slider = document.getElementById("slider");
const message = document.getElementById("message");

// マウスやタッチを離したときにコピー
slider.addEventListener("change", async function () {

    try {
        await navigator.clipboard.writeText(slider.value);

        setTimeout(() => {
            message.textContent = "";
        }, 1000);

    } catch (err) {
    }

});