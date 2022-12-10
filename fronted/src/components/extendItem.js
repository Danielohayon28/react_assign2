import { NavLink } from "react-router-dom"
import { useState } from "react"
export default function ExtendItem({item }) {
    const [bigPicture,setBigPicture] =useState(item.image[0])
    const ListItems = item.image.map((d) =><img onClick={(()=>{setBigPicture(d)})} key={d} src={d} alt="first" height={'100px'} width={'100px'} style={{cursor:'pointer',margin:'2vh'}} loading="lazy"></img>);
    const dataItem = item.description.map((d) =><h6><li>{d}</li></h6>);
    return(
        <div style={{display:'flex' ,flexDirection:'column',justifyContent:'center',alignItems:'center',userSelect:'none'}}>
            <div ><h2><b><span>Title:</span> {item.names}</b></h2></div>
            <img  src={bigPicture} alt="first" height={'500px'} width={'500px'} loading="lazy"></img>
             <div style={{display:'flex'}}>
                {ListItems}
             </div>  
             <h2> תיאור</h2> 
             <div dir="rtl"> 
               
                {dataItem}
             </div>
            <div  dir="rtl"><h2><b>מחיר: {item.price} &#8362;</b></h2></div>
            <div dir="rtl" ><h3>לינק לרכישה <a style={{color:'black' }} href={item.where_to_buy}><b>לחץ כאן</b></a></h3> </div>
            <NavLink to={`/`}><button style={{border:'1px solid black',borderRadius:'8%' ,backgroundColor:'white',height:'3vh',cursor:'pointer'}}><b>BACK</b></button></NavLink>
           
           
        </div>
    )

}