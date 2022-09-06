import React from 'react'
import Thumb from '../thumb.png'
import Love from '../love.png'
import Payment from '../payment.png'
import Star from '../star.png'
import U from '../uu.png'

interface searchDisplay {
    headerText:string,
    hourTextOne:string,
    hourTextTwo:string,
    btnOne:string,
    btnTwo:string,
    btnThree:string,
    btnFour:string,
    proposal:string

}

const SearchContent:React.FC<searchDisplay> = ( {headerText, hourTextOne, hourTextTwo, btnOne, btnTwo, proposal, btnThree, btnFour}:searchDisplay ) => {
  return (
    <section className="searchDisplayContent">
        <article className="searchDisplayTopBar">
            <h5> {headerText} </h5>
            <figure className="headerLogoImages">
                <figure className="headerLogo">
                    <img src={Thumb} alt="thumb-logo" />
                </figure>
                <figure className="headerLogo">
                 <img src={Love} alt="love-logo" />
                </figure>
            </figure>
        </article>

        <article className="searchDisplayHourText">
            <p> {hourTextOne} </p>
            <p> {hourTextTwo} </p>
        </article>

        <article className="searchDisplayBtns">
            <button> {btnOne} </button>
            <button> {btnTwo} </button>
            <button> {btnThree} </button>
            <button> {btnFour} </button>
        </article>

        <article className="searchDisplayProposals">
            <p> {proposal} </p>
        </article>

        <article className="paymentMethod">
            <article className="payment">
                <img src={Payment} alt="payment-logo" />
                <p> Payment Unverified </p>
            </article>

            <figure className="starImages">
                <img src={Star} alt="star-logo" />
                <img src={Star} alt="star-logo" />
                <img src={Star} alt="star-logo" />
                <img src={Star} alt="star-logo" />
                <img src={Star} alt="star-logo" />
            </figure>

            <article className="price-country">
                  <p> $0 spent </p> 
                  <aside>
                      <img src={U} alt={`u-location-logo`} />
                      <p> India </p>
                </aside> 
            </article>
        </article>
    </section>
  )
}

export default SearchContent