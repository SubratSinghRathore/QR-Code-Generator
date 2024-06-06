function generate() {
    const preImage = document.getElementsByClassName("qrImage")[0];
    document.getElementsByTagName("button")[0].style.backgroundColor="aqua";

    if (preImage) {
        preImage.style.display = "none";

        const link = document.getElementById("input");
        const linkValue = link.value;


        const qrLink = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${linkValue}`;

        document.getElementById("qrOutput").insertAdjacentHTML("afterbegin", `<img src=${qrLink} class="qrImage">`);
        console.log(qrLink)
    } else {
        const link = document.getElementById("input");
        const linkValue = link.value;


        const qrLink = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${linkValue}`;

        document.getElementById("qrOutput").insertAdjacentHTML("afterbegin", `<img src=${qrLink} class="qrImage">`);
        console.log(qrLink)
    }
}
