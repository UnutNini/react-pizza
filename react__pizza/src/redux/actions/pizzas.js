import axios from 'axios';


// export const fetchPizzas=(sortBy, category)=>(dispatch)=>{
//     console.log(sortBy, category)
//     dispatch({
//         type: 'SET_LOADED',
//         peyload: false,
//     });
//     axios.get(`http://localhost:3001/pizzas`).then(({ data }) => {
//         dispatch(setPizzas(data));
//     })
// }


export const fetchPizzas = (sortBy, category) => (dispatch) => {
    dispatch({
        type: 'SET_LOADED',
        payload: false,
    });

    axios
        .get(
            `http://localhost:3001/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type
            }&_order=${sortBy.order}`,
        )
        .then(({ data }) => {
            dispatch(setPizzas(data));
        });
};


export const setPizzas = (items) => ({
    type: 'SET__PIZZAS',
    payload: items
})




