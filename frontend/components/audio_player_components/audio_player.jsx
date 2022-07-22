import React, {useState, useRef, useEffect} from "react";

const AudioPlayer = (props) => {

    const [isPlaying, setIsPlaying] = useState(false);
    const [duration, setDuration] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [currentTrack, setCurrentTrack] = useState(0);

    const audioPlayer = useRef();
    const progressBar = useRef();
    const animationRef = useRef();

    

    useEffect(() => {
        const seconds = Math.floor(audioPlayer.current.duration)
        console.log("useeffect duration hit")
        progressBar.current.max = seconds;
    }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);
   
    // useEffect(() =>  {
    //     console.log("fetching queue")
    //     props.fetchQueue(props.tracks)
    //     // togglePlayPause();
    // }, [props.tracks])

    // useEffect(() => {
    //     // audioPlayer.current.src = props.player[currentTrack].audioUrl
    //     // console.log(props.player)
    //     // console.log(props.player[0])
    //     console.log(props.player[currentTrack])
    // }, [props.player[0]] )


    const togglePlayPause = ()=> {
        const prevValue = isPlaying;
        setIsPlaying(!prevValue);
        if (prevValue){
            audioPlayer.current.play();
            animationRef.current = requestAnimationFrame(nowPlaying)
        } else {
            audioPlayer.current.pause();
            cancelAnimationFrame(animationRef.current)
        }
    }

    const skipNext = () => {
        setCurrentTrack(currentTrack + 1)
        console.log("track arr num", currentTrack)
      
    }

    const skipPrev = () => {
        setCurrentTrack(currentTrack - 1)
        console.log("track arr num", currentTrack)
        

    }

    const nowPlaying = () => {
        progressBar.current.value = audioPlayer.current.currentTime
        progressBar.current.style.setProperty('--progress-bar-left', `${progressBar.current.value/audioPlayer.current.duration*100}%`)
     
        setCurrentTime(progressBar.current.value)
        animationRef.current = requestAnimationFrame(nowPlaying);

    }

    const currentTimeCalc = (secs) => {
        const minutes = Math.floor(secs/60);
        const seconds = secs % 60;
        const returnSeconds = seconds < 10 ? `0${seconds}` : seconds
        const returnMinutes = minutes < 10 ? `0${minutes}` : minutes
        return(`${returnMinutes}:${returnSeconds}`)
    }

    const durationCalc = () => {
        // console.log(audioPlayer)
        const totalSeconds = Math.floor(audioPlayer.current.duration);
        const minutes = Math.floor(totalSeconds/60);
        const returnMinutes = minutes < 10 ? `0${minutes}` : minutes
        const returnSeconds = totalSeconds % 60;
        setDuration(`${returnMinutes}:${returnSeconds}`)
    }

    const changeRange = () => {
        audioPlayer.current.currentTime = progressBar.current.value
    progressBar.current.style.setProperty('--seek-before-width', `${progressBar.current.value/duration*100}%`)
    setCurrentTime(progressBar.current.value)
    }

 
    return (
        <div className="audio-player-container">
      
            <audio autoPlay={isPlaying} ref={audioPlayer}  src={ props.player[currentTrack] ? `${props.player[currentTrack].audioUrl}` : `https://kernify-seed.s3.us-west-1.amazonaws.com/Solid+Try+.mp3`}  onLoadedMetadata={ durationCalc}></audio> 
            
            <div className="current-track-info">
            { props.player[currentTrack] ? props.player[currentTrack].name: null}
            </div>

            {/* previous button */}
            <div > <span onClick={skipPrev} className="material-symbols-outlined">skip_previous</span></div>

            {/* play/pause */}
            <div className="play-pause" onClick={togglePlayPause}>
                {isPlaying ? <span className="material-symbols-outlined">play_circle</span> :
                <span className="material-symbols-outlined">pause_circle</span> }    
            </div>

            {/* skip button */}
            <div className="skip-button"><span onClick={skipNext} className="material-symbols-outlined">skip_next</span></div>

            {/* current time */}
            <div className="current-time">{currentTimeCalc(currentTime)}</div>

            {/* progress bar */}
            <div>
                <input type="range" ref={progressBar} defaultValue={0} onChange={changeRange} className="progressBar"/>
            </div>

            {/* duration */}
            <div className="duration">{duration}</div>

        </div>
    )
}


export default AudioPlayer