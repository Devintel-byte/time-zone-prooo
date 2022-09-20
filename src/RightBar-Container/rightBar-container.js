import PhoneView from '../image/rightBarImage.png';
import './rightBar.css'

const RightBarContainer = () => {
    return (
        <div className="side-container">
            <img className="rightView" 
            alt="phone" src={PhoneView} />
        </div>
    )
}

export default RightBarContainer;