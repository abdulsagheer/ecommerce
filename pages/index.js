import React from 'react'
import product from '../sanity_ecommerce/schemas/product';

const Home = () => {
  return (
    <>
      HeroBanner
      <div className='products-heading'>
        <h2>Beset Selling Products</h2>
        <p>Speakers of many variations</p>
        <div>{['Product1', 'Product2', 'Product3'].map((product) => product)}</div>
      </div>
      Footer
    </>
  );
}

export default Home