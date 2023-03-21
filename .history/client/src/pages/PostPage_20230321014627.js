import {useEffect} from "react";
import { useParams } from "react-router-dom";
export default function PostPage() {
    const id = useParams();
    useEffect(()=>{
        console.log(id);
        
        fetch('http://localhost:4000/post/')
    }, []);
    return(
        <div>Post Page</div>
    );
}