import { getAllRicos, createRicos, deleteRicos, updateRicos } from "./service.js";

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
        document.getElementById('btnCreate').addEventListener('click', async(event) => {
            event.preventDefault(); // Prevent the default form submission behavior

            const ricos = {
                nome: "Tywin Lannister",
                img: "assets/tywin.jpeg",
                fortuna: "1,8 bilhões"
            };
            await createRicos(ricos);
        });
        document.getElementById('btnDelete').addEventListener('click', async(event) => {
            const ricos = {
                nome: "Tywin Lannister",
                img: "assets/tywin.jpeg",
                fortuna: "1,8 bilhão",
                id: 10
            };
            deleteRicos(ricos);
        });

        document.getElementById('btnUpdate').addEventListener('click', async(event) => {
            const ricos = {
                nome: "Tywin Lannister",
                img: "assets/tywin.jpeg",
                fortuna: "1,8 bilhão",
                id: 10
            };
            updateRicos(ricos);
        });

    })
};