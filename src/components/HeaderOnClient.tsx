"use client"
import { useEffect } from "react";

export const HeaderOnClient = () => {
      useEffect(() => console.log('test'));
      return <div style={{ padding: '40px',  backgroundColor: 'salmon' , display: 'flex', height: '100px', width: '100%'}}> 
         This is client!
    </div>
};