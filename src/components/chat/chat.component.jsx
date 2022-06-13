import './chat.styles.css'
import LoremIpsum from 'react-lorem-ipsum';

const Chat = () => {
    return (
        <div>
            <div className='chat-header d-flex flex-column mb-3'>
                <div className='d-flex justify-content-between'>
                    <span>Consumer 1</span>
                    <span>Executor 1</span>
                </div>
                <div className='d-flex justify-content-between'>
                    <span>Executor 1</span>
                    <div>
                        <img src='../../calendar.png' alt='' style={{height:20}} />
                        <span>Joined January 2021</span>
                    </div>
                </div>
            </div>
            <div className='chat-section'>
                <LoremIpsum/>
                <LoremIpsum/>
                <LoremIpsum/>
                <LoremIpsum/>
            </div>
        </div>
    )
}

export default Chat;
