import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { GlobalState } from "../../GlobalState"
import _ from "lodash"
import Messages from "./Messages"



function MessageBuyer() {
   


let { id } = useParams()     

  return (<div>
    
         <Messages  id={id} />
      
    


  </div>);
}

export default MessageBuyer;











