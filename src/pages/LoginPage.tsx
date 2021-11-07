import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonList,
  IonText,
  IonLoading
} from '@ionic/react';
import React, { useState } from 'react';
import { Redirect } from 'react-router';
import { useAuth } from '../auth';
import { auth } from '../firebase';

interface Props {
  onLogin: () => void;
}

const LoginPage: React.FC<Props> = ({ onLogin }) => {
  // const { loggedIn } = useContext(AuthContext);
  const { loggedIn } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [status, setStatus] = useState({loading:false, error:false});

  const handleLogin = async () => {
    try {
      setStatus({loading:true, error:false});
      const credential = await auth.signInWithEmailAndPassword(email,password);
      setStatus({loading:false, error:false});
      console.log('credential:', credential)
      onLogin();
    }
    catch (error) {
      setStatus({loading:false, error:true});
      console.log('error: ', error);
    }
  }

  console.log(`Login Status: ${loggedIn}`);
  if(loggedIn) {
    return <Redirect to="/my/entries" />;
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
          <IonList>
            <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput type="email" value={email}
                  onIonChange={(event) => setEmail(event.detail.value)}
                />
            </IonItem>
            <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" value={password}
                  onIonChange={(event) => setPassword(event.detail.value)}
                 />
            </IonItem>
          </IonList>
          {status.error &&
            <IonText color="danger">Invalid Credentials</IonText>
          }
          <IonButton expand="block" onClick={handleLogin}>Login</IonButton>
          <IonLoading isOpen={status.loading} />
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;
