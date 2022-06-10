import './service-form.styles.css'
import Sidebar from '../../components/sidebar/sidebar.component';

const ServiceForm = () => {
    return (
        <div className='d-flex'>
            <div>
                <Sidebar/>
            </div>
            <div>
                <div>
                    <span>Income Tax Return of India</span>
                    <img alt='' />
                    <img alt='' />
                </div>
                
            </div>
            <div>
                <span>Chat</span>

            </div>
        </div>
    )
}

export default ServiceForm;
