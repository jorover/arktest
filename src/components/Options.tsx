import React from 'react'
import { options } from '../ClientData'
import Marker from '../marker.png'
import EachOption from './EachOption'
import SideArrow from '../sarr.png'


interface data{
  datas: options[]
}

const Options:React.FC<data> = ( {datas}:data ) => {
 
  return (
    <section className="optionSection">
      <article className="optionsIndex">
        {
          datas &&
            <>
              <EachOption
                option={datas[0].dine}
                marker={Marker}
                itemClass="eachOption" />

              <EachOption
              option={datas[0].takeAway}
              marker={Marker}
                itemClass="eachOption"  />

              <EachOption
                option={datas[0].delivery}
                marker={Marker}
                itemClass="eachOption"  />
            </>
        }
       </article>

        <figure>
          <img src={SideArrow} alt="sideArrow-logo" className="arrow-side" />
        </figure>

    </section>
  )
}

export default Options