import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { SideBar } from '~/components';
import styles from './Home.module.scss';
import clsx from 'clsx';
import { slide_1, slide_2, slide_3 } from '~/image';
function Home() {
    return (
        <div className={clsx(styles.home_page)}>
            <Carousel className={clsx(styles.container)}>
                <Carousel.Item interval={2000} className={clsx(styles.flex_item)}>
                    <img className={clsx(styles.slide_img, 'd-block', 'w-100')} src={slide_1} alt="First slide" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} className={clsx(styles.flex_item)}>
                    <img className={clsx(styles.slide_img, 'd-block', 'w-100')} src={slide_2} alt="Second slide" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} className={clsx(styles.flex_item)}>
                    <img className={clsx(styles.slide_img, 'd-block', 'w-100')} src={slide_3} alt="Third slide" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Home;
