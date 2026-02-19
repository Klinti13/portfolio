const modal = document.getElementById("projectModal");
const title = document.getElementById("modalTitle");
const description = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close");
const subTitle = document.getElementById("modalSubTitle")
const modalIcons = document.getElementById("modalIcons")

const projectData = {
    project1: {
        title: "Quizzical Trivia",
        subTitle: "Detailed Description:",
        description: "A dynamic trivia application that fetches real-time questions from the Open Trivia API. Features include category-based quizzes, score tracking, and a sleek React-based interface with smooth state management.",
        link: "https://klinti13.github.io/Quizzical/",
        icons: `<i class="fa-brands fa-react" style="color: #61DBFB;"></i> <i class="fa-brands fa-js" style="color: #FFD43B;"></i>`
    },
    project2: {
        title: "Guess the Word",
        subTitle: "Detailed Description:",
        description: "A modern word-guessing game built with React & Vite. It focuses on handling user input, managing complex game states (win/loss/attempts), and providing an interactive visual experience.",
        link: "https://klinti13.github.io/Word/",
        icons: `<i class="fa-brands fa-react" style="color: #61DBFB;"></i> <i class="fa-brands fa-js" style="color: #FFD43B;"></i>`
    },
    project3: {
        title: "Urban Estate",
        subTitle: "Detailed Description:",
        description: "A professional real estate demo platform. It showcases modern UI/UX design patterns, property listing simulations, and a fully responsive layout built to demonstrate full-stack front-end capabilities.",
        link: "https://urban-estate-demo.netlify.app",
        icons: `<i class="fa-brands fa-react" style="color: #61DBFB;"></i> <i class="fa-brands fa-js" style="color: #FFD43B;"></i>`
    },
    project4: {
        title: "Tenzies Game",
        subTitle: "Detailed Description:",
        description: "Fast-paced interactive game built to master React hooks. Players roll dice to match numbers, utilizing state management and effect hooks for game logic.",
        link: "https://klinti13.github.io/Tenzies/",
        icons: `<i class="fa-brands fa-react" style="color: #61DBFB;"></i> <i class="fa-brands fa-js" style="color: #FFD43B;"></i>`
    },
    project5: {
        title: "Chrome Extension",
        subTitle: "Detailed Description:",
        description: "A productivity tool to save and organize browser tabs instantly. It uses local storage to persist data and offers a clean DOM-manipulated interface.",
        link: "https://klinti13.github.io/chrome-extension/",
        icons: `<i class="fa-brands fa-js" style="color: #FFD43B;"></i> <i class="fa-brands fa-html5" style="color: #d47408;"></i>`
    },
    project6: {
        title: "Static Website",
        subTitle: "Detailed Description:",
        description: "High-performance landing page with modern CSS architecture. Focuses on semantic HTML, responsive layout, and cross-browser compatibility without heavy frameworks.",
        link: "https://klinti13.github.io/static-website/",
        icons: `<i class="fa-brands fa-html5" style="color: #d47408;"></i> <i class="fa-brands fa-css3" style="color: #28A745;"></i>`
    },
    project7: {
    title: "E-Market",
    subTitle: "Detailed Description:",
    description: "E-Market redefines everyday shopping through a minimal aesthetic and modern architecture, delivering a superior view with every click.",
    link: "https://klinti13.github.io/E-Market/",
    icons:`<i class="fa-brands fa-react" style="color: #61DBFB;"></i> <i class="fa-brands fa-typescript" style="color: #3178C6;"></i> <i class="fa-brands fa-tailwind-css" style="color: #38BDF8;"></i>`
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

        let liveBtn = document.getElementById("liveDemoBtn");
        if (!liveBtn) {
            liveBtn = document.createElement("a");
            liveBtn.id = "liveDemoBtn";
            liveBtn.target = "_blank";
            liveBtn.className = "view-live-button";
            liveBtn.textContent = "View Live Demo";
            document.querySelector(".modal-content").appendChild(liveBtn);
        }
        liveBtn.href = projectData[className].link;

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

window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && modal.style.display === "flex") {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
});
