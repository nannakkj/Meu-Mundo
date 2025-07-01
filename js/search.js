const categorias = {
    Conversos_Moedas_Rpg: ["rpg", "dinheiro", "conversor", "moeda"]
};

const links = {
    Conversos_Moedas_Rpg: "/html/conversor.html"
};

function filtrarResultados() {
    const text = document.querySelector("textarea").value.toLowerCase().trim();
    const resultados = document.getElementById("resultado");
    resultados.innerHTML = "";

    if (text === "") {
        return;
    }

    let encontrou = false;

    for (const categoria in categorias) {
        const termos = categorias[categoria];
        const match = termos.some(item => item.toLowerCase().includes(text));

        if (match) {
            const div = document.createElement("div");
            div.classList.add("resultado_item");
            div.textContent = categoria
            .replaceAll("_", " ")
            .replace(/\b\w/g, c => c.toUpperCase());
            div.addEventListener("click", () => {
                window.location.href = links[categoria];
            });

            resultados.appendChild(div);
            encontrou = true;
        }
    }

}