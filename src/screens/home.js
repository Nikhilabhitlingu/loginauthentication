import { Link } from "react-router-dom"
import HeaderScreen from "./header screen"
import { useEffect, useState } from "react"
import axios from "axios"
import "../App.css"





const HomeComponent=()=>{

    const[data,setdata]=useState([])

    useEffect(()=>{
    
    axios.get("https://fakestoreapi.com/products")
    .then(response=>{setdata(response.data);})
    .catch(error=>{console.log(error);})
    
    
    
    },[])
    
        return(
            <>
            <HeaderScreen/>
            {
                data.map((data)=>{
    
                    return(
                        <div className="products">
                  
                   <div> <Link to={`/products/${data.id}`}><img src={data.image} alt="" width={200} height={200}/></Link></div>
                  <br></br>
                    <h4> <Link to={`/products/${data.id}`} className="category">{data.category}</Link></h4>
                    <br></br>
                   <h4> <Link to={`/products/${data.id}`} className="price">${data.price}</Link></h4>
                 <br></br>
                   <h4><Link to={`/products/${data.id}`} className="viewmore">View more</Link></h4>
                   
                    </div>
                    )
    })
            }
            
            </>
        )


  


 
   
}
export default HomeComponent