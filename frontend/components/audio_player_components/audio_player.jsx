import React from "react";
import {useState, useEffect, useRef} from "react";


const AudioPlayer = (props) => {
    // console.log('AudioPlayer Props', props)
    const [duration, setDuration] = useState();
    const [currentTime, setCurrentTime] = useState();
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTrack, setCurrentTrack] = useState(-1);
    const [volume, setVolume] = useState(0.5)
    const [prevVolume, setPrevVolume] = useState(80)

    const progressBar = useRef();
    const audioPlayer = useRef();
    const animationRef = useRef();
    const volumeSlider = useRef();
    
    
    useEffect(() => {    
        const audio = document.getElementById("audioPlayer");
        audio.volume = volume
        const AudioData = () => {
            setDuration(audio.duration);
            setCurrentTime(audio.currentTime);
        }
        const updateTime = () => setCurrentTime(audio.currentTime);

        audio.addEventListener("loadeddata", AudioData);
        audio.addEventListener("timeupdate", updateTime);

        isPlaying ? audio.play() : audio.pause();
        isPlaying ? animationRef.current = requestAnimationFrame(nowPlaying) : cancelAnimationFrame(animationRef.current)

        if (Math.floor(audioPlayer.current.currentTime) === Math.floor(duration)) {
            nextTrack()
        }

        return () => {
            audio.removeEventListener("loadeddata", AudioData);
            audio.removeEventListener("timeupdate", updateTime);
        }
    });

    useEffect(() => {
        setCurrentTrack(props.playing);
        if (props.playing !== null) setIsPlaying(true)
    }, [props.playing])

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
            audioPlayer.current.currentTime = progressBar.current.value;
        }
    }

    const clickChange = (e) => {
        let clickedX = (e.pageX - progressBar.current.offsetLeft) / progressBar.current.offsetWidth;
        audioPlayer.current.currentTime = (clickedX * duration);
        progressBar.current.value = currentTime
    }

    const muteToggle = () => {
        if (volumeSlider.current.value != 0) {
            const temp = volumeSlider.current.value
            setPrevVolume(temp)
            setVolume(0) 
            volumeSlider.current.value = 0
        } else {
            setVolume(prevVolume/100)
            volumeSlider.current.value = prevVolume
        }
    }
    

    const prevTrack = () => {
        if (currentTime > 3) {
            audioPlayer.current.currentTime = 0
            return
        }
        if (currentTrack === 0) {
            setCurrentTrack(props.player.length - 1)
        } else {
            setCurrentTrack(currentTrack - 1)
            
        }
    }

    const nextTrack = () => {
        console.log(currentTrack, props.player)
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
                        
                    </div>
            
                    {/* duration */}
                    <div className="duration"> { props.player[currentTrack] ? currentTimeCalc(duration) : "00:00"}</div>
                </div>
                
        

            </div>

            <div className="volume-controls"> 
            <div className="volume-mute" onClick={muteToggle}>
                {volume === 0 ? <span className="material-symbols-outlined">volume_off</span>  :
                <span className="material-symbols-outlined">volume_up</span>
                }
            </div>
                <input type="range" ref={volumeSlider} className="volume" defaultValue={80} min={0} max={100}  onChange={(e) => setVolume(e.target.value/100)} />
            </div>

        </div>
    )

}

export default AudioPlayer;