import React from 'react'
import ContentBtn from './ContentBtn'
import ArrowDown from '../arrowDow.png'

const BtnGroup = () => {

    const firstBtn = {
        text:'Rating',
        img: ArrowDown 
    }

    const secondBtn = {
        text:'Hours',
        img: ArrowDown 
    }

    const thirdBtn = {
        text:'More Filters',
        img: ArrowDown 
    }

  return (
    <section className="btnGroup">
       <ContentBtn
       btnContents= {firstBtn} />

        <ContentBtn
       btnContents= {secondBtn} />

        <ContentBtn
       btnContents= {thirdBtn} />
    </section>
  )
}

export default BtnGroup