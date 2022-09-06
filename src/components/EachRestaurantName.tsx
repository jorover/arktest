import React from 'react'
import Ratings from './Ratings'

interface restaurantName {
    clientName:string,
    ratings:number,
    rateGreyImg:string,
    ratingBracket:number,
    rateLightImg:string

}

const EachRestaurantName:React.FC<restaurantName> = ( {clientName, ratings, rateGreyImg, ratingBracket, rateLightImg}:restaurantName ) => {
  return (
    <section className="eachRestaurantNameContainer">
      <article className="eachRestaurantName">
          <h4> {clientName} </h4>
              <article className="restaurantRating">
                  <Ratings
                  ratings={ratings}
                  rateGreyImg={rateGreyImg}
                  ratingBracket={ratingBracket}
                  rateLightImg={rateLightImg}
                  check={false} />
                  <p>
                  {
                      `reviews NN`
                  }
                  </p>
              </article>
              <p> Fast Food Restaurant </p>
      </article>
    </section>
  )
}

export default EachRestaurantName