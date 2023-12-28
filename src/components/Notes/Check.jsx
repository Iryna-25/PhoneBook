import React from "react";
import { CheckCircle } from "react-bootstrap-icons";

const Check = ({isCompleted}) => {
    return(
        <div>
            { isCompleted &&
                <CheckCircle size={20} />
            } 
        </div>
    )
}

export default Check;