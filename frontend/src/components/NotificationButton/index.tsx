import icon from '../../assets/notification-icon.svg'
import axios from 'axios'

import './styles.css'
import { BASE_URL } from '../../utils/request'

type Props = {
    saleId: number
}

function handleClick(id: number) {
    axios.get(`${BASE_URL}/sales/${id}/notification`)
    .then(response => {
        
    })
}

function NotificationButton( {saleId} : Props ) {

    return (
        <div className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
            <img src={icon} alt="Notificar" />
        </div>
    )
}

export default NotificationButton