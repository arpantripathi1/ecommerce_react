import React from 'react';
import {FaStar , FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar} from "react-icons/ai";
import styled from 'styled-components';

const Stars = ({stars , reviews}) => {

    const ratingStar = Array.from({length:5} , (elem , index) =>{
        let halfNumber = index + 0.5
        //this is not the return of Stars component,this is return of callback function of Array.from()
        return <span key={index}>
            {
              stars >= index + 1 ? <FaStar className="icon" /> : stars >= halfNumber ? <FaStarHalfAlt className="icon" /> : <AiOutlineStar className="icon" />
            }
        </span>
        
    });

    // this is the return of Starts component
    return <Wrapper>
      <div className='icon-style'>
        {ratingStar}
        <p> {reviews} customer reviews </p>
      </div>
    </Wrapper>

}


const Wrapper = styled.section`
  .icon-style {
    display: flex;
    gap: 0.2rem;
    align-items: center;
    justify-content: flex-start;
    .icon {
      font-size: 2rem;
      color: orange;
    }
    .empty-icon {
      font-size: 2.6rem;
    }
    p {
      margin: 0;
      padding-left: 1.2rem;
    }
  }
`;


export default Stars