import React, { useState } from 'react'
import ProductCard from '../components/productCard'
import "../styles/search.css"

const Search = () => {

  const [search, setSearch] = useState();
  const [sort, setSort] = useState();
  const [maxPrice, setmaxPrice] = useState(100000);
  const [category, setCategory] = useState();
  const [page, setPage] = useState(1);

  const addToCardHandler = () => {};

  const isNextPage = page < 4
  const isPrevPage = page > 1
  return (
    <div className='product-search-page'>
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">None</option>
            <option value="asc">Price(Low to High)</option>
            <option value="dsc">Price(High to Low)</option>
          </select>
        </div>

        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input value={maxPrice} onChange={(e) => setmaxPrice(Number(e.target.value))} min={100} max={100000} type='range'>
          </input>
        </div>

        <div>
          <h4>Category</h4>
          <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All</option>
            <option value="">sample1</option>
            <option value="">sample2</option>
          </select>
        </div>
      </aside>

      <main>
        <h1>Products</h1>
        <input type='text' placeholder='Search by name...' value={search} onChange={(e) => setSearch(e.target.value)}></input>

        <div className='search-product-list'>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </div>

        <article>
          <button onClick={() => setPage((prev) => prev-1)}
          disabled={!isPrevPage}>Prev</button>
          <span>{page} of {4}</span>
          <button onClick={() => setPage((prev) => prev+1)}
          disabled={!isNextPage}>Next</button>
        </article>
      </main>
    </div>
  )
}

export default Search