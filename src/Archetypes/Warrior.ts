import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  static _intancesCounter = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    Warrior._intancesCounter += 1;
    this._energyType = 'stamina';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Warrior._intancesCounter;
  }
}