import React, {useEffect, useId} from 'react';
import cl from './Videos.module.css';
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import {getVideos} from "../../redux/thunks/videosThunks";
import Video from "./Video/Video";


function Videos() {

    const {videos} = useSelector(store => store.videosReducer)
    const dispatch = useDispatch()
    const complexID = useParams()

    useEffect(() => {
        dispatch(getVideos(complexID.complexID))
    }, [dispatch, complexID])

    let key_id = useId()

    const mapVideos = videos?.map((video) => {
        return (
            <div className={cl.complex}>
                <Video {...video} key={key_id}/>
            </div>
        )
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