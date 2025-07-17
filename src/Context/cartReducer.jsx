
export const cartReducer =(state,action)=>{

    switch(action.type){
        case "ADD":
            const existingItem = state.cartProducts.find(item=> item.id===action.payload.id);
            if(existingItem){

                return{
                ...state,
                cartProducts: state.cartProducts.map(item=>
                    item.id===action.payload.id?
                    {...item, quantity:item.quantity+1}:
                    item
                )
                }
            }else{
                return{
                    ...state ,
                    cartProducts:[...state.cartProducts , {...action.payload , quantity:1}],
                }
            }
        case "REMOVE":
            return{
                ...state,
                cartProducts: state.cartProducts.filter( item=> item.id!==action.payload),
            }
            
        default:
            return{
                ...state
            }

    }
}