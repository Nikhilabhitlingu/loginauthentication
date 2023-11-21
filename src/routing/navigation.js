import { BrowserRouter } from "react-router-dom"
import PostAuthentication from "../navigation/post-authentication"
import PreAuthenticaton from "../navigation/pre-authentication"
import { createContext,  useState } from "react"

// import HomeComponent from "../screens/home"
// import MenuComponent from "../screens/menu"
// import ContactComponent from "../screens/contact"
// import AboutComponent from "../screens/about"
// import InvalidComponent from "../screens/Invalid"
// import ProductsScreen from "../screens/products screen"


export const Login = createContext()


const NavigationComponent=()=>{

const [login,setlogin]=useState(false)

const handlelogin=()=>{
    debugger

    setlogin(true)
}


    return(
        <>
                <Login.Provider value={{login,handlelogin}}>

        <BrowserRouter>
        
            {

              login ?<PostAuthentication/>:<PreAuthenticaton/>


            }

             
        
        
            {/* <Route path="/" element={<HomeComponent/>}/>
            <Route path="/menu" element={<MenuComponent/>}/>
            <Route path="/contact" element={<ContactComponent/>}/>
            <Route path="/about" element={<AboutComponent/>}/>
            <Route path="/*" element={<InvalidComponent/>}/>
            <Route path="/products/:id" element={<ProductsScreen/>}/> */}
       
        </BrowserRouter>
              </Login.Provider>

        </>
    )
}
export default NavigationComponent