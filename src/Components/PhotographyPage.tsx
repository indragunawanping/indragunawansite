import React, { Fragment } from 'react';
import Carousel from "./Carousel";

const PhotographyPage = () => {
  let photographyUrl: JSX.Element[] = [];

  photographyUrl.push(
    <Fragment key='photography'>
      <img src="https://i.ibb.co/SXrN1gc/photography-0.png" alt="photography-0"/>
      <img src="https://i.ibb.co/tQTPw7m/photography-1.png" alt="photography-1"/>
      <img src="https://i.ibb.co/vX0HrJS/photography-2.png" alt="photography-2"/>
      <img src="https://i.ibb.co/PhzjZNq/photography-3.png" alt="photography-3"/>
      <img src="https://i.ibb.co/Gv5BY1v/photography-4.png" alt="photography-4"/>
      <img src="https://i.ibb.co/4sYZzf9/photography-5.png" alt="photography-5"/>
      <img src="https://i.ibb.co/dKXfyFL/photography-6.png" alt="photography-6"/>
      <img src="https://i.ibb.co/mSDnbBq/photography-7.png" alt="photography-7"/>
      <img src="https://i.ibb.co/k3QpHGp/photography-8.png" alt="photography-8"/>
      <img src="https://i.ibb.co/LxQkk6K/photography-9.png" alt="photography-9"/>
      <img src="https://i.ibb.co/NCtNVF5/photography-10.png" alt="photography-10"/>
    </Fragment>
  );

  return (
    <div>
      <Carousel imageComponents={photographyUrl}/>
    </div>
  )
};

export default PhotographyPage;
