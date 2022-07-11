import React from "react";
import Header from "./ui_blocks/header";
import Content from "./ui_blocks/content";
import SideBar from "./ui_blocks/sidebar";
import MusicPlayer from "./ui_blocks/music_player";


const Home = () => (
    <div className="home-container">
        <Header />
        <SideBar />
        <Content />
        <MusicPlayer />
    </div>

)

export default Home;