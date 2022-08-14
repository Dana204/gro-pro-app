import React from 'react'
import { useParams } from 'react-router'
import PageTitle from '../components/Layout/PageTitle'
import { products } from '../data/data'
import CardList from '../components/Cards/CardList'
import ProductCard from '../components/Cards/ProductCard'
import Sidebar from '../components/Sidebar/Sidebar'

const Category = () => {
    const {categoryName} = useParams()
    return (
        <section className='category'>
            <div className='container'>
            <div className='category__main'>

                <CardList data={products} Component={ProductCard}/>
            </div>
            <Sidebar />
            {/* <CardList>
                {
                    products.map(product => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            // category={pr}
                            price={product.price}
                            img={product.img}
                            rating={product.rating}
                            description={product.description}
                        
                        />
                    ))
                }
            </CardList> */}
            </div>
        </section>
    )
}

export default Category