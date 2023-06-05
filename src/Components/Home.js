import React from 'react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Home = (props) => {
    console.log("props",props)
  return (
    <div className='max-w-[1240px] mx-auto'>
     
  <div className='grid grid-cols-2 gap-4'>
    <div className='col-span-1 md:flex gap-4 border-[2px] text-center py-5 px-5'>
        <img src='https://cdn.pixabay.com/photo/2014/08/05/10/27/iphone-410311_1280.jpg' width={"140px"} />
        <h4>1-PhonePrice:<br/>$1000.00</h4>
        <button onClick={()=>props.addToCartHandler({price:1000,name:"I Phone"})}>Add To Cart</button>
        <button onClick={()=>props.removeToCartHandler()}>Remove</button>
    </div>
    <div className='col-span-1'>sdfsd</div>
  </div>
  </div>
  
  )
}

export default Home;

