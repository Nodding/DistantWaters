/*
 * File: objectCreation.ts
 * Created Date: 05-25-2022
 * Last Modified: Wed May 25 2022
 * ---------------------
 * Authors: John Cinquegrana, Lucca Cioffi
 *      Distant Waters
 */

import type { Vector3 } from "three";
import { GoldCard, type Board, type Tile } from "./gameTypes";

function createBoard(tilesPos: Vector3[]): Board {
  return tilesPos.map((pos) => {
    return createTile(pos);
  });
}

function createTile(pos: Vector3): Tile {
  return {
    explored: false,
    card: new GoldCard(100),
    position: pos,
    neighbors: [],
  };
}

export { createBoard };
