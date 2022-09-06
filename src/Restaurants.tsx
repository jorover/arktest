import React from 'react'
import { clientData } from './ClientData'
import Restaurant from './components/Restaurant';

const Restaurants = () => {
  return (
    <section className="restaurantsContainer">
        {
            clientData.map(item => {
                const {id, clientName, clientAddress, imgClass, rating, ratingImageOne, ratingImageTwo, ratingBracket, openHours, options, foodImg} = item;
                return(
                    <article key={id}>
                        <Restaurant
                        id={id}
                        clientName={clientName}
                        clientAddress={clientAddress}
                        rating={rating}
                        ratingImageOne={ratingImageOne}
                        ratingImageTwo={ratingImageTwo}
                        ratingBracket={ratingBracket}
                        openHours={openHours} 
                        options={options}
                        foodImg={foodImg}
                        imgClass={imgClass} />
                    </article>
                )
            })
        }
    </section>
  )
}

export default Restaurants