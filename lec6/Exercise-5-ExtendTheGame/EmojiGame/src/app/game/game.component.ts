import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent {

  public playerX = 6;
  public walkableTiles = ["➖", "🌉", "⬆️", "⬇️", "🏁", '🕶'];
  public dangerousTiles = ["🌊", "🌞"];
  public avatar = ['😎', '🤓'];
  public pickedItems = [];
  public gameOver = false;
  public lostGame = false;
  public tiles: Array<
    {
      index: number,
      emoji: string
    }>;

  constructor() {
    /* let s = ["⛔️", "🕶", "➖", "➖", "➖", "➖", "➖", "➖", "➖", "➖", "➖", "⬆️", "➖", "➖", "➖", "➖", "➖", "➖",
      "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "➖", "➖", "➖", "➖", "➖", "🏁", "➖", "⛔️"]; */
    let s = ["⛔️", "🏁", "➖", "🌞", "➖", "➖", "➖", "➖", "➖", "➖", "➖", "⬆️", "➖", "➖", "➖", "➖", "➖", "➖",
      "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "🌊", "➖", "➖", "➖", "➖", "🕶", "", "➖", "⛔️"];
    this.tiles = [];
    for (let i = 0; i < s.length; i++) {
      this.tiles.push({ index: i, emoji: s[i] });
    }
  }

  public left() {
    let newX = this.playerX - 1;
    this.move(newX);
  }
  public right() {
    let newX = this.playerX + 1;
    this.move(newX);
  }

  public jump() {
    if (this.tiles[this.playerX].emoji == '⬆️') {
      this.tiles[this.playerX] = { index: this.playerX, emoji: '⬇️' };
      this.fillbrigde(this.tiles.length, '🌉', '🌊');
    } else if (this.tiles[this.playerX].emoji == '⬇️') {
      this.tiles[this.playerX] = { index: this.playerX, emoji: '⬆️' };
      this.fillbrigde(this.tiles.length, '🌊', '🌉');
    }
  }

  public chooseAvatar(index = 1) {
    if (this.pickedItems.includes('🕶')) {
      return this.avatar[index - 1];
    } else {
      return this.avatar[index];
    }
  }

  private move(playerPos) {
    if (this.walkableTiles.indexOf(this.tiles[playerPos].emoji) != -1
      || this.dangerousTiles.indexOf(this.tiles[playerPos].emoji) != -1
      || this.pickedItems.indexOf(this.tiles[playerPos].emoji) != -1) {
      this.playerX = playerPos;
      if (this.tiles[this.playerX].emoji == '🏁') {
        this.gameOver = true;
      }
      if (this.tiles[this.playerX].emoji == '🌊'
        || (this.tiles[this.playerX].emoji == '🌞' && !this.pickedItems.includes('🕶'))) {
        this.gameOver = true;
        this.lostGame = true;
      }

      if (this.tiles[this.playerX].emoji == '🕶') {
        this.pickup('🕶');
        this.chooseAvatar(0);
        console.log(this.tiles[this.playerX].index);
        console.log(this.tiles[this.playerX].emoji);

        this.tiles.splice(this.tiles[this.playerX].index, 1, { index: this.tiles[this.playerX].index, emoji: '➖' });

      }
    }
  }

  private pickup(emoji) {
    this.pickedItems.push(emoji);
  }
  private fillbrigde(tilelength, emojiAdd, emojiRemove) {
    for (let i = 0; i < tilelength; i++) {
      if (this.tiles[i].emoji == emojiRemove) {
        this.tiles[i].emoji = emojiAdd;
      }
    }

  }
}

