const showBtn = document.getElementById('show-btn');
const gifContainer = document.getElementById('gif-container');

showBtn.addEventListener('click', () => {
  if (gifContainer.style.display === "none") {
    // Mostra o GIF
    gifContainer.style.display = "flex";

    // Reinicia animação
    const gif = document.querySelector(".animated-gif");
    gif.style.animation = "none";
    void gif.offsetWidth; // força reinício
    gif.style.animation = "fadeInUp 0.5s forwards";
  } else {
    // Esconde o GIF
    gifContainer.style.display = "none";
  }
});
