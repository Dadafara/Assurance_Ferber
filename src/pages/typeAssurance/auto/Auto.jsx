import React from 'react'
import Helmet from '../../components/helmet/Helmet'

import AutoHeader from './AutoHeader';
import SectionBanner from './section/SectionBanner';

const Home = () => {
  return ( 
    <Helmet>
       <AutoHeader/>
       <SectionBanner/>
    </Helmet> 
  )
}

export default Home