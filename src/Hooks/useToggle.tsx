import React from "react";


function useToggle(){
    const [show, setShow] = React.useState<boolean>(false);

    function handletoggle(){
        setShow(prev => !prev);
    }

    return {
        show, 
        handletoggle
    }
}

export default useToggle;