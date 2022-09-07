import React from 'react'
import BlackBg from './components/BlackBg'
import Search from './components/Search'

const Home = () => {
  return (
    <section className="homeContainer">
      <BlackBg
      blackBgContent="home"
      data={[]}
      openMenu="homeMenu" />
      <Search />
    </section>
  )
}

export default Home