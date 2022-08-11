import Battle from './Battle';
import Fighter from '../Fighter';

export default class PVP extends Battle {
  private player2: Fighter;
  private counter = 0;
  
  constructor(
    player: Fighter,
    player2: Fighter,
  ) {
    super(player);
    this.player2 = player2;
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this.player2.lifePoints !== -1) {
      this.player.attack(this.player2);
      this.player2.attack(this.player);

      this.counter += 1;

      if (this.counter === 2) {
        this.player.levelUp();
        this.player2.levelUp();
        this.counter = 0;
      }
    }
    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
