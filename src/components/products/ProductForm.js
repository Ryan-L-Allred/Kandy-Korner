import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ProductForm = () => {

    /*
        TODO: Add the correct default properties to the
        initial state object
    */
        const [product, update] = useState({

        })
        /*
            TODO: Use the useNavigation() hook so you can redirect
            the user to the ticket list
        */
    
        const localHoneyUser = localStorage.getItem("honey_user")
        const honeyUserObject = JSON.parse(localHoneyUser)
    
        const handleSaveButtonClick = (event) => {
            event.preventDefault()
    
            // TODO: Create the object to be saved to the API
    
    
            // TODO: Perform the fetch() to POST the object to the API
        }
    
        return (
            <form className="productForm">
                <h2 className="productForm__title">New Product</h2>
                <fieldset>
                    <div className="form-group">
                        <label htmlFor="description">Product Description:</label>
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Brief description of problem"
                            value={product.name}
                            //onChange={} 
                            />
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Brief description of problem"
                            value={product.type}
                            //onChange={} 
                            />
                        <input
                            required autoFocus
                            type="text"
                            className="form-control"
                            placeholder="Brief description of problem"
                            value={product.price}
                            //onChange={} 
                            />
                    </div>
                </fieldset>
                <button className="btn btn-primary">
                    Submit product
                </button>
            </form>
        )
    }
