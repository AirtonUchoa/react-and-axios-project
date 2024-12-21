import axios from "axios";

// Usado quando ocorrer algum problema no site da API, sem precisar alterar todo o código.

const blogFetch = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com",
    headers: {
        "Content-Type": "application/json",
        "algumacoisa": "teste",
        // Poderia ser colocado aqui um token de uma API.
    }
});

export default blogFetch;