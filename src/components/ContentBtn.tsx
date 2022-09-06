import React from 'react'

interface btnContent{
    btnContents:{
        text:string,
        img:string
    }
}

const ContentBtn:React.FC<btnContent> = ( {btnContents}:btnContent ) => {
  return (
      <>
        {
            btnContents.text === 'More Filters' ?
            <button className="btnContents">
            <img src={btnContents.img} alt="btnImg-logo" />
            <p> {btnContents.text} </p>
            </button> : <button className="btnContents">
            <p> {btnContents.text} </p>
            <img src={btnContents.img} alt="btnImg-logo" />
            </button>
        }

      </>
   
  )
}

export default ContentBtn