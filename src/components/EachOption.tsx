import React from 'react'


interface eachOptions{
    option:string,
    marker:string
    itemClass:string
}

const EachOption:React.FC<eachOptions> = ( {marker, option, itemClass}:eachOptions) => {
  return (
    <figure className={itemClass}>
        <img src={marker} alt="marker-logo" />
        <figcaption>
            <p> {option} </p>
        </figcaption>
    </figure>
  )
}

export default EachOption