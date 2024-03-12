import React from 'react';

const ReactFEatures = () =>{
    return(
        <SectionComponent id="section" className="section" title="title inside section component"> 
            <h1>section component</h1>
        </SectionComponent>
    )
}

function SectionComponent ({title , ...props}){
    return(
        <section {...props}>
            <h1>{title}</h1>
        </section>
    )
}

export default ReactFEatures;

//so in this file we use the custom SectionComponent and inside that use the html section tag and if we need to pass the attributes like id
//for the section tag we need to send it as a props also because it doesn't take it automatically as a props or an attribute.
//and we use Restproperty (...props) which group the remainng props  apart from the title passed as an separate props to an SectionCpmponent
//and remaining props id and className are passed as an restpropey prop and all remaingn props are set to the section tag in the SectionComponent.


