import React, { Fragment } from 'react';
import Carousel from "./Carousel";

const DesignPage = () => {
  let designUrl: JSX.Element[] = [];

  designUrl.push(
    <Fragment key='design'>
      <img src="https://i.ibb.co/9HjP0j0/design-0.png" alt="design-0"/>
      <img src="https://i.ibb.co/C0NgCsC/design-1.png" alt="design-1"/>
      <img src="https://i.ibb.co/SKj4j4D/design-2.png" alt="design-2"/>
      <img src="https://i.ibb.co/JR1Ffx7/design-3.png" alt="design-3"/>
      <img src="https://i.ibb.co/QmNCP35/design-4.png" alt="design-4"/>
      <img src="https://i.ibb.co/QkD98Pd/design-5.png" alt="design-5"/>
      <img src="https://i.ibb.co/DDfVKS2/design-6.png" alt="design-6"/>
      <img src="https://i.ibb.co/YkGSMZF/design-7.png" alt="design-7"/>
      <img src="https://i.ibb.co/nB75fJv/design-8.png" alt="design-8"/>
      <img src="https://i.ibb.co/cYptzDK/design-9.png" alt="design-9"/>
      <img src="https://i.ibb.co/WkVnFR7/design-10.png" alt="design-10"/>
    </Fragment>
  );

  return (
    <div>
      <Carousel imageComponents={designUrl}/>
    </div>
  )
};

export default DesignPage;
