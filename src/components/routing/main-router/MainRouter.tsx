import React from 'react';
import {Navbar, Footer} from '../../base';
import {
    Switch,
    BrowserRouter as Router,
    Redirect,
    Route
} from 'react-router-dom';
import Home from '../../pages/home';
import SignUpRoute from '../SignUpRoute';
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
                        component={SignUpRoute}
                        exact/>
                </Switch>
            </div>
            <Footer/>
        </Router>
    );
}
 
export default MainRouter;