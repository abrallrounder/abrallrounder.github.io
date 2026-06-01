const links = {
    facebook: "https://facebook.com/abr.allrounder",
    instagram: "https://instagram.com/abr.allrounder",
    telegram: "https://t.me/yourprofile",
    whatsapp: "https://wa.me/8801719556371",
    gmail: "mailto:abr.allrounder@gmail.com",
    twitter: "https://twitter.com/abr.allrounder",
    thread: "https://www.threads.com/@abr.allrounder",
    twitch: "https://m.twitch.tv/abrallrounder",
    pinterest: "https://www.pinterest.com/abrallrounder",
    youtube: "https://youtube.com/@abr.allrounder"
};

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const linkName = button.getAttribute("data-link");

        if (links[linkName]) {
            window.open(links[linkName], "_blank");
        } else {
            console.log("Link not found:", linkName);
        }
    });
});
