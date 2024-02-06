import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Warrior extends Archetype {
  private _energyType: EnergyType = 'stamina';
  private static _createdArchetypeInstances = 0;

  constructor(name: string) {
    super(name);
    Warrior._createdArchetypeInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Warrior._createdArchetypeInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Warrior;
