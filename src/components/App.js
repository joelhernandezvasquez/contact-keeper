import React from 'react';
import Header from './Header';
import {BrowserRouter,Route} from 'react-router-dom';
import ListContact from './contact/ListContact';
import CreateContact from './contact/CreateContact';
import EditContact from './contact/EditContact';
import DeleteContact from './contact/DeleteContact';


const App = () => {
    return (
        <>
          <Header/>
          
          <BrowserRouter>
            <Route path="/" exact component={ListContact}/>
            <Route path="/contacts/new" exact component={CreateContact}/>
            <Route path="/contacts/edit/:id" exact component={EditContact}/>
            <Route path="/contacts/delete" exact component={DeleteContact}/>

          </BrowserRouter>
        </>
    )
}

export default App;
