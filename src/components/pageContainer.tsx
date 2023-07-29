import React from "react";

export default function PageContainer(props: any) {
    return(
        <div className="w-10/12 flex flex-col items-center justify-center">
            {props.children}
        </div>
    )
}