import DrumPad from "../components/Drum-pad";

const defaultaTheme = require('tailwindcss/defaultTheme')

export default function DrumPage(){
    return(
        <>

        <div id="drum-machine">
        <div id="display">
            <div className="keypad-container">
            <DrumPad title={'Q'} color={''} soundUrl={"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}/>
            <DrumPad title={'W'} soundUrl={"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}/>
            <DrumPad title={'E'} soundUrl={"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}/>
            <DrumPad title={'A'} soundUrl={"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}/>
            <DrumPad title={'S'} soundUrl={"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}/>
            <DrumPad title={'D'} soundUrl={"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}/>
            <DrumPad title={'Z'} soundUrl={"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}/>
            <DrumPad title={'X'} soundUrl={"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}/>
            <DrumPad title={'C'} soundUrl={"https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"}/>
            </div>
            </div>
        </div>

        </>
    )
}