import React from 'react';
import ReactDOM from 'react-dom';
import Chat from './chat';

it('renders without crashing', () => {
    const div = document.createElement('div');

    ReactDOM.render(<Chat />, div);
});

// describe('updateScroll', () => {
//     var element = document.createElement('div');
//
//     element.scrollTop = 100;
//     element.scrollheight = 200;
//
//     test('have the same value', () => {
//         expect(element.scrollTop).toEqual(element.scrollHeight);
//     });
// });
