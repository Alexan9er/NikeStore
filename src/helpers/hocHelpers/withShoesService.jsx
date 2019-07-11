import React from 'react';
import { ShoesServiceConsumer } from '../../components/shoesServiceContext';

const WithShoesService = () => Wrapped => props => (
  <ShoesServiceConsumer>
    {shoesService => <Wrapped {...props} shoesService={shoesService} />}
  </ShoesServiceConsumer>
);

export default WithShoesService;
