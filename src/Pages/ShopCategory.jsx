import React, { useContext } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown from '../Components/Assets/Images/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
    
const {all_product} = useContext(ShopContext);

    const filteredProducts = all_product.filter((item) => item.category === props.category);
   

    return (
        <div className='shop-category'>
            <img className="shopcategory-banner" src={props.banner} alt="Banner" />

            <div className="shopcategory-indexSort">
                <p>
                    <span>Showing {Math.min(12, filteredProducts.length)}</span> out of {filteredProducts.length} products
                </p>
                <div className="shopcategory-sort">
                    Sort by <img src={dropdown} alt="Dropdown Icon" />
                </div>
            </div>

            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                    if(props.category===item.category){
                        return  <Item 
                        key={i} 
                        id={item.id} 
                        name={item.name} 
                        image={item.image} 
                        new_price={item.new_price} 
                        old_price={item.old_price} />
                    }
                    else{
                        return null;
                    }
                })}
            </div>

            <div className="shopcategory-loadmore">
                Explore more
            </div>
        </div>
    );
};

export default ShopCategory;
