import { useEffect, useState } from "react";

export const useFetch = (url)=>{

   const [state, setState] = useState({
      data:null,
      isLoading:true,
      hasError: null
   });

   const getData = async()=>{

      try {
         setState({
            ...state,
            isLoading:true
         })
         const resp = await fetch(url);
         const data = await resp.json();
         
         setState({
            data,
            isLoading:false,
            hasError: null
         })
      } catch (error) {
         console.log(error)
         setState({
            data:null,
            isLoading:false,
            hasError: error
         })

      }

      
   }
   
   useEffect(() => {

      getData();
     
   }, [url ])
   
   return {
      state,
      ...state
   }
}