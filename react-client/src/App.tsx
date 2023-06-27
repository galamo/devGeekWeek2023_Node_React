import './App.css'
import { useState, useEffect } from "react"
import Header from "./components/ui/header";
import axios from "axios"
import Spinner from "./components/ui/spinner";
import Product from "./components/ui/product"

function App() {
    console.log("App is rendered")
    const [currentColor, setCurrentColor] = useState("red")
    const [currentProducts, setProducts] = useState([])
    const [isProductsLoading, setIsProductsLoading] = useState(false)
    const props = { text: "products", color: currentColor }

    useEffect(() => {
        async function getProducts() {
            try {
                setIsProductsLoading(true)
                const result = await axios.get("http://localhost:3500/products?apiKey=1234")
                const { data } = result as any;
                console.log(data.products)
                setProducts(data.products)

            } catch (error) {

            }
            finally {
                setIsProductsLoading(false)
            }
        }
        getProducts()
    }, [])
    function handler(e) {
        setCurrentColor(e.target.value)
    }

    return (
        <>
            <div>
                {/* {props.color === 'green' ? <span>yes !!</span> : <span> no</span>} */}
                change color <input onChange={handler} type='text' />
                <Header {...props} />
                {isProductsLoading ? <Spinner /> : <h1>{currentProducts.length}</h1>}
                <ProductList products={currentProducts} />
            </div>
        </>
    )

}

function ProductList(props: { products: Array<any> }) {
    return <div>
        <h2> list </h2>
        {
            props.products.map(p => {
                return <Product title={p.title} price={p.price} image={p.images[0]} />
            })
        }
    </div>
}


export default App
