import React from 'react'

interface vendorIcon {
    vendorImg:string,
    vendorText:string
}

const VendorIcon:React.FC<vendorIcon> = ({vendorImg, vendorText}:vendorIcon) => {
  return (
    <>
        <article className="vendorIcon">
            <figure className="vendorBg">
                <img src={vendorImg} alt="" />
            </figure>

            <article>
                <p> {vendorText} </p>
            </article>
        </article>
    </>
  )
}

export default VendorIcon