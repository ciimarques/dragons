import Battle from './Battle';
import Fighter from '../Fighter/Fighter';

class PVP extends Battle {
  private _opponent: Fighter;

  constructor(player: Fighter, opponent: Fighter) {
    super(player);
    this._opponent = opponent;
  }

  fight(): number {
    while (this.player.lifePoints > 0 && this._opponent.lifePoints > 0) {
      this.player.attack(this._opponent);
      if (this._opponent.lifePoints > 0) {
        this._opponent.attack(this.player);
      }
    }

    return this.player.lifePoints === -1 ? -1 : 1;
  }
}

export default PVP;
