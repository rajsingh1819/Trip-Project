import React from 'react';
import "./Styles/subtitle.css";

function Subtitle({ subtitle }) {


    return (
        <h3 className='section_subtitle'>
            {subtitle}
        </h3>
    );
}

export default Subtitle;
