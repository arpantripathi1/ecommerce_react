// create a context
// provider
// consumer => usecontext hook

import React,{createContext, useContext, useEffect , useReducer} from "react";
import axios from "axios" ;
import reducer from "../reducer/ProductReducer";

//create a context
const AppContext = createContext();

const API= "https://api.pujakaitem.com/api/products";
// no "stock" key on this API , so every stocks will be by default available 


const initialState = {
    isLoading: false ,
    isError : false ,
    products : [],
    featureProducts:[],

    // for single product
    isSingleLoading : false ,
    singleProduct : {} ,
};


//provider
const AppProvider = ( { children } ) => {
    // manage and store fetched data(from api) in state 
    const [state , dispatch] = useReducer(reducer , initialState)
    // api call for 3 images in home page from api data
    const getProducts = async (url) => {
      dispatch({type:"SET_LOADING"})
      try{
        const res = await axios.get(url);
        console.log("product context res is ",res);
        const products = await res.data;
        console.log("product context product is ",products);
        dispatch({ type: "SET_API_DATA", payload: products }) ;
      } 
      catch(error){
        dispatch({type:"API_ERROR"});
      }
    };
    

    // my second time API call for single product 
    const getSingleProduct = async (url) => {

        dispatch({type:"SET_SINGLE_LOADING"})
        try{
            const res = await axios.get(url) ;
            console.log("res is "+ res)
            const singleProduct = await res.data ;
            console.log("singleProduct is" + singleProduct)
            dispatch( { type: "SET_SINGLE_PRODUCT", payload: singleProduct } ) ;
        }
        catch( error ) {
           dispatch({ type: "API_SINGLE_ERROR" });
        }
    };


    useEffect(() => {
        getProducts(API);
    },[])

    return <AppContext.Provider value={ { ...state , getSingleProduct} }> 
        { children }
    </AppContext.Provider>
};


// custom hook behalf of useContext.....about page is consumer
 const useProductContext = () => {
    console.log("custom hook use context return value is",useContext(AppContext));
    return useContext(AppContext);
};

export { AppProvider , AppContext , useProductContext};
