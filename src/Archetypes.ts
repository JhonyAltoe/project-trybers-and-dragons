import { EnergyType } from './Energy';

export default abstract class Archetype {
  private readonly _name: string;
  private readonly _special: number;
  private readonly _cost: number;
  static _intancesCounter = 0;
  abstract get energyType(): EnergyType;

  constructor(name: string) {
    this._name = name;
    this._special = 0;
    this._cost = 0;
  }

  get name() { return this._name; }
  get special() { return this._special; }
  get cost() { return this._cost; }

  static createdArchetypeInstances() {
    throw new Error('Not implemented');
  }
}
