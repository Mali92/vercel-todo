import { Fragment } from "react";


const ShowHiddenLists = ( {children, isShown} ) => {
    return (
       <Fragment>
         { isShown ? children : <Fragment></Fragment> }
       </Fragment>
    )
    
}

export default ShowHiddenLists;