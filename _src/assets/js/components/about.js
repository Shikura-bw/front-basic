import anime from 'animejs'
export default class About {
  constructor() {
    if(!document.getElementById('about')) { return; }
     let timeline = anime.timeline();
      timeline
      .add({
        targets: '#elem',
        translateX: 300
      })
      .add({
        targets: '#elem2',
        translateX: 300
      })
      .add({
        targets: '#elem3',
        translateX: 300
    });
  }
}