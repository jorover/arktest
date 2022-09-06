import React from 'react'
import { Link } from 'react-router-dom'
import { removeActive } from '../btnActive'
import Restaurants from '../Restaurants'
import BtnGroup from './BtnGroup'
import Categories from './Categories'
import EachRestaurantName from './EachRestaurantName'
import ImageBg from './ImageBg'
import MoreOptions from './MoreOptions'
import Options from './Options'
import TakeOutSearchBar from './TakeOutSearchBar'
import VendorIcons from './VendorIcons'

interface blackBg {
    blackBgContent:string,
    data:any
}

const BlackBg:React.FC<blackBg> = ( {blackBgContent, data}:blackBg ) => {


    const addActive = (e:React.FormEvent<EventTarget>) => {
        const target = e.target as HTMLButtonElement;
        const ele = target.parentElement;     
        removeActive();

        if(target.innerText === 'Patronise'){
            ele?.classList.add('active')
            localStorage.setItem('item', JSON.stringify(target.innerText))
        } else{
            ele?.classList.add('active')
            localStorage.removeItem('item')
        }

    }

  return (
    <section className="blackBgContainer">
        <div className="topBtnLink">
            <Link to="/patronise">
                <button className="btn btn-light topBarBtn" onClick={addActive}>
                    Patronise
                </button>
            </Link>

            <Link to="/" className="active">
                <button className="btn btn-primary topBarBtn" onClick={addActive}>
                    Bid
                </button>
            </Link>
        </div>

        {
            blackBgContent === 'home' &&
            <Categories />
        }

        {
            blackBgContent === 'patronise' &&
            <>
                <TakeOutSearchBar
                placeholder="TakeOut" />
                <BtnGroup />
                <Restaurants />
            </>
        }

        {
            blackBgContent === 'eachVendor' &&
            <>
                <ImageBg
                clientName={data.clientName}
                imgBgg={data.imgClass} />
                <EachRestaurantName
                clientName={data.clientName}
                ratings={data.rating}
                rateGreyImg={data.rateGreyImg}
                ratingBracket={data.ratingBracket}
                rateLightImg={data.rateLightImg} />
                <VendorIcons />
                <Options 
                datas={data.options} />
                <MoreOptions
                datas={data} />
            </>
        }
    

    </section>
  )
}

export default BlackBg