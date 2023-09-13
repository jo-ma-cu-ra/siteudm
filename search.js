document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchResults = document.getElementById("search-results");
    const resultList = searchResults.getElementsByTagName("li");
    let selectedResult = -1;
    
    // Add an event listener to the search input
    searchInput.addEventListener("input", function () {
        const query = searchInput.value.toLowerCase();
        searchResults.innerHTML = ""; // Clear previous results

        // Check if the search input is empty
        if (query.trim() === "") {
            searchResults.style.display = "none"; // Hide results if the input is empty
            return; // Exit the function early
        }

        // Loop through all the pages on your website
        // Replace the following with actual page titles, content, and href attributes
        const pages = [
            { title: "História da UDM", content: "Um pequeno clube com uma grande história União Desportiva Messinense, também conhecida como UDM, é um clube português fundado em 1975. O clube encontra-se em São Bartolomeu de Messines e tem os seus treinos no estádio municipal. Atualmente, o seu presidente é Hélder Brás e o presidente da assembleia é ....A 25 de abril de 2008 a UDM conquistou a Taça do Algarve pela primeira vez. Dois anos depois, na época 2009-2010, alcançou o título de campeão do Algarve (AF Algarve). Esta vitória permitiu o clube a subir à 3ª Divisão Nacional.", URL: "https://www.uniaodesportivamessinense.pt/hist%C3%B3ria.html" },
            { title: "Órgãos Sociais", content: "Mesa da Assembleia Geral Direção Mesa da Assembleia Geral", URL: "https://www.uniaodesportivamessinense.pt/%C3%B3rg%C3%A3ossociais.html" },
            { title: "Notícias", content: "Inserir mini texto da noticia aqui Título Ver Mais", URL: "https://www.uniaodesportivamessinense.pt/not%C3%ADcias.html" },
            { title: "Notícias Base", content: "Lead da notícia Corpo da noticia", URL: "https://www.uniaodesportivamessinense.pt/noticiabase.html" },
            { title: "Séniores", content: "Nome posição Último Resultado", URL: "https://www.uniaodesportivamessinense.pt/s%C3%A9niores.html" },
            { title: "Formação", content: "equipa horário treinador", URL: "https://www.uniaodesportivamessinense.pt/forma%C3%A7%C3%A3o.html" },

        ];

        let hasResults = false; // Flag to check if there are any results

        // Search through the pages and display matching results
        pages.forEach((page) => {
            if (page.title.toLowerCase().includes(query) || page.content.toLowerCase().includes(query)) {
                const listItem = document.createElement("li");
                const link = document.createElement("a");
                link.URL = page.URL; // Use the href attribute as the page URL
                link.textContent = page.title;
                listItem.appendChild(link);
                searchResults.appendChild(listItem);
                hasResults = true; // Set the flag to true if there are results

                // Add a click event listener to navigate to the page when clicked
                link.addEventListener("click", function (event) {
                    event.preventDefault(); // Prevent the default link behavior (page navigation)
                    // Redirect to the page URL
                    window.location.URL = page.URL;
                });
            }
        });

        // Adjust CSS for search results
        if (hasResults) {
            searchResults.style.display = "block"; // Show results if there are any
        } else {
            searchResults.style.display = "none"; // Hide results if there are no results
        }
    });


    // Add keyboard event listeners for arrow keys and Enter
    searchInput.addEventListener("keydown", function (e) {
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
            e.preventDefault(); // Prevent the default arrow key behavior
            if (e.key === "ArrowUp" && selectedResult > 0) {
                // Move selection up
                resultList[selectedResult].classList.remove("selected");
                selectedResult--;
                resultList[selectedResult].classList.add("selected");
            } else if (e.key === "ArrowDown" && selectedResult < resultList.length - 1) {
                // Move selection down
                if (selectedResult >= 0) {
                    resultList[selectedResult].classList.remove("selected");
                }
                selectedResult++;
                resultList[selectedResult].classList.add("selected");
            }
        } else if (e.key === "Enter" && selectedResult >= 0) {
            // Enter key pressed, navigate to the selected page
            const selectedLink = resultList[selectedResult].querySelector("a");
            if (selectedLink) {
                selectedLink.click();
            }
        }
});
});
