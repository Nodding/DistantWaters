/*
 * File: createPlayers.ts
 * Created Date: 05-22-2022
 * Last Modified: Sun May 22 2022
 * ---------------------
 * Authors: John Cinquegrana, Lucca Cioffi
 *      Distant Waters
 */

import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

/**
 * Given a path to a file containing a 3D model, returns the model as an Object3D.
 * This is the superclass of all 3D objects in three.js
 * @param path a path to the file you intend to load
 * @returns The result of calling gltf.scene, which is to say everything within the GLTF file
 */
async function loadGLTFObject(path: string): Promise<THREE.Object3D> {
  //    Create the GLTF loader that we need for loading in modelsW
  const loader = new GLTFLoader();

  //    Wait for the result that we need in order to load in the objects
  const result = await loader.loadAsync(path);

  return result.scene;
}

export { loadGLTFObject };
