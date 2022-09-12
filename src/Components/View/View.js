import React,{useEffect,useContext,useState} from 'react';
import { firebaseappContext } from '../../store/firebaseContext';
import { PostContext } from '../../store/PostContext';
import './View.css';


function View() {
  const[userDetails,setUserDetails]=useState()
  const{postDetails}=useContext(PostContext)
  const{firebase}=useContext(firebaseappContext)

  useEffect(()=>{
    const{userId}=postDetails
    firebase.firestore().collection('users').where('id','==',userId).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data()) 
        
      });
    })
  })

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img src={postDetails.url} alt="" />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>&#x20B9; {postDetails.price}</p>
          <p>{postDetails.name}</p>
          <p>{postDetails.category}</p>
          <p>Model : {postDetails.model}</p>
          <p>kilometer Ran : {postDetails.kilometer}</p>
          <span>{postDetails.createdAt}</span>
        </div>

       {userDetails && <div className="contactDetails">
          <p>Seller details</p>
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
        </div>} 
      </div> 
    </div>
  );
}
export default View;
