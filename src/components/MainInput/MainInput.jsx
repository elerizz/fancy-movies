import './index.css';

import { useEffect ,useState } from 'react';

const MainInput = ( {setMovieID}) => {
    const [inputValue, setInputValue] = useState("")

    return(
    <form action="submit" onSubmit={(e) => 
            {e.preventDefault();
            setMovieID(inputValue)    
            setInputValue("")}}>
        <input type="text" placeholder="Search by ID..." value={inputValue} onChange={(e) => setInputValue(e.target.value)}/>
        <button>ok</button>
    </form>
    )

}

export default MainInput;