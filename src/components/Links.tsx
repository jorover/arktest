import React from 'react'

interface topBar{
    linkText:string,
    linkImage:string,
    linkName:string,
    dropDown:boolean,
    dropDownImage:string
}

const Links:React.FC<topBar> = ( {dropDown, dropDownImage, linkText, linkImage, linkName}:topBar ) => {
  return (
    <figure className="topBarLinks">
        <img src={linkImage} alt={linkName} className="icon" />
        <figcaption>
            <p> {linkText} </p>
        </figcaption>
        { 
        
        dropDown && 

        <img src={dropDownImage} alt="dropDown-logo" className="dropDown" />

        }
    </figure>
  )
}

export default Links