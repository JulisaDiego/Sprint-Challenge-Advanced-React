import React from 'react';
import PlayerCard from './PlayerCard';
import { Card } from 'semantic-ui-react';
import {useDarkMode} from './useDarkMode';

const PlayerList = ({data}) => {
    const [darkMode, setDarkMode, toggleMode] = useDarkMode(false);

    return(
        <div>
              <button onClick={toggleMode} className="dark-btn">Dark Mode</button>
              <Card.Group itemsPerRow={6}>
                    {data.map((player) => {
                        return(
                            <PlayerCard
                            name={player.name}
                            country={player.country}
                            searches={player.searches}
                            key={player.id}
                            />
                        );
                    })}
            
                </Card.Group>  

        </div>
    );
};

export default  PlayerList;