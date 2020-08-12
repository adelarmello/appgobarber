import React, { useCallback } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Title,
  Description,
  OkButton,
  OkButtonText,
} from './styles';
import { useNavigation } from '@react-navigation/native';

const AppointmentCreated: React.FC = () => {
  const { reset } = useNavigation();

  // Botão ok do agendamento marcado
  const handleOkPressed = useCallback(() => {
    reset({
      routes: [
        {
          name: 'Dashboard', //Cria o agendamento e envia o usuário pro Dashboard
        },
      ],
      index: 0,
    });
  }, [reset]);
  return (
    <Container>
      <Icon name="check" size={80} color="#04d361" />
      <Title> Agendamento concluido</Title>
      <Description> Terça, dia 14 de março de 2020 as 12:00h </Description>
      <OkButton onPress={handleOkPressed}>
        <OkButtonText>Ok</OkButtonText>
      </OkButton>
    </Container>
  );
};

export default AppointmentCreated;
