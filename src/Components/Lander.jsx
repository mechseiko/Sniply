import React from 'react';
import Hero from './Hero'
import Shortener from './Shortener'
import Footer from './Footer'

function Lander(props) {
    return (
        <div className='h-screen *:mb-10'>
            <Hero />
            <Shortener />
            <Footer />
        </div>
    );
}

export default Lander;