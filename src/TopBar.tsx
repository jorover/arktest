import React from 'react'
import Links from './components/Links'
import ArkImage from './ark.png'
import AssetImage from './asset.png'
import AccountImage from './firstCircle.png'
import DropDownImage from './dropDown.png'
import SearchBar from './components/SearchBar'
import GroupImage from './group.png'
import MessageImage from './message.png'
import CircleImage from './circ.png'
import BoxesImage from './boxes.png'
import ProfileImage from './user.png'
import DropDown from './dropDown.png'

const TopBar = () => {
  return (
    <section className="topBarContainer">
        <div className="container topBarLinkContent">
            <article className="topBarLeftContent">
                <Links
                linkText="Ark"
                linkImage={ArkImage}
                linkName="ark-logo"
                dropDown={false}
                dropDownImage="" />

                <Links
                linkText="Asset"
                linkImage={AssetImage}
                linkName="asset-logo"
                dropDown={true}
                dropDownImage={DropDownImage}  />

                <Links
                linkText="Account"
                linkImage={AccountImage}
                linkName="account-logo"
                dropDown={false}
                dropDownImage="" />
            </article>

            <article className="topBarRightContent">
                <SearchBar />
                <article className="rightIcon circle">
                    <img src={GroupImage} alt="" className="group-img" />
                </article>

                <article className="rightIcon message">
                    <img src={MessageImage} alt="" className="message-img" />
                    <img src={CircleImage} alt="circle-img-logo" className="circle-img-logo" />
                </article> 

                <article className="rightIcon box">
                    <img src={BoxesImage} alt="box-logo" className="box-img" />
                    <img src={DropDown} alt="dropDown-img-logo" className="dropdown-logo" />
                </article>

                <article className="rightIcon profile">
                    <img src={ProfileImage} alt="profile-logo" className="profile-img" />
                    <img src={DropDown} alt="dropDown-img-logo" className="dropdown-logo" />
                </article> 


            </article>
        </div>
    </section>
  )
}

export default TopBar