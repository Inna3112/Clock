import React, {useState} from 'react';
import './App.css';
import {Clock} from './Clock/Clock';

const App = () => {

    const [regime, setRegime] = useState<boolean>(true)

    return (<>
            <button onClick={() => {setRegime(!regime)}}>changeMode</button>
            {
                regime
                    ? <Clock mode={'digital'} />
                    : <Clock mode={'analog'} />
            }
        </>
    )
}

export default App;
