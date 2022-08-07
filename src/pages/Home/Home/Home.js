import React from 'react'
import Navigation from '../../shared/Navigation/Navigation'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import Banner from '../Banner/Banner'
import IconPart from '../IconPart/IconPart'
import Services from '../Services/Services'



const Home = () => {
  return (
    <>
   <Navigation></Navigation>
   <Banner></Banner>
   {/* <IconPart></IconPart> */}
   <Services></Services>
   <AppointmentBanner></AppointmentBanner>
   </>
  )
}

export default Home