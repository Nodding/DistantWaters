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
 * Many of the math is heavily based on this post https://www.redblobgames.com/grids/hexagons/
 */

import type { CylinderGeometry, Mesh, MeshBasicMaterial } from "three";
import { range } from "./algorithms";
import { createHexagon } from "./loadAssets";

type TileObj = Mesh<CylinderGeometry, MeshBasicMaterial>;
type WorldCoord = [number, number, number];
type Axial = [number, number];

/**
 * Generates a list of axial coordiantes to display the tiles at.
 * @param boardWidth The number of rows of tiles that populate across the x axis
 * @param boardHeight The number of columns of tiles that populate across the y axis
 * @returns a boardHeight from coordinate values to the ThreeJS style objects for the tiles.
 */
function createAxialSystem(boardWidth: number, boardHeight: number): Axial[] {
  //  Create the array that will hold all of our tiles
  const flatRow = range(0, boardWidth); //  This will be the Hexagons along the Z axis
  //  An array that points to a list of the indexes used to pinpoint that value
  const flatMat = flatRow
    .map((xIndex) => {
      return range(0, boardHeight).map((zIndex) => {
        return [xIndex, zIndex];
      });
    })
    .reduce((prev, curr) => prev.concat(curr));
  //  We currently have an offset coordinate system but I want to use an axial coordinate system.
  function offsetToAxial(coords: number[]): Axial {
    const col = coords[0];
    const row = coords[1];
    return [col - (row - (row & 1)) / 2, row];
  }
  //  Create an array of the Axial coordinates we would like to use
  return flatMat.map(offsetToAxial);
}

function getTileObjects(
  drawRadius: number,
  height: number,
  distanceRadius: number,
  coords: Axial[],
  topLeft: WorldCoord
): TileObj[] {
  function AxialToWorldCoords(size: number, coord: Axial): WorldCoord {
    return [
      topLeft[0] +
        size * (Math.sqrt(3) * coord[0] + (Math.sqrt(3) / 2) * coord[1]),
      topLeft[1] + 0,
      topLeft[2] + size * ((3 / 2) * coord[1]),
    ];
  }
  return coords.map((axialCoordinate) => {
    const hexaTile = createHexagon(drawRadius, height);
    hexaTile.position.set(
      ...AxialToWorldCoords(distanceRadius, axialCoordinate)
    );
    return hexaTile;
  });
}

export { getTileObjects, createAxialSystem };
