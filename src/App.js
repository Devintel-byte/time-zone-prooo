import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ProductAlert from './image/product-tag.svg';
import TimeIcon from './image/time-icon.png';
import AppStore from './image/appstore.svg';
import SnapShot1 from './image/macstories.svg';
import SnapShot2 from './image/9to5.svg';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import TweetBird from './image/tweet-bird.jpg';
import friendSnippet from './image/friendly-logo.svg'
import PhoneView from './image/phone-image.png';
import './App.css';

function App() {
  return (
    <div className='body-wrapper'>
      <div>
          <img className='product-tag'
            alt='product-alert' src={ProductAlert}
          />
          </div>
      <div className='col-main'>
        <div className='col-left'>
        <img className='time-icon' 
        alt='time' src={TimeIcon} 
        height='60px' width='60px'
        />
        <p className='time-tag'>Time Zone Pro</p>
        <button className='btn'>For iPhone, iPad and Mac</button>

        <h1 className='header-text'>
          What time is it there?
        </h1>
        <div className='followUp'>
            Never ask that again
        </div>
        <div className='nextUp'>
            Quickly see the local time of your team, friends, and family.
        </div>
          <a href='#main' className='app-link'  target='_blank'>
            <img className='app-store' 
            alt='app-store' src={AppStore} 
            height='67px' width='200px'
          />
          </a>

          <div className='col-links'>
          <div>
          <FontAwesomeIcon icon={faCheck} color='#fff' style={{height: '8px', width: '10px', padding: '4px' }} />
            iCloud Sync
          </div>
          <div>
          <FontAwesomeIcon icon={faCheck} color='#fff' style={{height: '8px', width: '10px', padding: '4px' }} />
            Time Scrubbing
          </div>
          <div>
          <FontAwesomeIcon icon={faCheck} color='#fff' style={{height: '8px', width: '10px', padding: '4px' }} />
            Widgets
          </div>
          <div>
          <FontAwesomeIcon icon={faCheck} color='#fff' style={{height: '8px', width: '10px', padding: '4px' }} />
            Dark mode
          </div>
          <div>
          <FontAwesomeIcon icon={faCheck} color='#fff' style={{height: '8px', width: '10px', padding: '4px' }} />
            Night indicator
          </div>
          <div>
          <FontAwesomeIcon icon={faCheck} color='#fff' style={{height: '8px', width: '10px', padding: '4px' }} />
            Mac and iPhone
          </div>
          </div>

          <div className='col-right'>
          <img className="rightView" 
            alt="phone" src={PhoneView}
            />
          </div>

          <div className='col-end'>
          <div className='feature'>
            Featured on
         
            <div className='boulders'>
              <a href='#main' className='boulder-1' target='_blank'>
                <img 
                alt='feature-shot' src={SnapShot1} 
                width='120px'/> </a>
              <a href='#main' className='boulder-2' target='_blank'>
              <img 
              alt='feature-shot' src={SnapShot2} 
              width='120px'/> </a>
            </div>
          </div>
            <a href='#main' className='tweetbird' target='_blank'>
               <img className='birdie'
               alt="tweet" src={TweetBird} 
               width='25px' />
            </a>
            <div className='tribute'>Designed and built by</div>
             <a href='#main' className='friend' target='_blank'>
              <img alt='friend' src={friendSnippet} 
              width='70px' height='21px' />
             </a>

             <div className='support-tag'>
              <a href='#main'>
              App Support
              </a>
             </div>

          </div>

        </div>

          
    </div>
  </div>
  )
}
export default App;
