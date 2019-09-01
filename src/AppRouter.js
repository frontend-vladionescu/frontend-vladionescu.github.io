import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import Home from './routes/home/Home';
import Divorce from './routes/divorce/Divorce';
import Succession from './routes/succession/Succession';
import Contact from './routes/contact/Contact';
import Contracts from './routes/contracts/Contracts';
import Procedures from './routes/procedures/Procedures';

const AppRouter = () => {
    return (
        <Router>
            <div>
                <Header/>
                <Switch>
                    <Route path="/" exact component={Home}/>
`                   <Route path="/divort" component={Divorce}/>
                    <Route path="/succesiuni" component={Succession}/>
                    <Route path="/contracte" component={Contracts}/>
                    <Route path="/proceduri" component={Procedures}/>
                    <Route path="/contact" component={Contact}/>
                </Switch>
                <Footer/>
            </div>
        </Router>
    );
};

export default AppRouter;
