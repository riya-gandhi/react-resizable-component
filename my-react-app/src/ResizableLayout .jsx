import React from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Import the styles for react-resizable

const ResizableLayout = () => {
    return (
        <div style={{ display: 'flex' }}>
            <ResizableBox style={{ border: '1px solid #ccc', margin: '10px' }} width={200} height={200} minConstraints={[100, 100]} axis="both">
                <div>
                    <h2>Component 1</h2>
                    <p>This is the first component. You can resize me!</p>
                </div>
            </ResizableBox>
            <ResizableBox style={{ border: '1px solid #ccc', margin: '10px' }} width={200} height={200} minConstraints={[100, 100]} axis="both">
                <div>
                    <h2>Component 2</h2>
                    <p>This is the second component. You can resize me!</p>
                </div>
            </ResizableBox>
            <ResizableBox style={{ border: '1px solid #ccc', margin: '10px' }} width={200} height={200} minConstraints={[100, 100]} axis="both">
                <div>
                    <h2>Component 3</h2>
                    <p>This is the third component. You can resize me!</p>
                </div>
            </ResizableBox>
        </div>
    );
};

export default ResizableLayout;
