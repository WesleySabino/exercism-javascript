//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (colorDuo) => {
  
  let bands = ''
  
  colorDuo.forEach((element, index) => {
    if(index < 2){
      // console.log(element)
      // console.log(index)
      bands += COLORS.indexOf(element)
    }
  });
  return parseFloat(bands)
};

const COLORS = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white'
]
