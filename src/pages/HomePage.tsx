import {
  IonContent,
  IonHeader,
  IonItem,
  IonPage,
  IonTitle,
  IonToolbar,
} from '@ionic/react';
import React from 'react';
import { entries } from '../data';
// import { useParams } from 'react-router';

// interface RouteParams {
//   id: string;
// }

const HomePage: React.FC = () => {
  // const { id } = useParams<RouteParams>();
  // const entry = entries.find((entry) => entry.id === id);
  // if(!entry) {
  //   throw new Error(`No such entry: ${id}`);
  // }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Homepage</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {entries.map((entry) =>
          <IonItem button key={entry.id}
            routerLink={`/my/entries/${entry.id}`}>
            {entry.title}
          </IonItem>
        )}
      </IonContent>
    </IonPage>
  );
};

export default HomePage;
