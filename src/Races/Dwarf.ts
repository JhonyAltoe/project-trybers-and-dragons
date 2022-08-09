import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints = 80;
  static _intancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Dwarf._intancesCounter += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Dwarf._intancesCounter;
  }
}

// const Jão = new Dwarf('João da lavora', 20);
// console.log(Dwarf._intancesCounter);

// const Otto = new Dwarf('Otto da lavora', 15);
// console.log(Dwarf._intancesCounter);

// console.log('----------------------');
// console.log(Jão.name);
// console.log(Jão.maxLifePoints);
// console.log('----------------------');
// console.log(Otto.name);
// console.log(Otto.maxLifePoints);