import React from 'react'
import {
  ProductsContainer, 
  ProductsHeading, 
  ProductWrapper, 
  ProductCard, 
  ProductImg, 
  ProductDesc, 
  ProductInfo, 
  ProductTitle, 
  ProductPrice, 
  ProductButton
} from './ProductsElements'
const Products = ({heading, data}) => {
    return (
        <ProductsContainer>
            <ProductsHeading>{heading}</ProductsHeading>
            <ProductWrapper>
                {data.map((product, index) => {
                    return (
                      <ProductCard keys={index}>
                        <ProductImg src={product.img} alt={product.alt} />
                        <ProductInfo>
                          <ProductTitle>{product.name}</ProductTitle>
                          <ProductDesc>{product.desc}</ProductDesc>
                          <ProductPrice>{product.price}</ProductPrice>
                          <ProductButton>{product.button}</ProductButton>
                        </ProductInfo>
                      </ProductCard>
                    );
                })}
            </ProductWrapper>
        </ProductsContainer>
    )
}


export default Products
