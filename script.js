// TAM EKRAN BUTONU
document.getElementById("fullscreenBtn").onclick = () => {
    const iframe = document.getElementById("vrframe");

    if (iframe.requestFullscreen) iframe.requestFullscreen();
    else if (iframe.webkitRequestFullscreen) iframe.webkitRequestFullscreen();
    else if (iframe.mozRequestFullScreen) iframe.mozRequestFullScreen();
};

// SAHNE DEĞİŞTİRME
function changeScene(id) {
    const vr = document.getElementById("vrframe");
    vr.src = "https://www.360tr.com/embed.php?vid=" + id;
}
