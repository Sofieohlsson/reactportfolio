import React from 'react'; 
import Hero from '../components/Hero'; 
import Content from '../components/Content';

function AboutPage(props) {
    
    return(
        <div>
            <Hero title={props.title} />

            <Content>

                <p>Roads go ever ever on,</p>
                <p>Over rock and under tree,</p>
                <p>By caves where never sun has shone,</p>
                <p>By streams that never find the sea;</p>
                <p>Over snow by winter sown,</p>
                <p>And through the merry flowers of June,</p>
                <p>Over grass and over stone,</p>
                <p>And under mountains of the moon.</p>
                <br />
                <p>Roads go ever ever on</p>
                <p>Under cloud and under star,</p>
                <p>Yet feet that wandering have gone</p>
                <p>Turn at last to home afar.</p>
                <p>Eyes that fire and sword have seen</p>
                <p>And horror in the halls of stone</p>
                <p>Look at last on meadows green</p>
                <p>And trees and hills they long have known.</p>

            </Content>
        </div>
    );
}

export default AboutPage; 