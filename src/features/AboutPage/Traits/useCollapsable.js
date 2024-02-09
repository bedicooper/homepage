import { useState } from "react";

export const useCollapsable = () => {

    const [expand, setExpand] = useState(
        {
            first: false,
            second: false,
            third: false,
        });

    const toggleFirst = () => {
        setExpand(expand => {
            return { ...expand, first: !expand.first };
        });
    };

    const toggleSecond = () => {
        setExpand(expand => {
            return { ...expand, second: !expand.second };
        });
    };

    const toggleThird = () => {
        setExpand(expand => {
            return { ...expand, third: !expand.third };
        });
    };

    return {
        expand,
        toggleFirst,
        toggleSecond,
        toggleThird,
    };
};