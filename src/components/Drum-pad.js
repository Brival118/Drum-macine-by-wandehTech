import { render } from "react-dom"

export default function DrumPad({title,color="",soundUrl}){
    const playAudio =(url)=> {
        new Audio(url).play();
    }
    return(
        <>
                <div className="drum-pad" style={{backgroundColor: `${color}`}} id="chord-1"
                onClick={()=>playAudio(soundUrl)}
                >
                    {title}   
                </div>
                
        </>
    )

}