
import './Section.scss';
export const Section=(props)=><div className='section-container'>
    <h3 className='sectionHeading'>{props.heading}</h3>
    {props.children}

</div>