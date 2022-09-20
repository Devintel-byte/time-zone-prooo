import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductAlert from './image/product-alert.png'
import TimeIcon from './image/time-icon.png';
import AppStore from './image/app-store.png';
import SnapShot1 from './image/feature1.png';
import SnapShot2 from './image/feature2.png';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Footer from './Footer/footer';
import './App.css';
import RightBarContainer from './RightBar-Container/rightBar-container';

function App() {
  return (
    <div className='main-container'>
      <img className='product-tag' 
        alt='product-alert' src={ProductAlert}
        />
      <div className='col-wrapper'>
      <div className='left-bar'>
        <img className='time-icon' 
        alt='time' src={TimeIcon} 
        height='auto' width='60px'
        />
        <p className='time-tag'>Time Zone Pro</p>
        <button className='btn'>For iPhone, iPad and Mac</button>

        <div className='text-menu'>
          <h1>What time is it there?
          </h1>
          <p className='followUp'>
            Never ask that again
          </p>
          <p className='nextUp'>
            Quickly see the local time of your team, friends, and family.
          </p>
          <img className='app-store' 
          alt='app-store' src={AppStore} 
          height='auto' width='180px'
          />
         <nav className='link-list'>
         <ul>
            <li>
              <FontAwesomeIcon icon={faCheck} color='#fff' />
              iCloud Sync
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} color='#fff' />
              Time Scrubbing
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} color='#fff' />
              Widgets
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} color='#fff' />
              Dark mode
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} color='#fff' />
              Night indicator
            </li>
            <li>
              <FontAwesomeIcon icon={faCheck} color='#fff' />
              Mac and iPhone
            </li>
          </ul>
         </nav>
        </div>
         <RightBarContainer />
          <div className='feature'>
            <p>Featured on</p>
            <img 
            alt='feature-shot' src={SnapShot1} 
            height='auto' width='130px'
            />
            <img 
            alt='feature-shot' src={SnapShot2} 
            height='50px' width='130px'
            />
          </div>
        <br />
        <br />
        <Footer />
      </div>
      </div>
    </div>
  )
}
export default App;
