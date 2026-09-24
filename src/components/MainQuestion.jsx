import React, { useState } from 'react';
import { Button } from './Button';
import { Outcome } from './Outcome';
import { Gif } from './Gif';

export const MainQuestion = () => {
  const [state, setState] = useState({
    x: 0,
    y: 0,
    noWidth: 100,
    noHeight: 50,
    noFontSize: 20,
    yesClicked: false,
    yesWidth: 100,
    yesHeight: 50,
    yesFontSize: 20,
    loading: true,
  });

  const onMouseClickNo = () => {
    const newXValue =
      Math.random() *
      (window.innerWidth - document.getElementById('noButton').offsetWidth);
    const newYValue =
      Math.random() *
      (window.innerHeight - document.getElementById('noButton').offsetHeight);

    setState((prevState) => ({
      ...prevState,
      x: newXValue,
      y: newYValue,
      yesHeight: prevState.yesHeight + 10,
      yesWidth: prevState.yesWidth + 10,
      noHeight: prevState.noHeight - 5,
      noWidth: prevState.noWidth - 5,
      yesFontSize: prevState.yesFontSize + 2,
      noFontSize: prevState.noFontSize - 1,
    }));
  };

  const onMouseClickYes = () => {
    setState((prevState) => ({ ...prevState, yesClicked: true }));
  };

  if (state.yesClicked) {
    return (
      <div style={{ alignContent: 'center' }}>
        <div>
          <Outcome />
        </div>
      </div>
    );
  }

  return (
    <div style={{ alignContent: 'center' }}>
      <div>
        <h2>Can I date you? </h2>
        <h2>I know places where we can have fun together.</h2>
        <Gif url='https://media.giphy.com/media/92YG8KKSjYhMc/giphy.gif' />
        <div style={{ paddingTop: '10px' }}>
          <p style={{ fontSize: '10px' }}>try clicking no :P </p>
        </div>

        <div className='btn-group'>
          <Button
            text='Yes'
            id='yesButton'
            heightInput={state.yesHeight}
            widthInput={state.yesWidth}
            onclick={onMouseClickYes}
            positionInput={'relative'}
            fontSizeInput={state.yesFontSize}
          />
          {state.noHeight >= 15 && (
            <Button
              text='No'
              id='noButton'
              widthInput={state.noWidth}
              heightInput={state.noHeight}
              leftInput={state.x}
              topInput={state.y}
              onclick={onMouseClickNo}
              onmouseover={onMouseClickNo}
              positionInput={state.x === 0 ? 'relative' : 'absolute'}
              fontSizeInput={state.noFontSize}
            />
          )}
        </div>
      </div>
    </div>
  );
};
