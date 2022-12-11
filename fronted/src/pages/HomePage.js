import React, {useEffect,useState} from "react";
import axios from 'axios'
import Item from "../components/item";

const HomePage = ()=>{
    const [product,setProduct] = useState(null)
    const [cart,setCart]=useState([])
    const [show,setShow]=useState(false)

    useEffect(()=>{
        axios.get('http://localhost:5000/api/products/')
        .then(res=>{
            console.log(res.data)
            setProduct(res.data)
        })
    },[])
    const addToCart=(product)=>{
    if(cart.indexOf(product) === -1)
        setCart([...cart,product])
    }
    const removeFronCart=(item)=>{
        const newArray= cart.filter(product=> product.id !== item.id)
        setCart(newArray);
    }
    const saveCart=()=>{
        axios.post('http://localhost:5000/api/user/save',{username:'daniel',cart:cart})
        .then(res=>{
            console.log(res.data)
        })
    }
    const ListItems = product !== null && 
        product.map((d) =>
            <div className="list_item" key={d.id} >
                <Item  addFunction={addToCart} item={d} />
            </div>
    );

    return(
        <div style={{display:'grid',userSelect:'none'}}>
            <h2 style={{margin:'auto',paddingTop:'2vh'}}>
                BLACK FRIDAY SALE
            </h2>
            <section style={{display: 'flex',justifyContent:'space-between',flexWrap:'wrap' , width:'90%',position:'relative',left:'5%'}}>
                {product !== null && ListItems }
            </section>
            <div>
                {cart.length > 0 ? 
                <div style={{
                    
                    top:'2vh',
                    right:'2vw',
                    backgroundColor:'white'
                }}>
                <button className="button-27"
                  style={{
                        position:'fixed',
                        top:'2vh',
                        right:'2vw',
                        width:'8vw'
                    }} onClick={()=>{setShow(!show)}}>
                        Open cart
                        </button>
                  
                    
                    <div>
                    {show ?
                    <div className="main-container">
                        <div className="main-header" >
                        <h3 style={{position:'sticky',textAlign:'center'}}>My bag</h3>
                        <div className="main-content">
                        {cart.map(item =><div >
                            <div style={{paddingTop:'1vw', height:'150px',marginBottom:'0vh',position:'relative',width:'13vw'}}>
                                <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',position:'relative',left:'1vw',width:'12vw'}}>
                                    <div style={{height:'55px',width:'68%',marginBottom:'5px',fontSize:'0.8rem'}}> {item.name}</div>
                                    <div >{item.price} &#8362;</div>
                                    <button onClick={()=>{removeFronCart(item)}}className="button-24"><b>Remove</b></button>
                                </div>
                                <img  src={item.img ?item.img : null} alt="first"style={{
                                   width:'30%',
                                    right:'1vw',
                                    height:'110px',
                                    bottom:'90px',
                                    position:'relative',
                                    left:'70%'
                                }} loading="lazy"></img>          
                            </div>
                        </div>)}
                        </div>
                        <footer className="main-footer">
                            <button  className="button-37" style={{width:'100%'}} onClick={saveCart}>SEND NOW</button>
                        </footer>
                        </div>
                        </div>
                    :null
                    }
                    </div>
                </div>
                : null}
            </div>
        </div>
        
    )
}
export default HomePage;

{/* <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',position:'relative',left:'1vw',width:'68%'}}>
<div style={{height:'55px',width:'68%',marginBottom:'5px',fontSize:'0.8rem'}}> {item.name}</div>
<div >{item.price} &#8362;</div>
<button onClick={()=>{removeFronCart(item)}} className="button-24"><b>Remove</b></button>
</div>
<img  src={item.img ?item.img : null} alt="first"style={{
width:'30%',
right:'1vw',
height:'130px',
bottom:'130px',
position:'relative',
left:'70%'
}} loading="lazy"></img>      */}