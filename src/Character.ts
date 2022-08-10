import Archetype, { Mage } from './Archetypes';
import Energy from './Energy';
import Fighter from './Fighter';
import Race, { Elf } from './Races';

// type GetterParams = 'race' | 'archetype' | 'lifePoints' | 'strength' | 'defense'
// | 'dexterity' | 'energy';

export default class Character implements Fighter {
  private _race: Race;
  private _archetype: Archetype; 
  private _maxLifePoints: number;
  private _lifePoints: number;
  private _strength: number;
  private _defense: number;
  private _energy: Energy;
  private _dexterity: number;

  constructor(name: string) {
    this._dexterity = this.randomNumberBetween(0, 10);
    this._race = new Elf(name, this._dexterity);
    this._archetype = new Mage(name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = this.randomNumberBetween(1, 10);
    this._defense = this.randomNumberBetween(1, 10);
    this._energy = {
      type_: this._archetype.energyType,
      amount: this.randomNumberBetween(1, 10) };
  }

  private randomNumberBetween = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1)) + min;

  private levelUpValidate = () => {
    this._maxLifePoints = (this._maxLifePoints > this.race.maxLifePoints)
      ? this.race.maxLifePoints : this._maxLifePoints;

    this._lifePoints = (this._lifePoints > this.race.maxLifePoints)
      ? this.race.maxLifePoints : this._lifePoints;
  };

  get race(): Race { return this._race; }
  get archetype(): Archetype { return this._archetype; }
  get lifePoints(): number { return this._lifePoints; }
  get strength(): number { return this._strength; }
  get defense(): number { return this._defense; }
  get dexterity(): number { return this._dexterity; }
  get energy(): Energy {
    const energy = { ...this._energy };
    return energy;
  }

  receiveDamage(attackPoints: number): number {
    const realDamage = attackPoints - this._defense;
    if (realDamage > 0) this._lifePoints -= realDamage;
    if (this.lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this.strength);
  }

  levelUp(): void {
    this._maxLifePoints += this.randomNumberBetween(1, 10);
    this._lifePoints = this._maxLifePoints;
    this.levelUpValidate();
    this._strength += this.randomNumberBetween(1, 10);
    this._dexterity += this.randomNumberBetween(1, 10);
    this._defense += this.randomNumberBetween(1, 10);
    this._energy.amount = 10;
  }

  // special(enemy: Fighter): void {
  //   throw new Error('Method not implemented.');
  // }
}

// const char = new Character('Joao');

// console.log('lifePoints:', char.lifePoints);
// console.log('energy.amount:', char.energy.amount);
// console.log('strength:', char.strength);
// console.log('dexterity:', char.dexterity);
// console.log('defense:', char.defense);
// console.log('-----------------------------------');
// char.levelUp();
// console.log('lifePoints:', char.lifePoints);
// console.log('energy.amount:', char.energy.amount);
// console.log('strength:', char.strength);
// console.log('dexterity:', char.dexterity);
// console.log('defense:', char.defense);
