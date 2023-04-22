import React from 'react'
import Helmet from '../../components/helmet/Helmet'


import Section1 from './Section1';
import Section2 from './Section2';
import Footer from '../footer/Footer';
import Header from '../header/Header';
import SectionBenefice from './SectionBenefice';
import SectionGuide from './SectionGuide';
import SectionCommon from './SectionCommon';
import SectionPartenaire from './SectionPartenaire';
import SectionSinistre from './SectionSinistre';

const Home = () => {
  return ( 
    <Helmet>
       <Header/>
         <Section1/>
         <Section2/>
         <SectionCommon/>
         <SectionPartenaire/>
         <SectionSinistre/>
         <SectionGuide/>
         <SectionBenefice/>
       <Footer/>
    </Helmet> 
  )
}

export default Home