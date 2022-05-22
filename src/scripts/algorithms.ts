/*
 * File: algorithms.ts
 * Created Date: 05-22-2022
 * Last Modified: Sun May 22 2022
 * ---------------------
 * Authors: John Cinquegrana, Lucca Cioffi
 *      Distant Waters
 */

import type { Player, Board, TileID } from "./gameTypes";

/**
 * Returns a list of TileId's describing all the possible tiles a player can move to within the
 * max distance.
 * @param player The object representing the player who is moving
 * @param board  The board the player is moving on
 * @param maxDistance  The maximum distance that the player can move
 * @returns  A list of TileID's for use with the board object that each correspond to a tile that the player can move to.
 */
function movableTiles(
  player: Player,
  board: Board,
  maxDistance: number
): number[] {
  //    Use a DFS style algorithm to find out all the tiles a player can move to
  //    A type to hold information about the tiles we've already visited
  const result: TileID[] = [];

  function searchIteration(readList: TileID[], distance: number) {
    const writeList: TileID[] = [];
    //  Iterate over every tile and add it to the result and write lists
    readList.forEach((tileNum) => {
      if (!result.includes(tileNum) && !writeList.includes(tileNum)) {
        result.push(tileNum);
        writeList.push(tileNum);
      }
    });
    //  Determine if the algorithm should be run again
    if (distance > 0) {
      //  Run the algorithm again
      searchIteration(writeList, distance - 1);
    } else if (distance == 0) {
      //  This is the final run of the algorithm, add everything to the result
      writeList.forEach((tileNum) => {
        if (!result.includes(tileNum)) result.push(tileNum);
      });
    }
  }

  searchIteration([player.curTile], maxDistance);

  return result;
}

export { movableTiles };
