import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import FormGroup from '../src/components/FormGroup';


storiesOf('FormGroup', module)
  .add(
    'default',
    () => (
      <FormGroup 
        label="First Name"
      />
    )
  );