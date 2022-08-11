import Battle from './Battle';
import Fighter, { SimpleFighter } from '../Fighter';

export default class PVE extends Battle {
  private horde: Array<Fighter | SimpleFighter>;
  private counter = 0;
  
  constructor(
    player: Fighter,
    horde: Array<Fighter | SimpleFighter>,
  ) {
    super(player);
    this.horde = horde;
  }

  private removeDead = (): Array<Fighter | SimpleFighter> =>
    this.horde.filter((enemy) => enemy.lifePoints !== -1);

  private playerAttackHorde = (): void => {
    const aliveMonsters = this.removeDead();
    const attackEnemy = aliveMonsters.reduce(
      (target: Fighter | SimpleFighter, enemy: Fighter | SimpleFighter) => {
        const enemyTarget = (target.lifePoints > enemy.lifePoints
          ? enemy : target);
        return enemyTarget;
      },
    );

    this.player.attack(attackEnemy);
  };

  private hordeAttackPlayer = () => {
    const aliveMonsters = this.removeDead();
    aliveMonsters.forEach((enemy) => {
      enemy.attack(this.player);
    });
  };

  fight(): number {
    while (
      this.player.lifePoints !== -1
      && this.removeDead().length > 0
    ) {
      this.playerAttackHorde();
      this.hordeAttackPlayer();
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}
