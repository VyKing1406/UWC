import { SideBar } from '~/components';
import styles from './Chat.module.scss';
import clsx from 'clsx';
import { id1, id2, id3 } from '~/image/employee';
function Chat() {
    const employeeAvt = [id1, id2, id3, id1, id2, id3, id1, id2, id3, id1, id2];
    const employeeData = JSON.parse(localStorage.getItem('employeeData'));
    return (
        <div className={clsx(styles.container)}>
            <img
                className={clsx(styles.chat_img)}
                src={
                    'https://s3.cloud.cmctelecom.vn/tinhte1/2015/04/3015443_Tinhte_huong_dan_bien_Facbeook_Messenger_web_app_native_HEADER.png'
                }
            />
        </div>
    );
}

export default Chat;
