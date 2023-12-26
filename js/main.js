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
                <div class="containerRicos">
                    <img class="cardimg" src="${ricos.img}" alt="${ricos.name}"<hr>
                    <h5 class="cardtitle">${ricos.nome}</h5>
                    <hr>
                    <p class="cardtext">US$ ${ricos.fortuna}</p>
                    <hr>
                </div>
            `;
            dataContainer.appendChild(ricosElement);
        });
        document.getElementById('btnCreate').addEventListener('click', () => {
            const ricos = {
                name: "Forrest Gump",
                img: "assets/forrest.jpeg",
                fortuna: "6,7 bilhões"
            };
            createRicos(ricos);
        });
        document.getElementById('btnDelete').addEventListener('click', () => {
            const ricos = {
                name: "Forrest Gump",
                img: "assets/forrest.jpeg",
                fortuna: "5,7 bilhões",
                id: 10
            };
            deleteRicos(ricos);
        });

        document.getElementById('btnUpdate').addEventListener('click', () => {
            const ricos = {
                name: "forrest gump",
                img: "assets/forrest.jpeg",
                fortuna: "5,7 bilhões",
                id: 10
            };
            updateRicos(ricos);
        });

    })
};