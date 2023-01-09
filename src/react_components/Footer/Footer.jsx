import React from "react";
import {useGetMetaInfoQuery} from "../../redux/api";
import Loader from "../Loader";
import Message, {ERROR_TYPE} from "../Message/Message";


function Footer() {
    const {data, isLoading, error} = useGetMetaInfoQuery()

    if (isLoading) {
        return <Loader/>
    }
    const message = `Company data: ${JSON.stringify(data)}`
    return (
        <div>
            <Message type={ERROR_TYPE} text={error?.data?.detail}/>
            {
                data
                    ? <div>{message}</div>
                    : null
            }
        </div>
    )
}

export default Footer;