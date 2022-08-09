import Race from './Race';

export default class Halfling extends Race {
  private _maxLifePoints = 60;
  static _intancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Halfling._intancesCounter += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Halfling._intancesCounter;
  }
}

// const Jão = new Halfling('João da lavora', 20);
// console.log(Halfling._intancesCounter);

// const Otto = new Halfling('Otto da lavora', 15);
// console.log(Halfling._intancesCounter);

// console.log('----------------------');
// console.log(Jão.name);
// console.log(Jão.maxLifePoints);
// console.log('----------------------');
// console.log(Otto.name);
// console.log(Otto.maxLifePoints);