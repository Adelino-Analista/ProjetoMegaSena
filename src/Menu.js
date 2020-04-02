import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigation} from 'react-navegation';

import Simples from './componentes/Simples';
import ParImpar from './componentes/ParImpar';
import Inverter, {MegaSena} from './componentes/Multi';

export default createDrawerNavigation(
  {
    MegaSena: {
      creen: () => <MegaSena numeros={8} />,
      navigationOptions: {title: 'Mega Sena'},
    },
    Inverter: {
      screen: () => <Inverter texto="React Ntaive!" />,
    },
    ParImpar: {
      screen: () => <ParImpar numeros={30} />,
      navigationOptions: {title: 'Par & Impar'},
    },
    Simples: {
      screen: () => <Simples texto="Flexvel!!!" />,
    },
  },
  {drawerwidth: 300},
);
