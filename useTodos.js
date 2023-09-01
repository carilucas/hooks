import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-reducer/todoReducer";

const initialState = []

const init = ()=>{
   return JSON.parse( localStorage.getItem('todos') ) || [] ;
}

export const useTodos = ()=>{
   const [ todos, dispatch ] = useReducer( todoReducer, initialState ,init );
   const todosCount = todos.length;
   const pendingTodos = todos.filter( todo => todo.done === false ).length;

   useEffect(() => {
     localStorage.setItem('todos',JSON.stringify(todos));
     
   }, [todos])
   

   const handleNewTodo = (todo)=>{
      const action = {
         type: '[TODO] ADD TODO',
         payload: todo
      }

      dispatch( action )
   }

   const handleDeleteTodo = (id)=>{
      const action = {
         type:'[TODO] REMOVE TODO',
         payload: id
      }
      dispatch(action);
   }
   const onHandleToggleTodo = (id)=>{
      const action = {
         type:'[TODO] TOGGLE TODO',
         payload: id
      }
      dispatch(action);
   }

   return {
      todos,
      handleNewTodo,
      handleDeleteTodo,
      onHandleToggleTodo,
      todosCount,
      pendingTodos
   }
}