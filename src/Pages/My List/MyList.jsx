import React from "react";

const MyList = () => {
    return (

        <>
            <Header clickBack={handleClick} />
            <div className="container">
                <div className="error-message">
                    <P>Nothing to be added into the list...</P>
                </div>
            </div>
        </>
    )
}
export default MyList;