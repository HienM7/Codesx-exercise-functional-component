import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import Book from '../src/components/Book';


storiesOf('Book', module)
  .add(
    'default',
    () => (
      <Book 
        book={{
          coverUrl:"http://res.cloudinary.com/helios-m7/image/upload/v1588171511/vztjerbqg5ydruj3pvjx.png", 
          title: "Book1", 
          description: "This is the book"
        }}
      />
    )
  );