import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Necromancer extends Archetype {
  static _intancesCounter = 0;
  private _energyType: EnergyType;
  
  constructor(name: string) {
    super(name);
    Necromancer._intancesCounter += 1;
    this._energyType = 'mana';
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances() {
    return Necromancer._intancesCounter;
  }
}