import React from 'react'

import blogFetch from "../axios/config";

import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import "./NewPost.css"


const NewPost = () => {
  
  // Configurações para salvar o post:
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) => {
    e.preventDefault();
    // Não atualiza a página ao criar o post

    console.log(title, body);

    const post = {title, body, userId: 1}

    await blogFetch.post("/posts", {
      body: post,
      // enviar o método post para a API.
    })

    navigate("/")
    // Volta para a home assim que se criar um novo post.
  }




  return (
    <div className="new-post">
      <h2>Inserir novo Post:</h2>

      {/* Evento onSubmit do input "Criar Post" */}
      <form onSubmit={(e) => createPost(e)}>
        
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input type="text" name="title" id="title" placeholder="Digite o título do post:" onChange={(e) => setTitle(e.target.value)}></input>
        </div>

        <div className="form-control">
          <label htmlFor="body">Conteúdo:</label>
          <textarea name="body" id="body" placeholder="Digite o conteúdo do post:" onChange={(e) => setBody(e.target.value)}></textarea>
        </div>

        <div className="form-control">
          <input type="submit" className="btn" value="Criar Post"></input>
        </div>

      </form>
    </div>
  )
}

export default NewPost