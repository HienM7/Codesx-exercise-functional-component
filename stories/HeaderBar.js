import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import HeaderBar from '../src/components/HeaderBar';


storiesOf('HeaderBar', module)
  .add(
    'default',
    () => (
      <HeaderBar 
        items = {[
          {url: "/Books", title: "Books"},
          {url: "/Transactions", title: "Transactions"},
          {url: "/Cart", title: "Cart"}
        ]}
      />
    )
  );