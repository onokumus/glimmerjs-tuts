import Component from '@glimmer/component';

export default class PoiCard extends Component {

  get rndBgColor () {
    let rndBG;

    const rndNum = Math.round(Math.random() * 100) % 3;

    switch (rndNum) {
      case 0:
        rndBG = 'red';
        break;

      case 1:
      rndBG = 'green';
      break;

      case 2:
      rndBG = 'blue';
      break;
    }

    return rndBG;
  }
};
