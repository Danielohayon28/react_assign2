import { NavLink } from "react-router-dom"

export default function Item({item ,addFunction}) {
    return(
        
        <div style={{ width:'350px', height:'550px',textAlign:'center' , boxShadow:' box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2)',
        transition: '0.3s',display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',margin:0,padding:'none'}}>
            <img style={{width:'100%',height:'26vh'}} src={item.img ?item.img : null} alt="first" loading="lazy"></img>
                <p style={{width:'100%',height:'12vh',marginTop:'3vh',fontSize:'1.3rem'}}>{item.name}</p>
                <p style={{fontSize:'1.6rem',fontWeight:'bold',opacity:'0.8'}}> {item.price} &#8362;</p>
                <p>Category: {item.catagory}</p>
                <p>Type: {item.type}</p>
                <p>Quantity:{item.quantity}</p>
            <p style={{width:'100%'}}><button className="button-31" style={{
                width: '100%',
            }} onClick={()=>{addFunction(item)}}>Add to Cart</button></p>       
        </div>
    )

}