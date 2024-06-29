import React from 'react';
import './DarkOverlay.css';

interface DarkOverlayProps {
    isVisible: boolean;
}

const DarkOverlay: React.FC<DarkOverlayProps> = ({ isVisible }) => {
    if (!isVisible) return null;

    return <div className="dark-overlay"></div>;
};

export default DarkOverlay;