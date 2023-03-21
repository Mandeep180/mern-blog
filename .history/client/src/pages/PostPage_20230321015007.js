import {useEffect,useState} from "react";
import { useParams } from "react-router-dom";

export default function PostPage() {
    const id = useParams();
    const[postInfo,setPostInfo] = useState(null);
    useEffect(()=>{
        console.log(id);
        fetch(`http://localhost:4000/post/${id}`)
      .then(response =>{
        response.json().then(postInfo=>{
            setPostInfo(postInfo)
        });
      });
        
    }, []);
    return(
        <div>Post Page</div>
    );
}