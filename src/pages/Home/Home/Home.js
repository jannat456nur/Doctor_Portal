import React from 'react';
import Navigation from '../../shared/Navigation/Navigation';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import IconPart from '../IconPart/IconPart';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            {/* <IconPart></IconPart> */}
            <AppointmentBanner></AppointmentBanner>
        </div>
    );
};

export default Home;