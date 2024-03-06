import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/home.css"
import ProductCard from '../components/productCard'
import cover from "../assets/cover.jpg"

const Home = () => {
  return (
    <div className='home'>
      <section>
       {/* <img src={cover}></img>*/}
      </section>
      <h1>Latest Product
      <Link to={"/search"} className='findmore'>More
      </Link>
      </h1>
      <main>
        {/*<ProductCard productId="abcdef" naam="macbook" price={50000} stock={20}></ProductCard>*/}
       <ProductCard></ProductCard>
      </main>
    </div>
  )
}

export default Home