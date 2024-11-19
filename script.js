// Динамическая загрузка данных о проектах через API
document.addEventListener("DOMContentLoaded", () => {
    const apiEndpoint = "https://jsonplaceholder.typicode.com/photos?_limit=4";
    const projectsContainer = document.getElementById("animal-projects");

    fetch(apiEndpoint)
        .then(response => response.json())
        .then(data => {
            data.forEach(item => {
                const card = document.createElement("div");
                card.classList.add("info-card");
                card.innerHTML = `
                    <h3>${item.title.substring(0, 15)}</h3>
                    <img src="${item.thumbnailUrl}" alt="${item.title}" class="info-image">
                    <p>Описание проекта доступно в будущем.</p>
                `;
                projectsContainer.appendChild(card);
            });
        })
        .catch(error => console.error("Ошибка при загрузке данных:", error));
});
