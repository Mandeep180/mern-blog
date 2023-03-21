import {useEffect} from "react";
import { useParams } from "react-router-dom";
export default function PostPage() {
    const params = useParams();
    useEffect(()=>{
        console.log(params);
        
        fetch('http://localhost:4000/post/')
    }, []);
    return(
        <div>Post Page</div>
    );
}