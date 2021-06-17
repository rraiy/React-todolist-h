import React, {useState, useEffect} from 'react';
import HomePage from '../components/HomePage';
import ListPage from '../components/ListPage';


const App =  () => {

    const [views, setViews] = useState({homePage:'flex', listPage:'none'})

    const switchToHome = () => {
        setViews({homePage:'flex', listPage:'none'})
    }

    const switchToList = () => {
        setViews({homePage:'none', listPage:'flex'})
    }

    return (
        <>
            <HomePage switchPage={switchToList} display={views.homePage} />    
            <ListPage switchPage={switchToHome} display={views.listPage} />
        </>
    )
}

export default App;