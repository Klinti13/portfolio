
const modal = document.getElementById("projectModal");
const title = document.getElementById("modalTitle");
const description = document.getElementById("modalDescription");
const closeBtn = document.querySelector(".close");

const projectData = {
    project1: {
        title: "Static Website",
        description: "A responsive and fast static website built using modern HTML and CSS techniques."
    },
    project2: {
        title: "Mini Blackjack Game",
        description: "An interactive blackjack game with betting logic and dynamic JavaScript gameplay."
    },
    project3: {
        title: "Chrome Extension",
        description: "A Chrome extension that allows users to save and manage favorite links efficiently."
    }
};

Object.keys(projectData).forEach(className => {
    const el = document.querySelector("." + className);

    el.addEventListener("click", () => {
        title.textContent = projectData[className].title;
        description.textContent = projectData[className].description;

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

