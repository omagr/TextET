import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Home(props) {


    const [text, settext] = useState('Enter Your Text');


    const textareaclick = () => {
        console.log('textarea is clicked');
        settext("");
    }

    const handleupclick = () => {
        console.log('submit btn is click and text is converted to uppercase');
        let newtext = text.toUpperCase();
        settext(newtext);
        // props.showaelrt('text is uppercase', "success")
    }

    const handlelowclick = () => {
        console.log('submit btn is click and text is converted to uppercase');
        let newtext = text.toLowerCase();
        settext(newtext);
        // props.showaelrt('text is lowercase', "success")

    }

    const handlecapclick = () => {
        console.log('submit btn is click and text is converted to uppercase');


        let newtext = text.split("  ");

        for (let i = 0; i < newtext.length; i++) {
            newtext[i] = newtext[i][0].toUpperCase() + newtext[i].substr(1);
        }
        newtext.join(" ");
        console.log(newtext.join(" "));
        settext(newtext);
    }

    const handleupchange = (event) => {
        console.log('textarea change is working')
        settext(event.target.value);
    }


    return (
        <div className={`mb-3 container  textform my-4`} style={props.myStyle}>
            <h1 >{props.heading}</h1>
            <textarea className="form-control" value={text} onChange={handleupchange} style={{ backgroundColor: props.mode == 'light' ? 'grey' : 'white', resize: 'none' }} onClick={textareaclick} id="textbox" rows="10"></textarea>
            <button className='btn btn-primary my-3 ' onClick={handleupclick}>convert to uppercase</button>
            <button className='btn btn-primary my-3 mx-3' onClick={handlelowclick} >convert to uppercase</button>
            <button className='btn btn-primary my-3 ' onClick={handlecapclick} >convert to uppercase</button>
            <div className="container my-4">
                <h1>Text Summery</h1>
                <p> {text.split(" ").length} words and {text.length} chracters</p>
                <p> {0.008 * text.split(" ").length} Mins To Read</p>
                <h2>summery</h2>
                <p style={props.myStyle}>{text}</p>
            </div>
        </div>
    )
}
Home.propTypes = {
    text: PropTypes.string.isRequired
}