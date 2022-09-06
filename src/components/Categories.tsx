import React from 'react'
import { categoryList } from '../CategoryData'
import CategoryLogo from './CategoryLogo'
import LogoOne from '../logoOne.png'
import CategoryContent from './CategoryContent'
import LogoTwo from '../u.png'
import LogoThree from '../time.png'
import LogoFour from '../inv.png'
import LogoFive from '../cre.png'

const Categories = () => {
  return (
      <section className="categoryContent">
        <h4> My Category </h4>
            <ul>
                {
                    categoryList.map(item => {
                        return (
                            <li key={item.id}> {item.category} </li>
                        )
                    })
                }
            </ul>
            <CategoryLogo
            logoSrc={LogoOne}
            logoName={`logoOne-logo`} />
            <CategoryContent
            imgTextOne="Visibility"
            imgSrc={LogoOne}
            imgTextTwo="Public"
            imgSrc2={LogoTwo} />

            <CategoryContent
            imgTextOne="Availability"
            imgSrc={LogoOne}
            imgTextTwo="More than 30hr/week"
            imgSrc2={LogoThree} />

            <CategoryContent
            imgTextOne="Booth Completion"
            imgSrc=""
            imgTextTwo="Add Work History"
            imgSrc2={LogoFour} />

            <CategoryContent
            imgTextOne="Inventory"
            imgSrc=""
            imgTextTwo="My Inventory"
            imgSrc2={LogoFour} />

            <CategoryContent
            imgTextOne="Bids"
            imgSrc=""
            imgTextTwo="50 available connects"
            imgSrc2={LogoFive} />

      </section>
    
  )
}

export default Categories