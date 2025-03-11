import { useState } from "react";
function Box({ bgColor, width, height, children }) {
    const [dimensions, setDimensions] = useState({ width: width, height: height });

    function changeWidth(e) {
        setDimensions(prev => { return { ...prev, width: e.target.value } })
    }
    function changeHeight(e) {
        setDimensions(prev => { return { ...prev, height: e.target.value } })
    }

    return (
        <div>
            {children}
            <div>
                Width:
                <input type="range" min={10} max={200} value={dimensions.width} onChange={changeWidth} />
            </div>
            <div>
                Height:
                <input type="range" min={10} max={200} value={dimensions.height} onChange={changeHeight} />
            </div>
            <div className="box" style={{ width: dimensions.width + 'px', height: dimensions.height + 'px', backgroundColor: bgColor }}>
            </div><div style={{ height: 200 }}></div></div >
    );
}

export default Box