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
