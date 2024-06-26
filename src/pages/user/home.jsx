import React from 'react'
import Banner from './Banner'
import Card from '../../components/card'
import Card1 from '../../components/card1'
import Note from './note'
import Navbar from '../../components/Header/header'

const home = () => {
  return (

        <>
            <Banner />
            <Card1/>
            <Note/>
            <Card/>

        </>

    )
}

export default home