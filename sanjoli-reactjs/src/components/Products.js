import axios from 'axios'
import { useEffect, useState } from 'react'
import { SuitHeart } from 'react-bootstrap-icons'


export default function Products(){
    const [products , setProducts] = useState([])

    useEffect(()=>{
        axios.get('https://server-dot-sanjoli-sarees-testenvironment.el.r.appspot.com/getproduct/')
        .then((res)=>{
            setProducts(res.data.data)
            // console.log(res.data.data);
        }).catch((err)=>{
            alert(err)
        });
    },[])

    // Latest product slider
    const productContainers = [...document.querySelectorAll('.product-container')];
    const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
    const preBtn = [...document.querySelectorAll('.pre-btn')];

    productContainers.forEach((item, i) => {
        let containerDimensions = item.getBoundingClientRect();
        let containerWidth = containerDimensions.width;

        nxtBtn[i].addEventListener('click', () => {
            item.scrollLeft += containerWidth;
        })

        preBtn[i].addEventListener('click', () => {
            item.scrollLeft -= containerWidth;
        })
    });
    
    

    return(
        <div className="product-container">
            {
                products.map(({ productCode, productImage, productName, price, discountedPrice } , i)=>{
                    return(
                        <>
                        <div className="product-card">
                            <div className="product-image">
                                <a href="#">
                                    <img src={productImage[0]} alt="Latest Product" />
                                </a>
                                <button className="card-btn">
                                    <SuitHeart productId={productCode} />
                                </button>
                                <a href='#' className='quick-view'>Quick view</a>
                            </div>
                            <div className="product-info">
                                <h4 className="product-brand">{productName}</h4>
                                <span className="price">Rs. {price}</span>
                                <span className="discountedPrice text-green">Rs. {discountedPrice}</span>
                                <br />
                                <button className="">Add to cart</button>
                            </div>
                        </div>
                        </>
                    )
                })
            }
        </div>
    )
}