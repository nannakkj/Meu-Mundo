const categorias = {
    calculadora: ["Calculo", "Calculadora", "Matematica", "Conta"],
    teste: ["1", "2", "3", "4"],
    jogos: ["game", "jogo", "videogame"],
    ajuda: ["help", "socorro", "ajuda"]
};

const links = {
    calculadora: "/calculadora.html",
    teste: "/teste.html",
    jogos: "/jogos.html",
    ajuda: "/ajuda.html"
};

function filtrarResultados() {
    const text = document.querySelector("textarea").value.toLowerCase().trim();
    const resultados = document.getElementById("resultado");
    resultados.innerHTML = "";

    if (text === "") {
        resultados.style.display = "none";
        return;
    }

    let encontrou = false;

    for (const categoria in categorias) {
        const termos = categorias[categoria];
        const match = termos.some(item => item.toLowerCase().includes(text));

        if (match) {
            const div = document.createElement("div");
            div.classList.add("resultado_item");
            div.textContent = `${categoria.charAt(0).toUpperCase() + categoria.slice(1)}`;
            div.addEventListener("click", () => {
                window.location.href = links[categoria];
            });

            resultados.appendChild(div);
            encontrou = true;
        }
    }

    resultados.style.display = (encontrou ? "block" : "none");
}