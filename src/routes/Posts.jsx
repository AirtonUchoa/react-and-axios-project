import blogFetch from "../axios/config";

import { useState, useEffect } from "react";

// Para puxar os parâmetros de ID: 
import { useParams } from "react-router-dom";

import "./Post.css";

const Posts = () => {

    const {id} = useParams();


    const [post, setPost] = useState({});
    

    const getPost = async() => {
        try{
            console.log(id);
            const response = await blogFetch.get(`/posts/${id}`);

            
            setPost(response.data)

        }catch(error){
            console.log(error);
        }
    };

    useEffect(() => {
        getPost();
    }, [])

  return (
    <div className="post-container">
        {!post.title ? (
            <p>Carregando...</p>) : 
            (<div className="post-container">
                <h2>{post.title}</h2>
                <p>{post.body}</p>
            </div>)}
    </div>
  )
  
  
}

export default Posts