import React from 'react'
import { Link } from 'react-router-dom';
import { options } from '../ClientData';
import Ratings from './Ratings';

interface restaurantInfo {
   id:number,
   clientName:string,
   rating:number,
   clientAddress:string,
   ratingImageOne:string[],
   ratingImageTwo:string[],
   ratingBracket:number,
   openHours:string,
   options:options[],
   foodImg:string[],
   imgClass:string

}



const Restaurant:React.FC<restaurantInfo> = ( {id, clientName, clientAddress, rating, ratingImageOne, ratingImageTwo, ratingBracket, openHours, options, foodImg}:restaurantInfo ) => {
    
    const [rateLightImg] = ratingImageOne;
    const [rateGreyImg] = ratingImageTwo;
    const[food] = foodImg;


  return (
    <section className="restaurantContent">
        <article className="resLeftContent">
            <Link to={`/patronise/${id}`}>
                <h4> {clientName} </h4>
            </Link>
            <Ratings
            ratings={rating}
            rateGreyImg={rateGreyImg}
            ratingBracket={ratingBracket}
            rateLightImg={rateLightImg}
            check={true} />
            <article className="addressHours">
                <p> {clientAddress} </p>
                <p> {openHours} </p>
            </article>

            <article className="options">
                {
                    options.map((t, index) => {
                        return (
                            <article key={index} className="optionsList">
                                <p> {`${t.dine}   . ${t.takeAway}    . ${t.delivery}`} </p>
                            </article>
                        )
                    })
                }
            </article>
        </article>

        <figure className="foodImg">
            <img src={food} alt="food-logo" />
        </figure>


    </section>
  )
}

export default Restaurant