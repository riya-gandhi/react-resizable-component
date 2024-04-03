import React from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Import the styles for react-resizable

const ResizableLayout = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ display: 'flex' }}>
                {/* First resizable component */}
                <ResizableBox style={{ border: '1px solid #ccc', margin: '10px' }} width={200} height={200} minConstraints={[100, 100]} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                    <div>
                        <h2>Component 1</h2>
                        <p>This is the first component. You can resize me from all edges!</p>
                    </div>
                </ResizableBox>

                {/* Second resizable component */}
                <ResizableBox style={{ border: '1px solid #ccc', margin: '10px' }} width={200} height={200} minConstraints={[100, 100]} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                    <div>
                        <h2>Component 2</h2>
                        <p>This is the second component. You can resize me from all edges!</p>
                    </div>
                </ResizableBox>
            </div>

            {/* Third resizable component */}
            <ResizableBox style={{ border: '1px solid #ccc', margin: '10px', flex: 1 }} width={200} height={200} minConstraints={[100, 100]} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                <div>
                    <h2>Component 3</h2>
                    <p>This is the third component. You can resize me from all edges!</p>
                </div>
            </ResizableBox>
        </div>
    );
};

export default ResizableLayout;
