import React,{ReactNode} from "react";

interface PageContainerProps {
    children: ReactNode;
}

export default function PageContainer({children} : PageContainerProps) {
    return(
        <div className="w-10/12 flex p-10 flex-col items-center justify-center">
            {children}
        </div>
    )
}