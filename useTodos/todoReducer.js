export const todoReducer = (initialState = [], { type, payload })=>{
   switch (type) {
      case '[TODO] ADD TODO':
         
         return [
            ...initialState,
            payload
         ]

      case '[TODO] REMOVE TODO':
         
         return initialState.filter( todo => todo.id !== payload )

      case '[TODO] TOGGLE TODO':
         
         return initialState.map( todo => {
            if (todo.id === payload) {
               return { ...todo, done:!todo.done }
            }
            return todo;
         } )
   
      default:
         return initialState;
   }
}