import React, { useState, useEffect } from "react";
import './App.css'
import Register from './components/Register.jsx';
import Login from './components/Login.jsx';


const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showFormBox, setShowFormBox] = useState(false);
  const [isLogin, setIsLogin] = useState(true);


  const toggleForm = () => {
    setIsLogin(!isLogin);
  };



  const toggleFormBox = () => {
    setShowFormBox(!showFormBox);
  };

 
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((json) => {
        setData(json.products);
        setLoading(false);
      })
      .catch((err) => console.log("Error", err));
  }, []);




  if (loading) {
    return <h2 class="loader">Please Wait, User Verifying....</h2>;
  }

  return (

    //fragments
    <>
     <nav className="navbar">
        <div className="logo">
           <a href="./">APNA STORE.</a>
        </div>

        <div className="icons">
	   <i class="fa-solid fa-user" onClick={toggleFormBox}></i>
	   <i class="fa-solid fa-heart"></i>
	   <i class="fa-solid fa-cart-shopping"></i>
        </div>
     </nav>



     <div className="intro">
         <h1>EVERYTHING YOU WANT AT ONE PLACE</h1>
     </div>



     {showFormBox && (
        <div className="form-box">
          {isLogin ? (
            <Login toggleForm={toggleForm} closeFormBox={toggleFormBox} />
          ) : (
            <Register toggleForm={toggleForm} closeFormBox={toggleFormBox} />
          )}
        </div>
      )}  


      <div>
        {data.map((product) => (
          <div key={product.id} className="card">
	    <div className="img-frame">
              <img
               src={product.thumbnail}
               alt={product.title}
	       />
	    </div>
            <div className="card-body">
              <h5 className="card-title">{product.title}</h5>
              <p className="card-text">{product.description}</p>
               <div class="order">
	          <p className="amount"> Amount : ${product.price}</p>
                  <div className="btn-group">
	             <button className="btn"> Buy Now </button>
		     <button className="cart-btn"><i class="fa-solid fa-cart-plus"></i></button>
		  </div>
               </div>
            </div>
          </div>
        ))}
      </div>
       
   
       <footer>
           <p>Made with &hearts; by <a href="https://www.linkedin.com/in/gourangarout?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Aaryan</a></p>
       </footer>

    </>
  );
};

export default App;
