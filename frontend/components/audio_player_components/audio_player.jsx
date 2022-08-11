import React from "react";
import {useState, useEffect, useRef} from "react";

const AudioPlayer = (props) => {
    const [duration, setDuration] = useState();
    const [currentTime, setCurrentTime] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [clickedTime, setClickedTime] = useState();
    const [currentTrack, setCurrentTrack] = useState(0);

    const progressBar = useRef();
    const audioPlayer = useRef();
    const animationRef = useRef();
    

    
    useEffect(() => {    
        // console.log("currentTime" , currentTime)
        const audio = document.getElementById("audioPlayer");
        

        const AudioData = () => {
            setDuration(audio.duration);
            setCurrentTime(audio.currentTime);
        }
        setCurrentTrack(props.playing)

        const updateTime = () => setCurrentTime(audio.currentTime);

        audio.addEventListener("loadeddata", AudioData);
        audio.addEventListener("timeupdate", updateTime);

        isPlaying ? audio.play() : audio.pause();
        isPlaying ? animationRef.current = requestAnimationFrame(nowPlaying) : cancelAnimationFrame(animationRef.current)

        return () => {
            audio.removeEventListener("loadeddata", AudioData);
            audio.removeEventListener("timeupdate", updateTime);
            // console.log("return hit")
        }
    }), [progressBar];

    const currentTimeCalc = (secs) => {
        const minutes = Math.floor(secs/60);
        const seconds = Math.floor(secs % 60);
        const returnSeconds = seconds < 10 ? `0${seconds}` : seconds
        const returnMinutes = minutes < 10 ? `0${minutes}` : minutes
        return(`${returnMinutes}:${returnSeconds}`)
    }

    const nowPlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime
        progressBar.current.style.setProperty('--progress-bar-left', `${progressBar.current.value/audioPlayer.current.duration*100}%`)
     
        setCurrentTime(progressBar.current.value)
        animationRef.current = requestAnimationFrame(nowPlaying);

    }

    const changeRange = (e) => {
        if (e.type === "change"){
            console.log("dragged", progressBar.current.value)
            audioPlayer.current.currentTime = progressBar.current.value;
        }
        // progressBar.current.style.setProperty('--progress-bar-left', `${progressBar.current.value/audioPlayer.current.duration*100}%`)
        // setCurrentTime(progressBar.current.value)
    }

    const clickChange = (e) => {
        console.log(e)
        let clickedX = (e.pageX - progressBar.current.offsetLeft) / progressBar.current.offsetWidth;
        audioPlayer.current.currentTime = (clickedX * duration);
        console.log("CLICKED", currentTime )
        progressBar.current.value = currentTime
    }

    

    const prevTrack = () => {
        if (currentTrack === 0) {
            setCurrentTrack(props.player.length - 1)
        } else {
            setCurrentTrack(currentTrack - 1)
            
        }
    }

    const nextTrack = () => {
        if (currentTrack === props.player.length - 1) {
            setCurrentTrack(0)
        } else {
            setCurrentTrack(currentTrack + 1)
            
        }
    }


    return (
        <div className="audio-player-container">
            <div>
            <audio src={props.player[currentTrack] ? `${props.player[currentTrack].audioUrl}` : null} id="audioPlayer" ref={audioPlayer}></audio>

            <div className="current-track-info">
                { props.player[currentTrack] ? props.player[currentTrack].name: null}
            </div>

            </div>

            <div className="player-controls">
                <div className="control-top">

                    {/* previous button */}
                    <div > <span onClick={prevTrack} className="material-symbols-outlined">skip_previous</span></div>
            
                    {/* play/pause */}
                    <div className="play-pause" >
                        {isPlaying ? <span onClick={() => setIsPlaying(false)} className="material-symbols-outlined">pause_circle</span> :
                        <span onClick={() => setIsPlaying(true)} className="material-symbols-outlined">play_circle</span> }    
                    </div>

                    {/* skip button */}
                    <div className="skip-button"><span onClick={nextTrack} className="material-symbols-outlined">skip_next</span></div>
                </div>
                <div className="control-bottom">
                    {/* current time */}
                    <div className="current-time">{props.player[currentTrack] ? currentTimeCalc(currentTime) : "00:00"}</div>
            
                    {/* progress bar */}
                    <div>
                        <input type="range" ref={progressBar} onChange={changeRange} onClick={clickChange} max={duration} className="progressBar"/>
                        {/* <input type="range" ref={progressBar}  onClick={clickChange} max={duration} className="progressBar"/> */}
                    </div>
            
                    {/* duration */}
                    <div className="duration"> { props.player[currentTrack] ? currentTimeCalc(duration) : "00:00"}</div>
                </div>
                
        

            </div>

            <div className="volume">
                <p>volume</p>
            </div>

        </div>
    )

}

export default AudioPlayer;