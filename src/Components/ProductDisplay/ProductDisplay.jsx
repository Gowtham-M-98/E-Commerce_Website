import React, { useContext, useState } from 'react'
import './ProductDisplay.css'
import star from '../Assets/Images/star_icon.png'
import star_dull from '../Assets/Images/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext);
    const [size,setSize] = useState(" ")
    console.log(setSize);
    

  return (
    <div className='productdisplay'>
        <div className="productdisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
                <img src={product.image} alt="" />
            </div>
            <div className="productdisplay-img">
                <img className="productdisplay-main-img" src={product.image} alt="" />
            </div>
        </div>
        <div className="productdisplay-right">
            <h1>{product.name}</h1>
            <div className="productdisplay-right-stars">
                {[...Array(4)].map((i) => <img key={i} src={star} alt="Star" />)}
                <img src={star_dull} alt="StarDull" />
                <p>(122)</p>
            </div>
            <div className="productdisplay-right-prices">
                <div className="productdisplay-right-price-old">${product.old_price}</div>
                <div className="productdisplay-right-price-new">${product.new_price}</div>
            </div>
            <div className="productdisplay-right-desp">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos similique ducimus neque, voluptates quisquam, optio quam enim itaque quas esse incidunt nesciunt labore nostrum architecto suscipit voluptas est quod ea.
            </div>
            <div className="productdisplay-right-size">
                <h1>Select Size</h1>
                <div className="productdisplay-right-sizes">

                {["S", "M", "L", "XL", "XXL"].map((s) => (
                            <button key={s} className={`size ${size === s ? "selected" : ""}`} onClick={() => setSize(s)}>{s}</button>
                        ))}

                    {/* <button className="size" onClick={()=>{setSize("S")}}>S {size === "S"?<p/>:<></>}</button>
                    <button className="size" onClick={()=>{setSize("M")}}>M {size === "M"?<p/>:<></>}</button>
                    <button className="size" onClick={()=>{setSize("L")}}>L {size === "L"?<p/>:<></>}</button>
                    <button className="size" onClick={()=>{setSize("XL")}}>XL {size === "XL"?<p/>:<></>}</button>
                    <button className="size" onClick={()=>{setSize("XXL")}}>XXL {size === "XXL"?<p/>:<></>}</button> */}
                </div>
            </div>
            <button className="addToCart" onClick={()=>{addToCart(product.id, size)}}>ADD TO CART</button>
            <p className="productdisplay-right-category4"><span>Category:</span> {product.category}, T-Shirt</p>
            <p className="productdisplay-right-category4"><span>Tags:</span>Modern, Latest</p>
        </div>
    </div>
  )
}

export default ProductDisplay











 {/* <div><input type="button" value="S" onClick={()=>{setSize("S")}}/></div>
                    <div><input type="button" value="M" onClick={()=>{setSize("M")}}/></div>
                    <div><input type="button" value="L" onClick={()=>{setSize("L")}}/></div>
                    <div><input type="button" value="XL" onClick={()=>{setSize("XL")}}/></div>
                    <div><input type="button" value="XXL" onClick={()=>{setSize("XXL")}}/></div> */}

 {/* <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" /> */}