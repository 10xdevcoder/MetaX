import { type } from 'os';
import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import styled from 'styled-components';


const Tab = styled.button`
    padding: 10px 60px;
    cursor: pointer;
    opacity:0.6;
    bacground: white; // this is white but i can change it to some thing else later
    border: 0;
    outline: 0;
    ${({ active }) =>
        active &&
        `border-bottom: 2px solid black;
         opacity: 1;
`
    }
    `;

//const types = ['Live Stream', 'Play video'];
function Toogle() {

    const [active, setActive] = useState(true)

    return (
        <div className='Toogle'>
            <Tab onClick={() => setActive(true)}> Live Stream </Tab>
            <Tab onClick={() => setActive(true)}> Play Video </Tab>
            {
                active ?
                    <div>

                    </div>
                    // document.getElementById("reactPlayer").style.display = none
                    : null
            }

        </div>
    )

}
class Xplay extends React.Component {




    constructor(props) {
        super(props);

        this.state = {
            inputvalue: "",
            url: ""
        }
    }
    handleChange = (event) => {
        this.setState({ inputvalue: event.target.value })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("clicked");
        this.setState({ url: this.state.inputvalue })
    }

    render() {
        return (
            <>
                <Toogle />
                <div id='reactPlayer' className="reactPlayer" style={{ overflow: 'hidden' }}>
                    <header classame="ReactP">
                        <div>
                            <form onSubmit={this.handleSubmit}>
                                <input onChange={this.handleChange} style={{
                                    margin: '30px',
                                    width: '310px',
                                    height: '50px'
                                }}
                                    className="mt-2 border rounded p-4" type="text" placeholder="Input video URL" />
                                <button style={{ margin: '40px' }} className="rounded bg-blue-600 py-2 px-12 text-white m-16">Play Video</button>
                            </form>
                            <p style={{
                                overflow: 'hidden',
                                // display: 'flex',
                                position: 'relative',
                                left: '30px'
                            }}
                            >NOTE: The url of the video must be correct and surpported, if not it may cause the system to crash.</p>
                            <p style={{

                                position: 'relative',
                                left: '30px'
                            }}
                            >Supported URL includes YouTube, Facebook, Twitch, SoundCloud, Streamable, Vimeo, Wistia, Mixcloud, DailyMotion and Kaltura. </p>

                        </div>
                        <ReactPlayer

                            width='700px'
                            height='400px'
                            style={{
                                margin: '50px',
                                display: 'flex',
                                left: '40px'
                            }}

                            controls
                            url={this.state.url} />
                    </header >

                </div >
            </>
        );
    }
}

export default Xplay;
