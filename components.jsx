import React from 'react';

// A simple functional component
const Header = () => {
    return (
        <header>
            <h1>Welcome to ReactVibes</h1>
        </header>
    );
};

// Another functional component with props
const Greeting = ({ name }) => {
    return (
        <p>Hello, {name}! Enjoy learning React.</p>
    );
};

// A main App component that uses the above components
const App = () => {
    return (
        <div>
            <Header />
            <Greeting name="John Doe" />
        </div>
    );
};

export default App;