import React from 'react';
import cl from './Videos.module.css';
import {useParams} from "react-router-dom";
import Video from "./Video/Video";
import {useGetVideosQuery} from "../../redux/api";
import {nanoid} from "@reduxjs/toolkit";
import Loader from "../Loader";
import Message, {ERROR_TYPE} from "../Message/Message";
import {AuthContainer} from "../Containers/AuthContainer";
import {Videos} from "./Videos";


const VideosContainer = ({user}) => {
    const {complexID} = useParams()
    const {data: videos, isLoading, error} = useGetVideosQuery(complexID)

    if (isLoading) {
        return <Loader/>
    }
    if (error) {
        return <Message type={ERROR_TYPE} text={error.data.detail}/>
    }

    const mapVideos = videos.map((video) => {
        return (
            <div className={cl.complex}>
                <Video {...video} key={nanoid() + video.id}/>
            </div>
        )
    })

    return (
        <>
            <Videos
                user={user}
                videos={mapVideos}
            />
        </>
    )
}

const WrappedAuthContainer = () => {
    return <AuthContainer Component={VideosContainer}/>
}

export default WrappedAuthContainer;