import React from 'react'
import Typography from '@material-ui/core/Typography';
export default function TextContent() {
    const textContent = [
         "Hello, my name is James Glass. I was born and raised in Mountain View, California in the San Francisco Bay Area. I have always been interested in Art and Design, which I studied at Hampshire College in Amherst, Massachusetts. After college, I lived in Brooklyn, NY. Two years later, my thirst for adventure sent me to Seoul, South Korea where I initially worked as an English teacher and freelance Web Designer.",
         "These days, I have been working as a Front-End developer for PassBy Korea. My work has included individual projects in addition to larger Agile development work as part of a team of developers. I am proficient in HTML/CSS, Javascript/Typescript, Dart, Python, PHP, SQL as well as various frameworks such as Flutter, React, Vue, Node.Js and Flask. Thank You for checking out my website!"
         ]
    return (
        <div className="home-text">
            <h2 className="title">Bio</h2>
            {textContent.map((item,index) => (
                      <Typography variant={"body1"}  key={item.toLocaleUpperCase}>
                        {item}
                      </Typography>
                    ))}
            
        </div>
    )
}
