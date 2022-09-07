import React from 'react'
import BlackBg from './components/BlackBg'
import MapTwo from './components/MapTwo'
import { useParams } from 'react-router'
import { clientData, clients } from './ClientData'
import { checkForActive } from './btnActive'

const EachVendor = () => {

  const [newData, setNewData] = React.useState<clients | []>([])

  const params = useParams();

  React.useEffect(() => {
    const getItem = () => {
      const item:clients | any = clientData.find(t => t.id === Number(params.id))
      setNewData(item)
    
    }

    getItem();
    checkForActive();

  }, [params])


  return (
    <section className="homeContainer">
        <BlackBg
        blackBgContent="eachVendor"
        data={newData}
        openMenu="eachVendorMenu" />
        <MapTwo />
    </section>
  )
}

export default EachVendor