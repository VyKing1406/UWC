import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import { SideBar } from '~/components';
import styles from './Home.module.scss';
import clsx from 'clsx';
import loginBackground from '~/image/loginBackground.jpg';
function Home() {
    return (
        <div>
            <h1>Home</h1>
            <SideBar />
            <Carousel className={clsx(styles.container)}>
                <Carousel.Item interval={2000} className={clsx(styles.flex_item)}>
                    <img
                        className={clsx(styles.slide_img, 'd-block', 'w-100')}
                        src={loginBackground}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} className={clsx(styles.flex_item)}>
                    <img
                        className={clsx(styles.slide_img, 'd-block', 'w-100')}
                        src={loginBackground}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item interval={2000} className={clsx(styles.flex_item)}>
                    <img
                        className={clsx(styles.slide_img, 'd-block', 'w-100')}
                        src={loginBackground}
                        alt="Third slide"
                    />
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
