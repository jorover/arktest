import React from 'react'
import EachOption from './EachOption'
import Map from '../mapIcon.png'
import Time from '../timing.png'
import Globe from '../globe.png'
import Phone from '../pnumber.png'
import Verify from '../verify.png'
import SuggestBtn from './SuggestBtn'

interface moreInfo{
    datas:any
}

const MoreOptions:React.FC<moreInfo> = ( {datas}:moreInfo ) => {
  return (
    <section className="moreOptionsContainer">
        <EachOption
        marker={Map}
        option={datas.clientAddress}
        itemClass="eachOption addOption"  />

        <EachOption
        marker={Time}
        option={datas.openTimes}
        itemClass="eachOption addOption"  /> 
        <small> {datas.update} </small> 

        <EachOption
        marker={Globe}
        option={datas.website}
        itemClass="eachOption addOption"  />

        <EachOption
        marker={Phone}
        option={`+${datas.phoneNumber}`}
        itemClass="eachOption addOption"  />

        <EachOption
        marker={Verify}
        option={`Claim the Business`}
        itemClass="eachOption addOption"  />
        <SuggestBtn />

    </section>
  ) 
}

export default MoreOptions