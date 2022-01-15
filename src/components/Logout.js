import React from "react";
import { useHistory } from "react-router-dom"

function Logout(){
    const history = useHistory()

    return <>{history.push("/")}</>
}

export default Logout