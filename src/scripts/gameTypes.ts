/*
 * File: gameTypes.ts
 * Created Date: 05-22-2022
 * Last Modified: Sun May 22 2022
 * ---------------------
 * Authors: John Cinquegrana, Lucca Cioffi
 *      Distant Waters
 */

abstract class Card {
  title: string;
  description: string;

  constructor(t: string, d: string) {
    this.title = t;
    this.description = d;
  }
}

class GoldCard extends Card {
  amount: number;

  constructor(g: number) {
    super("Chest of Gold", `A Chest full of ${g} gold coins.`);
    this.amount = g;
  }
}

class LighthouseCard extends Card {
  number: number;

  constructor(n: number) {
    super(
      `Lighthouse #${n}`,
      "Each lighthouse signifies a step closer to the end of the game."
    );
    this.number = n;
  }
}

type Tile = {
  explored: boolean;
  card: Card;
  worldX: number;
  worldY: number;
  worldZ: number;
  neighbors: TileID[];
};

type TileID = number;

type Board = Tile[];

type Player = {
  cards: Card[];
  gold: number;
  name: string;
  curTile: TileID;
};

type Game = {
  players: Player[];
  board: Board;
  lighthousesUncovered: number;
};

export type { Game, Player, GoldCard, LighthouseCard, Board, Tile, TileID };
