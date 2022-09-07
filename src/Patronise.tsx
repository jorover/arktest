import React from 'react'
import { checkForActive } from './btnActive'
import BlackBg from './components/BlackBg'
import Map from './components/Map'

const Patronise = () => {

  React.useEffect(() => { 
    checkForActive();
  }, [])



  return (
    <section className="homeContainer">
         <BlackBg 
         blackBgContent="patronise"
         data={[]}
         openMenu="patroniseMenu" />
         <Map />
    </section>
  )
}

export default Patronise