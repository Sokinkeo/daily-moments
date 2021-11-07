import {
  IonApp,
} from '@ionic/react';
import React, { useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonReactRouter } from '@ionic/react-router';
import AppTabs from './AppTabs';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import { AuthContext } from './auth';
import { auth } from './firebase';
const App: React.FC = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  console.log(`rendering App with loggedIn=${loggedIn}`);
  auth.onAuthStateChanged(user => {
    if(user){
        console.log("user has logged in", user);
        <Redirect to="/my/entries" />
        setLoggedIn(true);
        
    }else{
        console.log("user has logged out");
        setLoggedIn(false);
    }
})
  return (
    <IonApp>
      <AuthContext.Provider value = {{ loggedIn }}>
          <IonReactRouter>
              <Switch>
                <Route exact path="/login">
                    <LoginPage onLogin={() => setLoggedIn(true)}
                    />
                </Route>
                <Route path="/my" >
                  <AppTabs />
                </Route>
                <Redirect exact path="/" to="/login" />
                <Route>
                  <NotFoundPage />
                </Route>
              </Switch>
        </IonReactRouter>
      </AuthContext.Provider>
    </IonApp>
  );
};

export default App;
