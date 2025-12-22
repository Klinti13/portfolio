
const modal = document.getElementById("projectModal");
const title = document.getElementById("modalTitle");
const description = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close");
const subTitle = document.getElementById("modalSubTitle")
const modalIcons = document.getElementById("modalIcons")


const projectData = {
    project1: {
        title: "Static Website",
        subTitle: "Detailed Description:",
        description: "A fully responsive static website built using modern HTML and CSS best practices. The project focuses on clean layout structure, semantic HTML, and responsive design principles to ensure compatibility across desktop, tablet, and mobile devices. Special attention was given to performance, accessibility, and visual consistency, making the website fast, lightweight, and easy to maintain.",
        icons: `
                <i class="fa-brands fa-html5" style="color:#d47408"></i>
                <i class="fa-brands fa-css3" style="color:#28A745"></i>
        `
    },
    project2: {
        title: "Mini Blackjack Game",
        subTitle: "Detailed Description:",
        description: "An interactive Mini Blackjack game developed with JavaScript that simulates the core mechanics of a classic casino blackjack game. The project includes card generation, score calculation, win/lose conditions, and a simple betting system. The user interface dynamically updates based on player actions, providing a smooth and engaging gameplay experience.",
        icons: `
                <i class="fa-brands fa-html5" style="color:#d47408"></i>
                <i class="fa-brands fa-css3" style="color:#28A745"></i>
                <i class="fa-brands fa-js" style="color:#FFD43B"></i>

        `
    },
    project3: {
        title: "Chrome Extension",
        subTitle: "Detailed Description:",
        description: "A Chrome browser extension built with JavaScript that allows users to save, manage, and quickly access their favorite links directly from the browser. The extension uses browser storage to persist data and provides a simple, intuitive interface for adding and organizing links, improving productivity and workflow efficiency.",
        icons: ` 
                <i class="fa-brands fa-html5" style="color:#d47408"></i>
                <i class="fa-brands fa-css3" style="color:#28A745"></i>
                <i class="fa-brands fa-js" style="color:#FFD43B"></i>`
    }
};

Object.keys(projectData).forEach(className => {
    const el = document.querySelector("." + className);

    if (!el) return;

    el.addEventListener("click", () => {
        title.textContent = projectData[className].title;
        subTitle.textContent = projectData[className].subTitle;
        description.textContent = projectData[className].description;
        modalIcons.innerHTML = projectData[className].icons || "";

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });
});

closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});

