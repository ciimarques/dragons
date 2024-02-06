import Character from '../Character';
import { SimpleFighter } from '../Fighter';
import Battle from './Battle';

class PVE extends Battle {
  private _opponents: SimpleFighter[];

  constructor(player: Character, opponents: SimpleFighter[]) {
    super(player);
    this._opponents = opponents;
  }

  private executeTurn() {
    this._opponents.forEach((opponent) => {
      if (opponent.lifePoints !== -1) {
        this.player.attack(opponent);
        if (opponent.lifePoints !== -1) {
          opponent.attack(this.player);
        }
      }
    });
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this._opponents
      .some((opponent) => opponent.lifePoints !== -1)) {
      this.executeTurn();
    }
    return super.fight();
  }
}

export default PVE;