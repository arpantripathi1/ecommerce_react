import React from "react";
import { useProductContext } from "../context/ProductContext";
// import FormatPrice from "../helpers/FormatPrice";
import styled from "styled-components";
import ProductCard from "./ProductCard";
// import SingleProduct from "../SingleProduct" ;
import { useNavigate } from "react-router";


const FeatureProducts = () => {
  const { isLoading, featureProducts } = useProductContext();
  const navigate = useNavigate();
  // console.log(isLoading);
  // console.log(featureProducts);

  const goToSingleProduct = (product) => {
    console.log("selected product",product)
    if (product) {
      //statemnt
      navigate(`/singleproduct/${product.id}`, { state: product });
    }
  }
    
  if (isLoading) {
    return <div>......Loading</div>;
  }

  return (
    <Wrapper className="section">
      <div className="container">
        <div className="intro-data">Check Now</div>
        <div className="common-heading">Our Feature Service</div>
        {/* <div className="grid grid-three-column">
          {featureProducts.map(
            (currElem) => (
              <div
                key={currElem.id}
                className="card"
                onClick={() => goToSingleProduct(currElem.id)}
              >
                <figure>
                  <img src={currElem.image} alt={currElem.name} />
                  <figcaption className="caption">
                    {currElem.category}
                  </figcaption>
                </figure>

                <div className="card-data">
                  <div className="card-data-flex">
                    <h3>{currElem.name}</h3>
                    <p className="card-data--price">
                      {<FormatPrice price={currElem.price} />}
                    </p>
                  </div>
                </div>
              </div>
            )
            // return <Product key={currElem.id} {...currElem} />;
          )}
        </div> */}
        <div className="grid grid-three-column">
          <ProductCard items={featureProducts} selectItem={goToSingleProduct} />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .container {
    max-width: 120rem;
  }
  figure {
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    transition: all 0.5s linear;
    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 0%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      transition: all 0.2s linear;
      cursor: pointer;
    }
    &:hover::after {
      width: 100%;
    }
    &:hover img {
      transform: scale(1.2);
    }
    img {
      max-width: 90%;
      margin-top: 1.5rem;
      height: 20rem;
      transition: all 0.2s linear;
    }
    .caption {
      position: absolute;
      top: 15%;
      right: 10%;
      text-transform: uppercase;
      background-color: ${({ theme }) => theme.colors.bg};
      color: ${({ theme }) => theme.colors.helper};
      padding: 0.8rem 2rem;
      font-size: 1.2rem;
      border-radius: 2rem;
    }
  }
  .card {
    background-color: #fff;
    border-radius: 1rem;
    .card-data {
      padding: 0 2rem;
    }
    .card-data-flex {
      margin: 2rem 0;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    h3 {
      color: ${({ theme }) => theme.colors.text};
      text-transform: capitalize;
    }
    .card-data--price {
      color: ${({ theme }) => theme.colors.helper};
    }
    .btn {
      margin: 2rem auto;
      background-color: rgb(0 0 0 / 0%);
      border: 0.1rem solid rgb(98 84 243);
      display: flex;
      justify-content: center;
      align-items: cente\r;
      &:hover {
        background-color: rgb(98 84 243);
      }
      &:hover a {
        color: #fff;
      }
      a {
        color: rgb(98 84 243);
        font-size: 1.4rem;
      }
    }
  }
`;

export default FeatureProducts;
