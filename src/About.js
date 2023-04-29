import React from 'react'
import HeroSection from './components/HeroSection'
// import { AppContext } from './context/ProductContext';
// import { useProductContext } from './context/ProductContext';

const About = () => {
  // const MyName = useContext(AppContext);
  // const { myName } = useProductContext();  // custom hook as a consumer of context api
  const data = {
    name: "shopify store",
  };

  return (
    <>      
      <HeroSection myData={data}/>
    </>
  );
};

export default About;