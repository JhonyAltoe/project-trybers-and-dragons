import Race from './Race';

export default class Orc extends Race {
  private _maxLifePoints = 74;
  static _intancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Orc._intancesCounter += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Orc._intancesCounter;
  }
}

// const Jão = new Orc('João da lavora', 20);
// console.log(Orc._intancesCounter);

// const Otto = new Orc('Otto da lavora', 15);
// console.log(Orc._intancesCounter);

// console.log('----------------------');
// console.log(Jão.name);
// console.log(Jão.maxLifePoints);
// console.log('----------------------');
// console.log(Otto.name);
// console.log(Otto.maxLifePoints);