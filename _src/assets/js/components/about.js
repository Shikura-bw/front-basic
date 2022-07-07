import anime from 'animejs'
export default class About {
  constructor() {
    if(!document.getElementById('about')) { return; }
     timeline = anime.timeline();
      timeline
      .add({
        targets: '#elem',
        translateX: 500
      })
      .add({
        targets: '#elem2',
        translateX: 500
      })
      .add({
        targets: '#elem3',
        translateX: 500
    });
  }
}