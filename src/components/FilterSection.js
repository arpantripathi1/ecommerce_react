import React from 'react';
import styled from 'styled-components';
import { useFilterContext } from '../context/FilterContext';

const FilterSection = () => { 
  const {
    filters: { text },
    updateFilterValue,
  } = useFilterContext();

  return (
    <Wrapper>
      <div className='filter-search'>
        <form onSubmit={(event)=>event.preventDefault()}>
          <input type="text" name='text' value={text} onChange={updateFilterValue}/>
        </form>
      </div>
    </Wrapper>
  )
}


const Wrapper = styled.section`
  padding: 5rem 0;
  display:flex;
  flex-direction: column;
  gap: 3rem;

  h3 {
    padding :2rem 0;
    font-size : bold;
  }

  .filter-search {
    input{
      padding: 0.6rem 1rem;
      width: 80%;
    }
  }
`;
export default FilterSection