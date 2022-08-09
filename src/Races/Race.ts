export default abstract class Race {
  private readonly _name: string;
  private readonly _dexterity: number;
  static _intancesCounter = 0;
  abstract get maxLifePoints(): number;

  constructor(name: string, dexterity: number) {
    this._name = name;
    this._dexterity = dexterity;
  }
  
  get name() { return this._name; }
  get dexterity() { return this._dexterity; }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }
}
