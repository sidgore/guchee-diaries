

import ImageSection from './components/ImageSection';
import Section from './components/Section'

import './Places.scss'

export default function Places() {
    return (
        <main style={{ padding: "55px 0 0 0", margin: 'auto',backgroundColor:'lightgoldenrodyellow' }}>

            <div className='banner-image-container'>
                <h1>NAINITAL</h1>
            </div>


           
            <Section heading={'HOW TO REACH?'}>
                <p>This is a section</p>
            </Section>

            <Section heading={'USEFUL CONTACTS'}>
                <p>This is a section</p>
            </Section>

            <Section heading={'TOP 5 PLACES'}>
                <p>This is a section</p>
            </Section>

            <Section heading={'OUR EXPERIENCE'}>
                <p>This is a section</p>
            </Section>

            <ImageSection heading={'/ weekend breaks'} righAligned>
                <p>From iconic coasts to quaint market towns, adventurous experiences to relaxing spa weekends, big cities to remote landscapes, these are the best weekend breaks in the UK.</p>
            </ImageSection>
        </main>
    );
}