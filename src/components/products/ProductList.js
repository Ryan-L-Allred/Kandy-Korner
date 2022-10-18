import { useEffect, useState } from "react"


export const ProductList = () => {
    const [products, setProducts] = useState([])
    const [filteredProducts, setFiltered] = useState([])
    const [toggle, setToggle] = useState(false)

    

    useEffect(
        () => {
            if (toggle) {
                const topPricedProducts = products.filter(product => product.price >= 2)
                setFiltered(topPricedProducts)
            } else {
                setFiltered(products)
            }
        },
        [toggle, products]
    )

    useEffect(
        () => {
            fetch(`http://localhost:8088/products?_sort=name&_expand=type`)
                .then(response => response.json())
                .then((productArray) => {
                    setProducts(productArray)
                })
        },
        []
    )


    return <>
        {
            toggle ? <button
                onClick={
                    () => {
                        setToggle(false)
                    }
                }
            >Show All</button>
                : <button
                    onClick={
                        () => {
                            setToggle(true)
                        }
                    }
                >Top Priced Products</button>
        }

        <h2>Our Products</h2>
        <article className="products">
            {
                filteredProducts.map(
                    (product) => {
                        return <section key={product.id} className="product">
                            <ul>
                                <li>{product.name}: {product.price}</li>
                                <li>Candy Type: {product.type.type}</li>
                            </ul>
                        </section>
                    }
                )
            }
        </article>
    </>
}