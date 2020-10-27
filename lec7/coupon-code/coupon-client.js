window.addEventListener("load", () => {
    const nameInput = document.getElementById("name");
    const couponCodeInput = document.getElementById("coupon-code");
    const button = document.getElementById("button");
    const nowinElem = document.getElementById("no-win");
    const winElem = document.getElementById("you-won");
    button.addEventListener("click", async e => {
        e.preventDefault();
        winElem.style.display = "none"; //new click of button:
        nowinElem.style.display = "none"; // hide previous messages

        let resp = await fetch('winner', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: nameInput.value,
                couponCodeInput: couponCodeInput.value
            })
        })
        let data = await resp.json();

        if (resp.status !== 200) {
            console.log('Winner report failed')
            nowinElem.innerHTML = "Error fetchin data";
        } else {
            if (data.valid === true) {
                winElem.style.display = "block";
                winElem.innerHTML = data.resp_text;
            } else {
                setTimeout(() => nowinElem.style.display = "block", nowinElem.innerHTML = data.resp_text, 200);
            }
        }
    })
})