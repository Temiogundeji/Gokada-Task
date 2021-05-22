import React from 'react';
import { Appbar } from 'react-native-paper';

const AppHeader = ({ handleToggle }) => {
    return (
        <Appbar.Header>
            <Appbar.Content title="Title" subtitle="Subtitle" />
            <Appbar.Action icon="magnify" onPress={handleToggle} />
        </Appbar.Header>
    );
}

export default AppHeader;