import Board from './board';
import Transition from './transition';
import EndGame from './endgame';
import Intro from './intro';

export default function Play(ctx) {

  let { g, e, a } = ctx;

  let particles;

  let scene;

  let timer = 0;
  let board = new Board(this, ctx);
  let transition = new Transition(this, ctx);
  let endgame = new EndGame(this, ctx);
  let intro = new Intro(this, ctx);

  //g.fill('#fff1e8');
  g.fill('#1d2b53');

  let stats = {
    current: 0,
    colls: [],
    die: 0,
    time: 0
  };

  this.init = () => {
    endgame.init(stats);
    scene = endgame;
  };

  this.beginIntro = () => {
    transition.init(() => {
      scene = intro;
    });
  };

  this.beginLevels = () => {
    transition.init(() => {
      board.init(stats.current);
      scene = board;
    });
  };

  this.nextLevel = () => {
    if (stats.current === 4) {
      transition.init(() => {
        stats.current = 0;
        endgame.init(stats);
        scene = endgame;
      });
    } else {
      stats.current++;
      transition.init(() => {
        board.init(stats.current);
      });
    }
  };

  this.prevLevel = () => {
    if (stats.current > 0) {
      stats.current--;
    }
    transition.init(() => {
      board.init(stats.current);
    });    
  };

  this.scollect = (info) => {
    for (let colls of stats.colls) {
      if (colls[0] === info[0] &&
          colls[1] === info[1] &&
          colls[2] === info[2]) {
        return false;
      }
    }
    return true;
  };

  this.collect = (info) => {
    stats.colls.push(info);
    endgame.collect(info[0]);
  };

  this.die = () => {
    stats.die++;
  };

  this.time = () => {
    stats.time += 1/60;
  };

  this.update = () => {
    timer++;

    if (e.p.enter) {
      transition.init(() => {
        endgame.init(stats);
        scene = endgame;
      });
    }

    transition.update();
    scene.update();
  };

  this.draw = () => {
    g.clear();

    scene.draw();
    transition.draw();
  };
  
}
