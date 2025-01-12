// import React from 'react';
// import { useLoaderData } from 'react-router-dom';

// const LoaderSingleCardDeteails = () => {

//     const post = useLoaderData()
//     // console.log(post)
//     const [id,name, email, address, website] = post;
//     return (
//       <div>
            
           
//           <div className="card-body">
//             <h2 className="card-title">name:{name} id:{id} </h2>
//             <p>{address.city} </p>
//           </div>
     
//       </div>
//     );
// };

// export default LoaderSingleCardDeteails;


// from chatgpt
import React from "react";
import { useLoaderData } from "react-router-dom";

const LoaderSingleCardDeteails = () => {
  // Fetching single user data
  const post = useLoaderData();

  // Destructure properties from the post object
  const { id, name, email, address, website } = post;

  return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>ID: {id}</p>
        <p>Email: {email}</p>
        <p>City: {address?.city}</p>
        <p>Website: {website}</p>
      </div>
    </div>
  );
};

export default LoaderSingleCardDeteails;
