
const filterReducer = (state , action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
      };

    case "SET_GRID_VIEW":
      return {
        ...state,
        grid_view: true,
      };

    case "SET_LIST_VIEW":
      return {
        ...state,
        grid_view: false,
      };

    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value ;
      // console.log("sort_value",sort_value);
      return {
        ...state,
        // sorting_value: sort_value,
        sorting_value: action.payload,
      };

    case "SORTING_PRODUCTS":
        let newSortData;
        const { filter_products, sorting_value } = state; ; 
        let tempSortProduct = [...filter_products];
        console.log("temmmmpSortproducts is ", tempSortProduct);

        const sortingProducts = (a,b) =>{
           if (sorting_value === "lowest") {
              return a.price - b.price;
           }

            if (sorting_value === "highest") {
              return b.price - a.price;
            }

            if (sorting_value === "a-z") {
                a.name.localeCompare(b.name);
            }

             if (sorting_value === "z-a") {
                b.name.localeCompare(a.name);              
             }
        }
        newSortData = tempSortProduct.sort(sortingProducts);
        return{
          ...state ,
          filter_products : newSortData ,
        }


    case "UPDATE_FILTER_VALUE" : 
        const { name, value } = action.payload ;
        return {
          ...state ,
          filters: {
            ...state.filters ,
            [name]: value ,
          }
        }

    default:
      return state;
  }
};

export default filterReducer;