import { Link } from "react-router-dom";
import products from '../data'

const Products = () => {
  return (
   <section className="sections"> 
   <h2>products</h2>
   <div className="products">
    {products.map((products) => {
      return (
        <article key={products.id}>
          <h5>{products.name}</h5>
          <Link to={`/products/${products.id}`}>more info</Link>
          </article>
      )
    })}
   </div>
   </section>
  )
}

export default Products
