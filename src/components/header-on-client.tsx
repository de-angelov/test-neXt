"use client"
import { useFetchState } from "@jobber/hooks.ts/use-fetch-state";
import { useEffect } from "react";
import { LoadingContainer } from "./loading-container";

const tw = {
  base: 'relative p-5 bg-sky-300 flex w-full drop-shadow-md drop-shadow-gray-500',
  bold: "font-black",
};

export const HeaderOnClient = () => {
      const {loading, error, data } = useFetchState({ initVal: '', url: '/api/random-string'})
    
      // eslint-disable-next-line no-console
      useEffect(() => console.log('browser state', data));

      if(loading){
        return <LoadingContainer>RUNNING FETCH FROM BROWSER.. </LoadingContainer>
      }

      if(error){
        return <div className={tw.base}>ERROR oops...: {error}</div>
      }


      return <div className={tw.base}> 
         This is client component showing random server string: <div className={tw.bold}>{`"${data}"`}</div>
    </div>;
};