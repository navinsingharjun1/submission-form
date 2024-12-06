import Completed from "../Completed/Completed";
import Pending from "../Pending/Pending";
import Inprogress from "../Inprogress/Inprogress";

function Status (props) {
    let {Todo, selectedvalue} = props

    return (
        <>
        <div id="status">
        <Inprogress Todo={Todo} selectedvalue={selectedvalue}/>
        <Completed Todo={Todo} selectedvalue={selectedvalue}/>
        <Pending Todo={Todo} selectedvalue={selectedvalue}/>
        </div>
        </>
    )
}

export default Status