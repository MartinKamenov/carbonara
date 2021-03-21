import React from 'react';
import {Navbar, Footer} from '../../base';
import {
    Switch,
    BrowserRouter as Router,
    Redirect,
    Route
} from 'react-router-dom';
import {Home, SignUp} from '../../pages';
import './MainRouter.scss';

const MainRouter : React.FC = () => {
    return (
        <Router>
            <Navbar/>
            <div className='routing-content'>
                <Switch>
                    <Route
                        render={() => <Redirect to='/home'/>}
                        path='/'
                        exact/>
                    <Route
                        path='/home'
                        component={Home}
                        exact/>
                    <Route
                        path='/sign_up'
                        component={SignUp}
                        exact/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}
 
export default MainRouter;