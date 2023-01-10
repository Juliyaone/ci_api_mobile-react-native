import {useParams} from "react-router-dom";
import Loader from "../Loader";
import Message, {ERROR_TYPE} from "../Message/Message";
import React from "react";
import {useGetRateLinkQuery} from "../../redux/api";


export const RateLink = () => {
    const {rateID} = useParams()
    const {data: {link}, isLoading, error} = useGetRateLinkQuery(rateID)

    if (isLoading) {
        return <Loader/>
    }
    if (error) {
        return <Message type={ERROR_TYPE} text={error.data.detail}/>
    }
    return (
        <div>
            <div>
                Для оплаты перейдите по ссылке:
                <div>
                    <a href={link}>{link}</a>
                </div>
            </div>
        </div>
    )
}
