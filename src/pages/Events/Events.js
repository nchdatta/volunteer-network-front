import Footer from '../Footer/Footer';
import NavBar from '../Header/NavBar';
import EventCarts from './EventCarts';

const Events = () => {
    return (
        <>
            <div className='container'>
                <NavBar />
                <h2 className='my-3 text-center text-skyblue'>Events going on...</h2>
                <EventCarts />
            </div>

            <Footer />
        </>
    );
};

export default Events;