import React, { useEffect } from "react";
import {useParams } from 'react-router-dom';
import { Products,getItemById } from "../components/data";
import ExtendItem from "../components/extendItem";
const ExtendedItem = () => {
    let { id } =  useParams();
    const relevantItem = getItemById(Number(id))
    console.log(relevantItem)
    return(<div style={{display:'grid'}}>
    <h2 style={{margin:'auto',paddingTop:'2vh'}}>Product </h2>
    <ExtendItem item={relevantItem}></ExtendItem>
</div>)
}
export default ExtendedItem;