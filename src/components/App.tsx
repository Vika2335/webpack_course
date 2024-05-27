import { useState } from 'react';
import * as classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import About from '@/pages/about/About';
import avatarPng from '@/assets/profile.jpg';
import list from '@/assets/list.png';
import Cat from '@/assets/cat.svg'

function TODO() {
  TODO2()
}

function TODO2() {
  throw new Error();
}

export const App = () => {
  const [count, setCount] = useState<number>(0);

  const increment = () => {
    //setCount(prev => prev + 1)
    TODO()
  }
  /*if(__PLATFORM__ === 'desktop') {
    return <div>ISDESCTOPPLATFORM</div>
  }

  if(__PLATFORM__ === 'mobile') {
    return <div>ISMOBILEPLATFORM</div>
  }

  if(__ENV__ === 'development') {
    //addDevTools()
  }*/

  return (
    <div data-testid={'App.DataTestId'}>
      <h1 data-testid={'Platform'}>PLATFORM={__PLATFORM__}</h1>
      <div>
        <img width={100} height={100} src={avatarPng} alt='No image'/>
        <img width={100} height={100} src={list} alt='No image'/>
      </div>
      <div>
        <Cat className={classes.icon} width={100} height={100}/>
      </div>
      <Link to={'/about'}>About</Link>
      <br/>
      <Link to={'/shop'}>Shop</Link>
      <h1 className={classes.value}>{count}</h1>
      <button className={classes.button} onClick={increment}>inc</button>
      <span></span>
      <About />
    </div>
  )   
};
