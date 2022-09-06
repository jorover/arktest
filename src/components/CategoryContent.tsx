import React from 'react'

interface category {
    imgSrc:string,
    imgTextOne:string,
    imgSrc2:string,
    imgTextTwo:string
}

const CategoryContent:React.FC<category> = ( {imgSrc, imgTextOne, imgTextTwo, imgSrc2}:category) => {

    const altOne = imgSrc === '' ? '' : `${imgTextOne}-logo`

  return (
    <article className="categoryInnerContent">
        <article className="cContent">
            <h5> {imgTextOne} </h5>
            {
                imgSrc !== '' &&
                <img src={imgSrc} alt={altOne} className="inner-category-logo-one" />

            }
        </article>
            {
                imgTextOne === 'Booth Completion' && 
                <article className="percentagesBar">
                    <p className="bar"></p>
                    <p className="bar"></p>
                    <p className="bar"></p>
                    <p className="bartext"> 100%</p>
                </article>
            }
        <article className="cContent">
            <img src={imgSrc2} alt={`${imgTextTwo}-logo`} className="inner-category-logo-two" />
            <p> {imgTextTwo} </p>
        </article>

    </article>
  )
}

export default CategoryContent