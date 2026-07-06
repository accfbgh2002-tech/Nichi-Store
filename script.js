document.querySelectorAll(".card button").forEach((button) => {
    button.addEventListener("click", () => {

        const product =
            button.parentElement.querySelector("h2").innerText;

        const price =
            button.parentElement.querySelector("p").innerText;

        const buy = confirm(
`Bạn muốn mua ${product}?
Giá: ${price}

Nhấn OK để vào Discord.`
        );

        if (buy) {
            window.open("https://discord.gg/tCdUkBpS","_blank");
        }

    });
});

// Hiệu ứng hiện dần khi cuộn
const cards = document.querySelectorAll(".card");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0)";
        }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = ".6s";
    observer.observe(card);
});
