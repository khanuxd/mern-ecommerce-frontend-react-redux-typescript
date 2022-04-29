import React from 'react'

import JoinCTA from '../components/JoinCTA'
import LatestProducts from '../components/LatestProducts'
import Slider from '../components/Slider'

export default function Home() {
  const ownUser = localStorage.getItem('shop-user') || '{}'
  const googleUser = localStorage.getItem('shop-user-google') || '{}'

  const userLoggedin = ownUser || googleUser

  return (
    <>
      <Slider />
      <LatestProducts />
      {!userLoggedin && <JoinCTA />}
    </>
  )
}
