import React from 'react'
import SIcon from '../sR.png'
import X from '../x.png'
import HMenu from '../h-menu.png'

interface placeholder {
  placeholder:string
}

const TakeOutSearchBar:React.FC<placeholder> = ( {placeholder}:placeholder) => {
  return (
    <>
    <img src={HMenu} alt="h-menu-logo" className="h-menu-logo" />
    <form className="takeOutForm">
        <input type="text" placeholder={placeholder} className="takeOut" />
        <figure className="textOutIcons">
            <img src={SIcon} alt="s-icon-logo" />
            <p> </p>
            <img src={X} alt="x-logo" />
        </figure>
    </form>
    </>
  )
}

export default TakeOutSearchBar