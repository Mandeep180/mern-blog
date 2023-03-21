import {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {UserContext} from "../UserContext";
import {Link} from 'react-router-dom';

export default function PostPage() {
  const [postInfo,setPostInfo] = useState(null);
  const {userInfo} = useContext(UserContext);
  const {id} = useParams();
  useEffect(() => {
    fetch(`http://localhost:4000/post/${id}`)
      .then(response => {
        response.json().then(postInfo => {
          setPostInfo(postInfo);
        });
      });
  }, []);

  if(!postInfo) return '';
return(
    <div className="post-page">
        <div className="image">
        <img src={`http://localhost:4000/${postInfo.cover}`} alt=""/>

        </div>
        <h1>{postInfo.title}</h1>
    </div>
)
  
}