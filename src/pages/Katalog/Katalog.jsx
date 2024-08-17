import React, {useEffect} from 'react'
import Aksessuar from '../../components/Aksessuar/Aksessuar'

const Katalog = () => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      < Aksessuar />
    </>
  )
}

export default Katalog
