import {useContext,useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import {response} from "express";
//import {UserContext} from "../UserContext";

export default function PostPage() {
    const {id} = useParams();

    useEffect(()=>{
        fetch(`http://localhost:4000/post/${id}`)
        .then(response=>{
            response.json(postInfo =>)
        })
    })
    return(
        <div>Post Page</div>
    );
}