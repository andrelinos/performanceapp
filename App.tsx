import React from 'react';
import { StatusBar } from 'react-native';
import { Home } from './src/screens/Home';

export default function App() {
    return (
        <>
            <StatusBar
                backgroundColor="#34495e"
                barStyle="light-content"
                translucent
            />
            <Home />
        </>
    );
}
