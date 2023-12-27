import { getAllRicos } from "./service.js";

window.onload = () => {
    loadRicos();
};

const loadRicos = () => {

    getAllRicos().then(resp => {
        console.log('arrowbed', resp)
    });


    const dataContainer = document.getElementById('data-container');
    getAllRicos().then(resp => {
        resp.forEach((ricos) => {
            const ricosElement = document.createElement('div');
            ricosElement.innerHTML =
                `
                <div class="elemento">
                    <img class="cardimg" src="${ricos.img}" alt="${ricos.nome}"<hr>
                    <h5 class="cardtitle">${ricos.nome}</h5>
                    <hr>
                    <p class="cardtext">US$ ${ricos.fortuna}</p>                    
                </div>
            `;
            dataContainer.appendChild(ricosElement);
        });
        document.getElementById('btnCreate').addEventListener('onclick', async(event) => {
            event.preventDefault(); // Prevent the default form submission behavior

            const ricos = {
                nome: "Tywin Lannister",
                img: "https://segredosdomundo.r7.com/wp-content/uploads/2016/02/7.jpg.webp",
                fortuna: "1,8 bilhões"
            };
            await createRicos(ricos);
        });
        document.getElementById('btnDelete').addEventListener('click', async(event) => {
            const ricos = {
                nome: "Tywin Lannister",
                img: "data:image/jpeg;base64,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",
                fortuna: "1,8 bilhão",
                id: 10
            };
            deleteRicos(ricos);
        });

        document.getElementById('btnUpdate').addEventListener('click', async(event) => {
            const ricos = {
                nome: "Tywin Lannister",
                img: "data:image/jpeg;base64,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",
                fortuna: "1,8 bilhão",
                id: 10
            };
            updateRicos(ricos);
        });

    })
};