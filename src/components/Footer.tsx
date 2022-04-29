import React from 'react'

const Footer = () => {
  return (
    <div
      style={{
        background: '#e3e8ec',
        padding: '24px 8px',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <div>
          <h1>E-Shop</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea,
            dolorem.
          </p>
        </div>
        <div>
          <h3>Quick Links</h3>
          <ul>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <h3>Social</h3>
          <ul>
            <li>icon</li>
            <li>icon</li>
            <li>icon</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer
