import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping} from '@fortawesome/free-solid-svg-icons'

const Header = (props) => {
    console.log("props",props.data)
  return (
    <div className='max-w-[1240px] mx-auto'>
        <div className='text-5xl text-red-500 text-center'> Components</div>   
    <div className="text-right text-3xl CartIcon">
    <FontAwesomeIcon icon={faCartShopping} />
    <span id='span1'>{props.data.length}</span>
    {/* <img src="https://static.vecteezy.com/system/resources/thumbnails/000/496/007/small/Ecommerce_998.jpg" /> */}
  </div>

  </div>
  
  )
}

export default Header;

