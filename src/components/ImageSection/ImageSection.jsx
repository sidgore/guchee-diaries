
import './ImageSection.scss';
export const ImageSection = (props) => <div className='image-section-container'>

    <div className='leftColumn'>
        <h3 className='sectionHeading'>{props.heading}</h3>
        {props.children}
    </div>
    <div className='rightColumn'>

        <img className='image' src='https://clubmahindra.gumlet.io/blog/media/section_images/shuttersto-b9d5e12a4e1142e.jpg?w=1800&dpr=2.0' />

    </div>



</div>