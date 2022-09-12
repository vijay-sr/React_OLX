import React ,{useEffect,useContext,useState}from 'react';
import { PostContext } from '../../store/PostContext';
import Heart from '../../assets/Heart';
import { firebaseappContext } from '../../store/firebaseContext';
import './Post.css';
import {useHistory} from 'react-router-dom'

function Posts() {

  const {firebase}=useContext(firebaseappContext)
  const [products,setProducts]=useState([]) 
  const{setPostDetails}=useContext(PostContext)
  const history=useHistory()


  useEffect(()=>{
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allpost=snapshot.docs.map((products)=>{
        return{
         ...products.data(),
         id:products.id
        } 
      })
      setProducts(allpost)

    })
  }) 

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
{products.map(products=>{
  
  return(
          <div className="card" onClick={()=>{
            setPostDetails(products)
            history.push('/view')

          }}>
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src={products.url} alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9;{products.price}</p>
              <span className="kilometer">{products.category}</span>
              <p className="name">{products.name}</p>
                      </div>
            <div className="date">
              <span>{products.createdAT}</span>
            </div>
          </div>)
})
}

        </div>
      </div>
      <div className="recommendations">
        <div className="heading">
          <span>Fresh recommendations</span>
        </div>
        <div className="cards">
          <div className="card">
            <div className="favorite">
              <Heart></Heart>
            </div>
            <div className="image">
              <img src="../../../Images/R15V3.jpg" alt="" />
            </div>
            <div className="content">
              <p className="rate">&#x20B9; 250000</p>
              <span className="kilometer">Two Wheeler</span>
              <p className="name"> YAMAHA R15V3</p>
            </div>
            <div className="date">
              <span>1/09/2022</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Posts;
