import React, {useEffect} from 'react';
import cl from './Videos.module.css';
import {useDispatch, useSelector} from "react-redux";
import {getVideos} from "../../redux/thunks/videosThunks";
import Video from "./Video/Video";
import uuid from "react-uuid";

// TODO добавить в навигацию
function Videos(props) {

    const {videos} = useSelector(store => store.videosReducer)
    const dispatch = useDispatch()
    // TODO определить complexID из пути /videos/1
    const complexID = 1
    // TODO передать его сюда

    useEffect(() => {
        dispatch(getVideos(complexID))
    }, [dispatch, complexID])
    // TODO uuid
    const mapVideos = videos?.map((video) => {
        return (
            <div className={cl.complex}>
                <Video {...video} key={uuid()}/>
            </div>)
    })

    return (
        <div className={cl.content}>
            <div className={cl.header}>Videos content</div>
            <div className={cl.complexes}>
                {mapVideos}
            </div>
        </div>
    );
}

export default Videos;
