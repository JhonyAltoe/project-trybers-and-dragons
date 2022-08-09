import Race from './Race';

export default class Elf extends Race {
  private _maxLifePoints = 99;
  static _intancesCounter = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    Elf._intancesCounter += 1;
  }
  
  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
  
  static createdRacesInstances(): number {
    return Elf._intancesCounter;
  }
}

// const Jão = new Elf('João da lavora', 20);
// console.log(Elf._intancesCounter);

// const Otto = new Elf('Otto da lavora', 15);
// console.log(Elf._intancesCounter);

// console.log('----------------------');
// console.log(Jão.name);
// console.log(Jão.maxLifePoints);
// console.log('----------------------');
// console.log(Otto.name);
// console.log(Otto.maxLifePoints);