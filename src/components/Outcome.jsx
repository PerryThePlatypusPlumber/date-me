import React from 'react';
import { Gif } from './Gif';

export const Outcome = () => {
  return (
    <div style={{ maxWidth: '100%', textAlign: 'center' }}>
      <h2>Yay! I knew you would say yes!</h2>
      <div>
        <Gif url='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDAwbzE1bWxkNmtrM20xYWdld253MDBvN2lxODUxOWVyMndqbzQwaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KztT2c4u8mYYUiMKdJ/giphy.gif' />
      </div>
    </div>
  );
};
