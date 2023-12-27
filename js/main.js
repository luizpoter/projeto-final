import { getAllRicos, createRicos, deleteRicos, updateRicos, adicionarRicos } from "./service.js";

window.onload = () => {
    loadRicos();
};

const loadRicos = () => {

    getAllRicos().then(resp => {
        console.log('arrowbed', resp)
    });


    const dataContainer = document.getElementById('data-container');
    getAllRicos().then(resp => {
        // Sort the response array in descending order based on ID
        resp.sort((a, b) => b.id - a.id);

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
        document.getElementById('btnAdicionar').addEventListener('click', async(event) => {
            event.preventDefault(); // Prevent the default form submission behavior

            const nome = document.querySelector('.nome').value;
            const img = document.querySelector('.img').value;
            const fortuna = document.querySelector('.fortuna').value;

            const ricos = {
                nome,
                img,
                fortuna,
            };
            await adicionarRicos(ricos);
        });
        document.getElementById('btnDelete').addEventListener('click', async(event) => {
            // Delete items by iterating in descending order
            for (let i = 0; i < resp.length; i++) {
                const ricos = resp[i];
                await deleteRicos(ricos);
            }
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