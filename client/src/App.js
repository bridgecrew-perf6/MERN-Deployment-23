import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Pets from './components/Pets'
import NewPet from "./components/Create";
import PetDetails from "./components/Details";
import EditPet from "./components/Edit";

function App() {
    return (
        <BrowserRouter>
            <div className="App container">
                <h1>Pet Shelter</h1>
                <Switch>
                    <Route exact path="/">
                        <Pets/>
                    </Route>
                    <Route exact path="/pets/new">
                        <NewPet/>
                    </Route>
                    <Route exact path="/pets/:id">
                        <PetDetails/>
                    </Route>
                    <Route exact path="/pets/edit/:id">
                        <EditPet/>
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default App;
