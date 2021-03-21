import React from 'react';
import { HomePageBullets, HomePageMain, HomeSquaresSection } from '../../common';
 
const Home: React.FC = () => {
    return (
        <>
            <HomePageMain/>
            <HomePageBullets/>
            <HomeSquaresSection/>
        </>
    );
}
 
export default Home;