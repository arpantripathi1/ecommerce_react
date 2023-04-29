
import styled from "styled-components";
import FilterSection from "./components/FilterSection";
import Sort from "./components/Sort";
import ProductList from "./components/ProductList";
import { useFilterContext } from "./context/FilterContext";



// thapa technical method : 2nd Product component
const Products = () => {
  return <Wrapper>
    <div className="container grid grid-filter-column">
      <div>
        <FilterSection />
      </div>
      <section className="product-view--sort">
        <div className="sort-filter">
          <Sort />
        </div>
        <div className="main-product">
          <ProductList />
        </div>
      </section>
    </div>
  </Wrapper>

}

//styled componnet for 2nd PRoduct component
const Wrapper = styled.section`
  .grid-filter-column {
    grid-template-columns: 0.2fr 1fr;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid-filter-column {
      grid-template-columns: 1fr;
    }
  }

`;





// import React, { useEffect, useState } from "react";
// import styled from "styled-components";
// import { getProductList } from "./services/ProductService";
// import ProductCard from "./components/ProductCard";
// import { useNavigate } from "react-router-dom";


//gaurav helped me to fetch products items : 1st Product componenet

// const Products = () => {
//   const navigate = useNavigate();
//   const [productList, setProductList] = useState([]);

//   const goToSingleProduct = (product) => {
//     console.log("selected productp", product);
//     if (product) {
//       //statemnt
//       navigate(`/singleproduct/${product.id}`, { state: product });
//     }
//   };
//   useEffect(() => {
//     getProductList().then((res) => {
//       if (res) {
//         console.log("res is ", res);
//         setProductList(res.data);
//       }
//     });
//   }, []);

//   return (
//     <Wrapper>
//       <div className="container">
//         <div className="grid-filter-column">
//           {/* <div className="grid grid-three-column">
//           </div> */}
//             <ProductCard items={productList} selectItem={goToSingleProduct} />
//         </div>
//       </div>
//     </Wrapper>
//   );
// };


// styled component for 1st Product component(upper piece of code)

// const Wrapper = styled.section`
//   .grid-filter-column {
//     grid-template-columns: 0.2fr 1fr;
//   }

//   padding: 9rem 0;
//   background-color: ${({ theme }) => theme.colors.bg};
//   .container {
//     max-width: 120rem;
//   }
//   figure {
//     width: auto;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     position: relative;
//     overflow: hidden;
//     transition: all 0.5s linear;
//     &::after {
//       content: "";
//       position: absolute;
//       top: 0;
//       left: 0;
//       width: 0%;
//       height: 100%;
//       background-color: rgba(0, 0, 0, 0.5);
//       transition: all 0.2s linear;
//       cursor: pointer;
//     }
//     &:hover::after {
//       width: 100%;
//     }
//     &:hover img {
//       transform: scale(1.2);
//     }
//     img {
//       max-width: 90%;
//       margin-top: 1.5rem;
//       height: 20rem;
//       transition: all 0.2s linear;
//     }
//     .caption {
//       position: absolute;
//       top: 15%;
//       right: 10%;
//       text-transform: uppercase;
//       background-color: ${({ theme }) => theme.colors.bg};
//       color: ${({ theme }) => theme.colors.helper};
//       padding: 0.8rem 2rem;
//       font-size: 1.2rem;
//       border-radius: 2rem;
//     }
//   }
//   .card {
//     background-color: #fff;
//     border-radius: 1rem;
//     .card-data {
//       padding: 0 2rem;
//     }
//     .card-data-flex {
//       margin: 2rem 0;
//       display: flex;
//       justify-content: space-between;
//       align-items: center;
//     }
//     h3 {
//       color: ${({ theme }) => theme.colors.text};
//       text-transform: capitalize;
//     }
//     .card-data--price {
//       color: ${({ theme }) => theme.colors.helper};
//     }
//     .btn {
//       margin: 2rem auto;
//       background-color: rgb(0 0 0 / 0%);
//       border: 0.1rem solid rgb(98 84 243);
//       display: flex;
//       justify-content: center;
//       align-items: cente\r;
//       &:hover {
//         background-color: rgb(98 84 243);
//       }
//       &:hover a {
//         color: #fff;
//       }
//       a {
//         color: rgb(98 84 243);
//         font-size: 1.4rem;
//       }
//     }
//   }

//   // @media (max-width: ${({ theme }) => theme.media.tab}) {
//   //   // .container {
//   //   //   max-width: 130rem;
//   //   //   padding: 0 3.2rem;
//   //   // }

//   //   .grid-filter-column {
//   //     grid-template-columns: 0.2fr 1fr;
//   //   }
//   // }

//   @media (max-width: ${({ theme }) => theme.media.mobile}) {
//     .grid-filter-column {
//       grid-template-columns: 1fr;
//     }
//   }
// `;

export default Products;
