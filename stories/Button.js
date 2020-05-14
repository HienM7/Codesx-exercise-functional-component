import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Button from '../src/components/Button';


storiesOf('Button', module)
  .add(
    'default',
    () => (
      <Button />
    )
  );