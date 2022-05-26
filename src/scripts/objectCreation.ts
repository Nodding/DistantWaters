/*
 * File: objectCreation.ts
 * Created Date: 05-25-2022
 * Last Modified: Wed May 25 2022
 * ---------------------
 * Authors: John Cinquegrana, Lucca Cioffi
 *      Distant Waters
 */

import { GoldCard, type Board, type Tile } from "./gameTypes";

function createBoard(tilesPos: number[][]): Board {
  return tilesPos.map((pos) => {
    return createTile(pos);
  });
}

function createTile(pos: number[]): Tile {
  return {
    explored: false,
    card: new GoldCard(100),
    worldX: pos[0],
    worldY: pos[1],
    worldZ: pos[2],
    neighbors: [],
  };
}

export { createBoard };
