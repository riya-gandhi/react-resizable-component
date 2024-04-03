import React, { useState, useEffect } from 'react';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css'; // Import the styles for react-resizable
import axios from 'axios';

const ResizableLayout = () => {
    // Initialize count state for each component
    const [counts, setCounts] = useState([0, 0, 0]);

    // Function to handle the add button click
    const handleAddClick = async (index) => {
        try {
            await axios.post('http://localhost:5000/api/add'); // Update the URL with your backend endpoint
            // Increment count for the specific component
            setCounts(prevCounts => {
                const newCounts = [...prevCounts];
                newCounts[index]++;
                return newCounts;
            });
        } catch (error) {
            console.error('Error adding data:', error);
        }
    };

    // Function to handle the update button click
    const handleUpdateClick = async (index) => {
        try {
            await axios.put('http://localhost:5000/api/update'); // Update the URL with your backend endpoint
            // Increment count for the specific component
            setCounts(prevCounts => {
                const newCounts = [...prevCounts];
                newCounts[index]++;
                return newCounts;
            });
        } catch (error) {
            console.error('Error updating data:', error);
        }
    };

    // Fetch counts on component mount
    useEffect(() => {
        const fetchCounts = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/count'); // Update the URL with your backend endpoint
                const { addCount, updateCount } = response.data;
                // Set counts for all components
                setCounts([addCount, updateCount, 0]); // Assuming the third component's count is not fetched
            } catch (error) {
                console.error('Error fetching counts:', error);
            }
        };
        fetchCounts();
    }, []);

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
            <div style={{ display: 'flex' }}>
                {/* First resizable component */}
                <ResizableBox style={{ border: '1px solid #ccc', margin: '10px' }} width={200} height={200} minConstraints={[100, 100]} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                    <div>
                        <h2>Component 1</h2>
                        <p>This is the first component. You can resize me from all edges!</p>
                        <div>
                            <button onClick={() => handleAddClick(0)}>Add</button>
                            <button onClick={() => handleUpdateClick(0)}>Update</button>
                            <p>Count: {counts[0]}</p>
                        </div>
                    </div>
                </ResizableBox>

                {/* Second resizable component */}
                <ResizableBox style={{ border: '1px solid #ccc', margin: '10px' }} width={200} height={200} minConstraints={[100, 100]} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                    <div>
                        <h2>Component 2</h2>
                        <p>This is the second component. You can resize me from all edges!</p>
                        <div>
                            <button onClick={() => handleAddClick(1)}>Add</button>
                            <button onClick={() => handleUpdateClick(1)}>Update</button>
                            <p>Count: {counts[1]}</p>
                        </div>
                    </div>
                </ResizableBox>
            </div>

            {/* Third resizable component */}
            <ResizableBox style={{ border: '1px solid #ccc', margin: '10px', flex: 1 }} width={200} height={200} minConstraints={[100, 100]} resizeHandles={['sw', 'se', 'nw', 'ne', 'w', 'e', 'n', 's']}>
                <div>
                    <h2>Component 3</h2>
                    <p>This is the third component. You can resize me from all edges!</p>
                    <div>
                        <button onClick={() => handleAddClick(2)}>Add</button>
                        <button onClick={() => handleUpdateClick(2)}>Update</button>
                        <p>Count: {counts[2]}</p>
                    </div>
                </div>
            </ResizableBox>
        </div>
    );
};

export default ResizableLayout;
