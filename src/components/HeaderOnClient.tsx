"use client"
import { useFetchState } from "@jobber/hooks.ts/useFetchState";
import { useEffect } from "react";

const style = { padding: '40px',  backgroundColor: 'salmon' , display: 'flex', height: '100px', width: '100%'};

export const HeaderOnClient = () => {
      const {loading, error, data } = useFetchState({ initVal: '', url: '/api/random-string'})
    
      useEffect(() => console.log('browser state', data));

      if(loading){
        return <div style={style}>LOADING FETCH FROM BROWSER...</div>
      }

      if(error){
        return <div style={style}>ERROR oops...: {error}</div>
      }


      return <div style={{ padding: '40px',  backgroundColor: 'salmon' , display: 'flex', height: '100px', width: '100%'}}> 
         This is client component showing random server string: {`"${data}"`}
    </div>;
};