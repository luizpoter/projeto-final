// import { handleErrors } from "./exception.js";

// var URL = 'http://localhost:3000/ricos';

// export const getAllRicos = async() => {
//     try {
//         const response = await fetch(URL);
//         //lidando com oerros na resposta
//         handleErrors(response);

//         //converter os dados para json
//         return response.json();

//     } catch (error) {
//         console.log('Error >>>', error);
//     }
// };

// export const createRicos = async(ricos) => {
//     fetch(URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(ricos)
//         })
//         .then(response => response.json())
//         .then(data => console.log('sucesso: ', data))
//         .catch((error) => console.log('Erro: ', error));

// };

// export const adicionarRicos = async(ricos) => {
//     fetch(URL, {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(ricos)
//         })
//         .then(response => response.json())
//         .then(data => console.log('sucesso: ', data))
//         .catch((error) => console.log('Erro: ', error));

// };

// export const deleteRicos = async(ricos) => {
//     fetch(URL + `/${ricos.id[i]}`, { method: 'DELETE' })
//         .then(response => response.json())
//         .then(data => console.log('Success:', data))
//         .catch(error => console.error('Error:', error));
// };

// export const updateRicos = async(ricos) => {
//     fetch(URL + `/${ricos.id}`, {
//             method: 'PATCH',
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(ricos)
//         })
//         .then(response => response.json())
//         .then(data => console.log('Success:', data))
//         .catch(error => console.error('Error:', error));
// };

import { handleErrors } from "./exception.js";

const URL = 'http://localhost:3000/ricos';

export const getAllRicos = async() => {
    try {
        const response = await fetch(URL);
        // Handling errors in the response
        handleErrors(response);

        // Converting data to JSON
        return response.json();

    } catch (error) {
        console.error('Error >>>', error);
    }
};

export const createRicos = async(ricos) => {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ricos)
        });

        // Handling errors in the response
        handleErrors(response);

        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
};

export const adicionarRicos = async(ricos) => {
    try {
        const response = await fetch(URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ricos)
        });

        // Handling errors in the response
        handleErrors(response);

        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
};

export const deleteRicos = async(ricosId) => {
    try {
        const response = await fetch(`${URL}/${ricosId}`, { method: 'DELETE' });

        // Handling errors in the response
        handleErrors(response);

        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
};

export const updateRicos = async(ricos) => {
    try {
        const response = await fetch(`${URL}/${ricos.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ricos)
        });

        // Handling errors in the response
        handleErrors(response);

        const data = await response.json();
        console.log('Success:', data);
    } catch (error) {
        console.error('Error:', error);
    }
};