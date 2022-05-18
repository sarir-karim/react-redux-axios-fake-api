import React from "react";
import { useSelector } from "react-redux";

const ProductComponent = () => {
    const products = useSelector((state)=> state.allProducts.products);
    const renderList = products.map((product)=>{
        const {id, title, category, thumbnailUrl,url} = product;
        return(
            <div className="four wide column" key={id}>
                <div className="ui link cards">
                    <div className="card">
                        <div className="image">
                            <img src={thumbnailUrl} alt={title}/>
                        </div>
                        <div className="content">
                            <div className="header">{title}</div>
                            <div className="meta price">{thumbnailUrl}</div>
                            <div className="meta">{category}</div>
                            <div className="meta">{category}</div>
                        </div>
                    </div>
                </div>
            </div>
        )
    })

  return (
  
  <>
  {renderList}</>
  )
};

export default ProductComponent
