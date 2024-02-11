import React from 'react'
import './main.scss'
import ServerOne from '../ServerOne/ServerSection'
import IpSection from '../IpSection/IpSection'
import FirewallSection from '../Firewall/FirewallSection'
import Footer from '../Footer/Footer'

const Main = () => {
  return (
    <div className='main'>
        <ServerOne />
        <IpSection />
        <FirewallSection />
        <Footer />
    </div>
  )
}

export default Main