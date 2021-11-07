import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
  IonButtons,
} from '@ionic/react';
import React from 'react';
import { entries } from '../data';
import { useParams } from 'react-router';

interface RouteParams {
  id: string;
}

const EntryPage: React.FC = () => {
  const { id } = useParams<RouteParams>();
  const entry = entries.find((entry) => entry.id === id);
  if(!entry) {
    throw new Error(`No such entry: ${id}`);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton/>
        </IonButtons>
          <IonTitle>{entry.title}</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        {entry.description}
      </IonContent>
    </IonPage>
  );
};

export default EntryPage;
