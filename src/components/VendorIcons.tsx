import React from 'react'
import VendorIcon from './VendorIcon'
import VendorOne from '../directions.png'
import VendorTwo from '../save.png'
import VendorThree from '../mapIcon.png'
import VendorFour from '../phone.png'
import VendorFive from '../share.png'

const VendorIcons = () => {
  return (
    <section className="vendorIconsSection">
        <VendorIcon
        vendorImg={VendorOne}
        vendorText="Directions" />

        <VendorIcon
        vendorImg={VendorTwo}
        vendorText="Save" />

        <VendorIcon
        vendorImg={VendorThree}
        vendorText="Nearby" />

        <VendorIcon
        vendorImg={VendorFour}
        vendorText="Send to your phone" />

        <VendorIcon
        vendorImg={VendorFive}
        vendorText="Share" />
    </section>
  )
}

export default VendorIcons