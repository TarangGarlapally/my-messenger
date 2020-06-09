import React, { useState } from "react";

import Fab from "@material-ui/core/Fab";
import Zoom from "@material-ui/core/Zoom";
import SendIcon from "@material-ui/icons/Send";

function CreateArea() {
  const [isExpanded, setExpanded] = useState(false);



  

  function expand() {
    setExpanded(true);
  }

  return (
    <div>
      <form className="create-note">
        

        <textarea
          name="content"
          onClick={expand}
          placeholder="Send a message..."
          rows={isExpanded ? 2 : 1}
        />
        <Zoom in={isExpanded}>
          <Fab >
            <SendIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
