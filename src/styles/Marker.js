const K_WIDTH = 15;
const K_HEIGHT = 15;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -(3*K_HEIGHT) / 2,

  border: '4px solid #FF4500',
  borderRadius: '50% 50% 50% 0',
  backgroundColor: '#FF4500',
  transform: 'rotate(-45deg)',
  cursor: 'pointer',

};


export {greatPlaceStyle};