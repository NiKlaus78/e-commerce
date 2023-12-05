export const increment = (n) =>{
    return {type:'INCREMENT',payload:n+1}
}

export const decrement = (n) =>{
    return {type:'DECREMENT',payload:n-1}
}

export const products = (n) =>{
    return {type:'PRODUCTS',payload:n}
}

export const totalPrice = (currentPrice) =>{
    return {type:'TOTAL_PRICE',payload:currentPrice}
}