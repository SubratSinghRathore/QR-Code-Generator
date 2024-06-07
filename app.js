function generate() {
    const preImage = document.getElementsByClassName("qrImage")[0];
    document.getElementsByTagName("button")[0].style.backgroundColor = "aqua";



    if (document.getElementById("input").value) {
        if (preImage) {
            preImage.style.display = "none";

            const link = document.getElementById("input");
            const linkValue = link.value;


            const qrLink = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${linkValue}`;
            document.getElementById("qrOutput").insertAdjacentHTML("afterbegin", `<img src=${qrLink} class="qrImage">`);

            const download = document.getElementsByClassName("download")[0];
            download.style.visibility = "visible";
            download.insertAdjacentHTML("afterbegin", `<a href="${qrLink}" download='qr-code-generated.jpg'>Download</a>`);
            document.getElementsByTagName("a")[0].classList.add("downloadLink");
        } else {
            const link = document.getElementById("input");
            const linkValue = link.value;


            const qrLink = `https://api.qrserver.com/v1/create-qr-code/?size=260x260&data=${linkValue}`;
            document.getElementById("qrOutput").insertAdjacentHTML("afterbegin", `<img src=${qrLink} class="qrImage">`);

            const download = document.getElementsByClassName("download")[0];
            download.style.visibility = "visible";
            download.insertAdjacentHTML("afterbegin", `<a href="${qrLink}" download='qr-code-generated.jpg'>Download</a>`);
            document.getElementsByTagName("a")[0].classList.add("downloadLink");

        }
    } else {
        alert("Please Enter URL")
    }


}
