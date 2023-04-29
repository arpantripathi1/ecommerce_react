import {useEffect} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useProductContext } from "./context/ProductContext";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import {Container}  from "../src/styles/Container";
import FormatPrice from "./helpers/FormatPrice"
import { TbReplace, TbTruckDelivery } from "react-icons/tb"
import {MdSecurity } from "react-icons/md";
import Stars from "./components/Stars";
import { useLocation } from "react-router-dom";
import AddToCart from "./components/AddToCart";

// const API = "https://api.pujakaitem.com/api/products";
// const API = "https://fakestoreapi.com/products";

const SingleProduct = ({item}) => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  // console.log("single perodduct iis", singleProduct);
  // const {data} = useParams() ;
  const location = useLocation();
  console.log(location.state);
  console.log("image transferred is",location.state.image);
    // console.log("data is",data,useParams());
  // console.log("singleProduct value is " + singleProduct);
  // const { id } = useParams();
  // const {id :alias , image , name ,company ,price ,description , category , stock , reviews ,stars} = singleProduct;

  // console.log("destructured value from single produc is " + image);
  // useEffect(() => {
  //   getSingleProduct(`${API}?id=${id}`);
  // }, []);

  if (isSingleLoading) {
    return <div className="page_loading"> Loading.....</div>;
  }

  return (
    <Wrapper>
      <PageNavigation title={location.state.name} />

      <Container className="container">
        <div className="grid grid-two-column center">
          {/* product image */}
          <div className="product-image">
            <img src={location.state.image} alt="product-img" />
          </div>

          <div className="product-data">
            <div>{location.state.name}</div>
            <Stars
              stars={location.state.stars}
              reviews={location.state.reviews}
            />
            <p className="product-data-price">
              MRP:
              <del>
                <FormatPrice price={location.state.price + 250000} />
              </del>
            </p>
            <p className="product-data-price product-data-real-price">
              Deal of the day: <FormatPrice price={location.state.price} />
            </p>
            <p> {location.state.description}</p>
            <div className="product-data-warranty">
              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Free Delivery</p>
              </div>

              <div className="product-warranty-data">
                <TbReplace className="warranty-icon" />
                <p>30 Days Replacement</p>
              </div>

              <div className="product-warranty-data">
                <TbTruckDelivery className="warranty-icon" />
                <p>Thapa Delivered</p>
              </div>

              <div className="product-warranty-data">
                <MdSecurity className="warranty-icon" />
                <p>2 Year Warranty</p>
              </div>
            </div>

            <div className="product-data-info">
              <p>
                Available:
                <span>
                  {/* {location.state.stock > 0 ? "In Stock" : "Not Available"} */}
                  In stock
                </span>
              </p>
              <p>
                ID: <span> {location.state.id}</span>
              </p>
              <p>
                Brand: <span> {location.state.company} </span>
              </p>
            </div>
            <hr />
            {/* {location.state.stock > 0 && <AddToCart singleProd={singleProduct} />} */}
            <AddToCart singleProd={location.state} />
          </div>
        </div>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .container {
    // padding: 9rem 0;

    margin : 10px;
  }
  
  .center{
    display: flex;
    justify-content: center;
  }

  .product-image {
    display: flex;
    align-items: center;
  }

  img {
     max-width: 400px ;
    height:auto ;
  }

  .product-data {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 2rem;

    .product-data-warranty {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ccc;
      margin-bottom: 1rem;

      .product-warranty-data {
        text-align: center;

        .warranty-icon {
          background-color: rgba(220, 220, 220, 0.5);
          border-radius: 50%;
          width: 4rem;
          height: 4rem;
          padding: 0.6rem;
        }
        p {
          font-size: 1.4rem;
          padding-top: 0.4rem;
        }
      }
    }

    .product-data-price {
      font-weight: bold;
    }
    .product-data-real-price {
      color: ${({ theme }) => theme.colors.btn};
    }
    .product-data-info {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      font-size: 1.8rem;

      span {
        font-weight: bold;
      }
    }

    hr {
      max-width: 100%;
      width: 90%;
      /* height: 0.2rem; */
      border: 0.1rem solid #000;
      color: red;
    }
  }

  .product-images {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding: 0 2.4rem;
  }
`;

export default SingleProduct;
