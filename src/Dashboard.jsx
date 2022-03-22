import nainital_01 from '../src/images/nainital/nainital_01.png';
import './Dashboard.scss'

export default function Dashboard() {
    return (
        <main className='container' >

            <div className='banner-container'>
                <img src={nainital_01} />
                <p>Nainital</p>
                <button title='Start the Journery Now'/>

            </div>
            <div className='banner-container'>
                <img src={'https://clubmahindra.gumlet.io/blog/media/section_images/shuttersto-b9d5e12a4e1142e.jpg?w=1800&dpr=2.0'} />

                <p>Mussourie</p>
                <button title='Start the Journery Now'/>
            </div>
        </main>
    );
}