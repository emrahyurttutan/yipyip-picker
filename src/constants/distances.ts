import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;
const theight = 736;
const twidth = 414;

export const aspectration = (value: number, wh: string) => {
  switch (wh) {
    case 'W':
      return Math.floor((width * value) / twidth) as number;
    case 'H':
      return Math.floor((height * value) / theight) as number;
    default:
      return 0;
  }
};

export const responsiveFont = (value: number) => {
  return Math.floor((width * value) / twidth);
};
