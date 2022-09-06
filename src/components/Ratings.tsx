import React from 'react'
import Cstar from '../cstarr.png'
import star from '../star.png'

interface rating {
    ratings:number,
    rateLightImg:string,
    rateGreyImg:string,
    ratingBracket:number,
    check:boolean
}

const Ratings:React.FC<rating> = ( {ratings, rateLightImg, rateGreyImg, ratingBracket, check}:rating) => {
  return (
    <article className="ratings">
            <p> {ratings} </p>
            <figure className="starImages">
                <img src={Cstar} alt="star-img" />
                <img src={Cstar} alt="star-img" />
                <img src={Cstar} alt="star-img" />
                <img src={Cstar} alt="star-img" />
                <img src={star} alt="star-img" />
            </figure>
                
            <article className="bracket">
                {
                    check ?
                    <>
                        ({ratingBracket})
                    </>
                     :
                     <>
                    {ratingBracket}
                    </>
                }
            </article>
    </article>
  )
}

export default Ratings