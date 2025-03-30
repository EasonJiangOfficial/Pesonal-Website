import React from "react";


export default function PageContainer({children}) {
    return(
        <div className="pb-10 w-10/12 flex flex-col items-center justify-center">
            {children}
        </div>
    )
}