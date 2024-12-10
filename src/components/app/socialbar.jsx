// socialbar.jsx
import React from 'react'
import './socialbar.css'

function Socialbar() {
  return (
    <div className='socialbar'>
      <a href="https://www.facebook.com/" target='_blank'><img src="/facebook.jpg" alt="facebook" width={38} height={38}/></a>
      <a href="https://www.instagram.com/" target='_blank'> <img src="/instagram.jpg" alt="instagram" width={38} height={38}/></a>
      <a href="https://twitter.com/" target='_blank'><img src="/twitter.jpg" alt="twitter" width={38} height={38}/></a>
    </div>
  )
}

export default Socialbar


