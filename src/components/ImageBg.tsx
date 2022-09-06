import React from 'react'
import TakeOutSearchBar from './TakeOutSearchBar'

interface imgBg {
    clientName:string,
    imgBgg:string
}

const ImageBg:React.FC<imgBg> = ({ clientName, imgBgg}:imgBg ) => {
  return (
    <section className={`imgBgContainer ${imgBgg}`}>

        <TakeOutSearchBar
        placeholder={clientName} />

    </section>
  )
}

export default ImageBg