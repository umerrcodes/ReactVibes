import React, { useState, useEffect } from 'react';

const ExampleComponent = () => {
    const [count, setCount] = useState(0);

    // This useEffect hook runs after every render
    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });

    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
};

export default ExampleComponent;