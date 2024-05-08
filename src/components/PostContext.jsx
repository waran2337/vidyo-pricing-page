import { createContext, useState } from "react";

const PostContext = createContext();

function PostProvider({ children }) {
    const [value, setValue] = useState(0);

    const [progress, setProgress] = useState(0);
    // Assuming slider track width is 678px and indicator width is 84px
    //const indicatorLeft = (Number(value) * (trackWidth - indicatorWidth)) / 200 + halfTrackWidth - halfIndicatorWidth;
    // 98.6%  1.8%
    function handleChange(e) {
        setValue(e.target.value);
        setProgress(((Number(e.target.value) - 50) / 150) * 100);
        document.getElementById("current-value").style.left = `${progress}%`;
    }

    return (
        <PostContext.Provider value={{ value, progress, handleChange }}>
            {children}
        </PostContext.Provider>
    );
}

export { PostProvider, PostContext };
