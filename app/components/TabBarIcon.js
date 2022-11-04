import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';

function TabBarIcon({ color, size, icon }) {
    return (
        <MaterialCommunityIcons
            name={icon}
            color={color}
            size={size}
        />
    )
}

export default TabBarIcon;