import {useEffect} from "react";
import { useParams } from "react-router-dom";
export default function PostPage() {
    useEffect(()=>{
        console.log(params);
        const params = useParams();
        
        fetch('http://localhost:4000/post/')
    }, []);
    return(
        <div>Post Page</div>
    );
}