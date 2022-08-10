import Fighter, { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  private _lifePoints: number;
  private _strength: number;

  constructor() {
    console.log('BLABLABLABLA');
    this._lifePoints = 85;
    this._strength = 63;
  }

  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }

  receiveDamage(attackPoints: number): number {
    if (attackPoints < 0) this._lifePoints -= attackPoints;
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter | SimpleFighter): void {
    enemy.receiveDamage(this.strength);
  }
}
