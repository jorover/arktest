import React from 'react'

interface logo{
    logoSrc:string,
    logoName:string
}

const CategoryLogo:React.FC<logo> = ( {logoSrc, logoName}:logo ) => {
  return (
    <>
        <img src={logoSrc} alt= {logoName} className="category-logo" />
    </>
  )
}

export default CategoryLogo