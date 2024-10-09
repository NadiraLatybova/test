import {RouterProvider} from "react-router-dom";
import './App.scss'
import router from './routing/routing'


function App() {
    return (

        <div className="App">
            <RouterProvider router={router}/>
        </div>
    );
}

export default App;
