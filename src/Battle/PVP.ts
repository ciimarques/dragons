import Battle from './Battle';
import Fighter from '../Fighter/Fighter';

class PVP extends Battle {
  private _opponent: Fighter;

  constructor(player: Fighter, opponent: Fighter) {
    super(player);
    this._opponent = opponent;
  }

  fight(): number {
    while (this.player.lifePoints !== -1 && this._opponent.lifePoints !== -1) {
      this.player.attack(this._opponent);
      if (this._opponent.lifePoints !== -1) {
        this._opponent.attack(this.player);
      }
    }

    return super.fight();
  }
}

export default PVP;
