import TweetBird from '../image/tweet-bird.jpg';
import './footer.css'


const Footer = () => {
    return (
        <div className='footStyle'>
            <img className='birdie'
            alt="tweet" src={TweetBird} 
            height='auto' width='25px' />
            <p className='tag'>Designed and built by</p>
            <span>friendly</span>
            <p className='support'>App Support</p>
        </div>
    )
}

export default Footer;