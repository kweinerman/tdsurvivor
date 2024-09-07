// src/App.js
import React, { useState, useEffect } from 'react';
import { database, ref, set, onValue } from './firebase';
import './styles.css';

function App() {
    const [name, setName] = useState('');
    const [week, setWeek] = useState('');
    const [player, setPlayer] = useState('');
    const [picks, setPicks] = useState([]);

    useEffect(() => {
        const picksRef = ref(database, 'picks');
        onValue(picksRef, (snapshot) => {
            const data = snapshot.val();
            const picksArray = [];
            for (let id in data) {
                picksArray.push(data[id]);
            }
            setPicks(picksArray);
        });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        const newPick = { name, week, player };

        const newPickRef = ref(database, 'picks/' + new Date().getTime());
        set(newPickRef, newPick);

        setName('');
        setWeek('');
        setPlayer('');
    };

    return (
        <div>
            <h1>Touchdown Survivor Pool</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your name"
                    required
                />
                <input
                    type="number"
                    value={week}
                    onChange={(e) => setWeek(e.target.value)}
                    placeholder="Enter week number"
                    required
                />
                <input
                    type="text"
                    value={player}
                    onChange={(e) => setPlayer(e.target.value)}
                    placeholder="Enter player name"
                    required
                />
                <button type="submit">Submit</button>
            </form>
            <ul>
                {picks.map((pick, index) => (
                    <li key={index}>
                        {pick.name} picked {pick.player} in week {pick.week}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default App;
