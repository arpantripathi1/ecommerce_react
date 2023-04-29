import { createContext, useContext , useEffect, useReducer } from "react";
import { useProductContext } from "./ProductContext";  // bcs productContext has all the data in their products variable(initial state variable)
import filterReducer from "../reducer/FilterReducer";

const FilterContext = createContext();

const initialState ={
    filter_products : [] ,
    all_products: [] ,
    grid_view: true,
    sorting_value : "lowest" ,
    filters:{
      text: "" ,
    }
} ;

export const FilterContextProvider = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(filterReducer, initialState);

  // to set the grid view on button click
  const setGridView = () => {
    return dispatch({ type: "SET_GRID_VIEW" });
  };

  // to set thelist view on button click
  const setListView = () => {
    return dispatch({ type: "SET_LIST_VIEW" });
  };

  // sorting function
  const sorting = (event) => { 
    let dropdownValue = event.target.value;
    dispatch({type: "GET_SORT_VALUE" , payload: dropdownValue}) ;
  };

  //to update the filter values
  const updateFilterValue = (event) =>{
    let name = event.target.name ;
    let value = event.target.value ;

    return dispatch({type: "UPDATE_FILTER_VALUE" , payload :{ name , value } })
  }

  // to sort the products
   useEffect(() => {
    dispatch({type: "SORTING_PRODUCTS"})
   }, [products, state.sorting_value]);

  useEffect(() => {
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  return (
    <FilterContext.Provider value={{ ...state, setGridView, setListView , sorting , updateFilterValue}}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
    return useContext(FilterContext);
};