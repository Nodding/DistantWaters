/*
 * File: tiles.ts
 * Created Date: 07-24-2022
 * Last Modified: Sun Jul 24 2022
 * ---------------------
 * Authors: John Cinquegrana, Lucca Cioffi
 *      Distant Waters
 *
 * Description: This file contains all the logic surrounding the creation of
 *  the tiles in the game. The tiles are the little hexagon subsections of
 *  the board that the players boats can exist on.
 */

import { Vector3 } from "three";
import { range } from "./algorithms";
import { createHexagon } from "./loadAssets";

/**
 * Creates an array of tile positions. The tiles will be placed flush next to each other. The
 * output will be a grid of tiles that populate every possible tile within the boundaries.
 * @param radius The distance from the center of a hexagon tile to one of its vertices.
 * @param xBegin The lowest possible X coordinate that a tile's center can be at
 * @param xEnd The highest possible X coordinate that a tile's center can exist at
 * @param zBegin The lowest possible Z coordinate that a tile's center can be at
 * @param zEnd The highest possible Z coordinate that a tile's center can exist at
 * @returns An array of ThreeJS compatible Vector objects.
 */
function getTilePositions(
  radius: number,
  xBegin = -70,
  xEnd = 70,
  zBegin = -70,
  zEnd = 70
): Vector3[] {
  //  These are mathematical calculations that make drawing the rectangles easier.
  const h = 2 * radius;
  const w = Math.sqrt(3) * radius;
  //  First I create a line of rectangles along the x axis
  const rectArray = range(zBegin, zEnd, (h * 3) / 4); //  This will be the Hexagons along the Z axis
  const rectMat = rectArray.map((z, i) => {
    return range(
      xBegin + (w * (i % 2)) / 2, //  The starting X coordinate. it shifts over by half a hex every other iteration
      xEnd,
      w
    ).map((x) => {
      return new Vector3(x, 0, z);
    }); // This will be the Z axis value
  });

  const tilesPos = rectMat.reduce((el1, el2) => el1.concat(el2));
  return tilesPos;
}

/**
 * Creates a new hexagonal tile at the specified position.
 * @param radius The distance from the center of the hexagon to a vertex.
 * @param height The thickness of the hexagon
 * @param position The position the hexagon will be drawn at in the ThreeJS world
 * @returns A Hexagon mesh that may be added to the scene.
 */
function placeNewTile(radius: number, height: number, position: Vector3) {
  const hexagon = createHexagon(radius, height);
  hexagon.position.set(position.x, position.y, position.z);
  return hexagon;
}

export { getTilePositions, placeNewTile };
