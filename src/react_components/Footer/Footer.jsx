import React from "react";
import {useGetMetaInfoQuery} from "../../redux/api";
import {ApiHandler} from "../Containers/ApiHandler";


function Footer({data}) {

    const message = `Company data: ${JSON.stringify(data)}`
    return (
        <div>
            {
                data
                    ? <div>{message}</div>
                    : null
            }
        </div>
    )
}

const HandlerContainer = ({user}) => {
    return <ApiHandler func={useGetMetaInfoQuery} user={user} Component={Footer}/>
}

export default HandlerContainer;