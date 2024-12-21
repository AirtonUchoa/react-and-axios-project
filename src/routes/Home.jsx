import React from 'react';
import "./Home.css";

import { useState, useEffect } from 'react';

// Não se esqueça de instalar o axios pelo terminal:
// Importando o axios:
// import axios from "axios";

// Sendo substituído por 'blogFetch':
import blogFetch from "../axios/config"

import { Link } from 'react-router-dom';


const Home = () => {


// Configurações para puxar dados da API pelo Axios:

  const [posts, setPost] = useState([])
  const getPosts = async() => {
    try {

      // Apenas um teste de requisição:
      console.log("Testando a requisição 'GET'.... Concluído.")
      
      // Definindo uma constante para utilizar a requisição 'GET' do axios:

      //  'response' antigo abaixo:
      // const response = await axios.get(
      //   "https://jsonplaceholder.typicode.com/posts");

      // Trocado por:

      const response = await blogFetch.get("/posts");

      // Agora, precisa-se somente colocar os endpoints.
        
      const data = response.data;
      
      // Imprimindo as informações da API:
      console.log(data);

      setPost(data);
    
    }catch(error){
      console.log(error);
    }
      
  }

  useEffect(() =>{
    getPosts()
  }, []) // Array vazio para que a função execute apenas uma vez.
  
// 

  return (
    
    <div className="container home">
      <h1>Últimos Posts:</h1>
      {!posts || posts.length === 0 ? <p>Carregando...</p> : (
        // parênteses utilizado para quando requere-se um bloco de html.

        
        posts.map((post) =>(
          <div className="post" key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link to={`/posts/${post.id}`} className="btn">Ler Mais</Link>
          </div>
        ))
      )}
    </div>
  );
};

export default Home