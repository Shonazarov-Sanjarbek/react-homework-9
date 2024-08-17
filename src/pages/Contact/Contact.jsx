import React, {useEffect} from 'react'
import Connection from '../../components/Connection/Connection'

const Contact = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      < Connection />
    </div>
  )
}

export default Contact
