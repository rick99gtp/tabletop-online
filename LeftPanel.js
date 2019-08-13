import React from 'react';
import Scoreboard from './Scoreboard';
import VisLineup from './VisLineup';
import HomeLineup from './HomeLineup';

function LeftPanel() {
    return (
        <div className="left-panel">
            <Scoreboard />
            <VisLineup />
            <Result-Buttons />
        </div>
    );
}

export default LeftPanel;