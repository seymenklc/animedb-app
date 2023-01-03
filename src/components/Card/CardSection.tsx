import { Fragment, ReactNode } from "react";

interface Props {
    title: string;
    children: ReactNode;
}

export default function CardSection({ title, children }: Props) {
    return (
        <Fragment>
            <h4 className="title lg:mb-0 mb-5 md:mt-0 lg:text-left text-center mt-3 cursor-default">
                {title}
            </h4>
            <div className="grid grid-cols-1 place-items-center lg:flex lg:flex-col lg:gap-4 lg:my-4 p-1 mb-5">
                <div className="lg:flex lg:gap-4 grid grid-cols-2 md:grid-cols-3 place-items-center md:gap-6 gap-4">
                    {children}
                </div>
            </div>
        </Fragment>
    );
}