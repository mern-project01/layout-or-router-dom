import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Loader = () => {
    const posts = useLoaderData();
    console.log(posts)
    return (
        <div>
            <h1  className='text-3xl text-center'>it's from loader</h1>
        {posts.map((post) => (
          <div className="card-body">
            <h2 className="card-title">{post.name} </h2>
            <p>{post.address.city} </p>
          </div>
        ))}
      </div>
    );
};

export default Loader;