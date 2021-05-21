import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import PostListPage from "./pages/PostListPage";
import PostPage from "./pages/PostPage";
import WritePage from "./pages/WritePage";
import Header from "./components/common/Header";
import Navigation from "./components/common/Navigation";

function App() {
    return (
        <div>
            <Header />
            <Navigation />
            <Switch>
                <Route component={PostListPage} path={'/'} exact></Route>
                <Route component={WritePage} path={'/write'} exact></Route>
                <Route component={PostPage} path={'/@:postId'} exact></Route>
            </Switch>
        </div>
    );
}

export default App;
