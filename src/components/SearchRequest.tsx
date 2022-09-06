import React from 'react'
import SearchReq from '../sR.png'
import SearchContent from './SearchContent'
import Sort from './Sort'

const SearchRequest = () => {
  return (
    <>
    <form className="searchRequestBar">
        <input type="text" placeholder="Search Request"/>
        <figure className="searchBtn">
            <img src={SearchReq} alt="search-req-logo" className="searchReqLogo" />
        </figure>
    </form>
    <p className="as"> Advanced Search </p>
    <Sort />
    <SearchContent
    headerText="Need a graphic designer who can handle my social media"
    hourTextOne="Hourly: $20.00-$30.00 - intermediate - Est. Time: Less than 1 month, Less than 30 hrs/week -
    Posted 1 hour ago"
    hourTextTwo="I have a page called blurry_cosmos I want someone who can manage my account. I need a
    graphic designer and also creative."
    btnOne="Instagram"
    btnTwo="Social Media Imagery"
    btnThree="Graphic Design"
    btnFour="Adobe Photoshop"
    proposal="Proposals less than 5"/>
    <SearchContent
    headerText="Create a new logo"
    hourTextOne="Hourly: $35.00-$43.00 - intermediate - Est. Time: Less than 1 month, Less than 30 hrs/week -
    Posted 1 hour ago"
    hourTextTwo="I have a page called blurry_cosmos I want someone who can manage my account. I need a
    graphic designer and also creative."
    btnOne="Logo"
    btnTwo="Graphic Design"
    btnThree="Logo Design"
    btnFour="Brand Identity and Guidelines"
    proposal="Proposals less than 5"/>
    </>
  )
}

export default SearchRequest