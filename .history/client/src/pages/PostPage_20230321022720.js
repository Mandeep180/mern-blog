//import {useContext,useEffect,useState} from "react";
import { useParams } from "react-router-dom";import {UserContext} from "../UserContext";

export default function PostPage() {
    // const [postInfo,setPostInfo] = useState(null);
    // const {userInfo} = useContext(UserContext);
     const {id} = useParams();
       //const params = useParams();
       
    // useEffect(() => {
        console.log(id);
//    fetch('http://localhost:4000/post/${id}')
//          .then(response => {
//           response.json().then(postInfo => {
//              setPostInfo(postInfo);
//            });
//         });
//      }, []);
    return(
        <div>Post Page</div>
    );
}