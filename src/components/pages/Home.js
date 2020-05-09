import React from 'react';
import {Helmet} from 'react-helmet';
import Footer from '../Footer';
import Showcase from '../Showcase';
import cardData from '../cardData';
export default function Home() {
  return (
      <React.Fragment>
        <div className="Home">
          <Helmet>
            <title>PEC ACM Society</title>
            <meta name="title" content="Computer Science Society"/>
          </Helmet>
          <Showcase cardData={cardData}/>
        </div>
        <Footer/>
      </React.Fragment>
  );
}
