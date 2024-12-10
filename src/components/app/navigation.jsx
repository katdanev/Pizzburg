// navigation.jsx
import React from 'react'
import './navigation.css'
import './fonts.css'
import { Link } from 'react-router-dom';


function navigation() {
    return (
        <div className='container'>
            <Link to="/menu" className='link'> {}
                <button className='button'>
                    <img src="/list.svg" alt="list" className='list'/>
                    <p className='font'>menu</p>
                </button>
            </Link>
            <Link to="/order" className='link'> {}
                <button className='button'>
                    <img src="/order.svg" alt="order" className='order'/>
                    <p className='font'>order</p>
                </button>
            </Link>
        </div>
    )
}

export default navigation


