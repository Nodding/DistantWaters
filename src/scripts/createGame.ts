/*
   File: createGame.ts
   Created Date: 05-17-2022
   Last Modified: Tues May 17 2022
   Last Mod Note: Added top info, switched to ortho camera for flat look. - Lucca
   ---------------------
   Authors: John Cinquegrana, Lucca Cioffi
        Distant Waters
*/

import * as three from "three";
import { range } from "./algorithms";
import { createHexagon, loadGLTFObject } from "./loadAssets";

async function createGame(id: string) {
  //  Grab the container that will contain the game
  const gameContainer = document.getElementById(id);
  if (gameContainer == null) {
    console.error("Could not fetch game container.");
    throw `Element of id '${id}' could not be found`;
    return;
  }

  //  Configure the settings for the game
  const scene = new three.Scene();

  //  Set scene background to a sky blue
  scene.background = new three.Color(0x83d8e6);

  //camera settings (changing camera width is a great way to move the camera around)
  const aspectRatio = window.innerWidth / window.innerHeight;
  const cameraWidth = 25;
  const cameraHeight = cameraWidth / aspectRatio;

  //    Set the size of the game
  const renderer = new three.WebGLRenderer();
  renderer.setSize(window.innerWidth - 200, window.innerHeight * 0.7);
  gameContainer.appendChild(renderer.domElement);

  //  Configure Renderer for GLTF objects
  renderer.outputEncoding = three.sRGBEncoding;

  //    Create the objects within the game

  //  Create the camera for the scene
  const cameraScale = 0.1;
  const camera = new three.OrthographicCamera(
    //left
    cameraWidth / -cameraScale,
    //right
    cameraWidth / cameraScale,
    //top
    cameraHeight / cameraScale,
    //bottom
    cameraHeight / -cameraScale
  );

  //    Move the camera to the proper location
  camera.position.set(100, 100, -100);

  //  Set the camera to look at the origin
  camera.lookAt(0, 0, 0);

  //  Configure the light for the scene

  //  Create a soft ambient light so that everything can be seen
  const ambLight = new three.AmbientLight(0x222222, 0.1);
  scene.add(ambLight);

  //  Create a softbox simulating sunlight that provides shadows to the scene
  const sun = new three.DirectionalLight(0xffffb5, 0.7);
  sun.position.set(100, 100, 0);
  scene.add(sun);

  //  Basic green cube
  const geometry = new three.BoxGeometry();
  const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new three.Mesh(geometry, material);
  cube.position.set(0, 0, 0);
  scene.add(cube);

  //  Create the boat
  const boat = await loadGLTFObject("src/assets/models/pirateship.glb");
  boat.position.set(0, 0, 0);
  scene.add(boat);

  //  Create and add rectangles to the game
  //  First I create a line of rectangles along the x axis
  const radius = 10;
  const rectArray = range(-70, 70, radius * 2 + 2); //  This will be the Hexagons along the X axis
  const rectMat = rectArray.map((x, i) => {
    return range(
      -70 + ((radius * 2 + 2) * (i % 2)) / 2, //  The starting Z coordinate. it shifts over by half a hex every other iteration
      70,
      radius * 2 + 2
    ).map((z) => {
      return [x, 0, z];
    }); // This will be the Z axis value
  });

  const tilesPos = rectMat.reduce((el1, el2) => el1.concat(el2));
  const tileObj = tilesPos.map(() => {
    return createHexagon(radius, 2);
  });

  tileObj.forEach((tile, index) => {
    scene.add(tile);
    tile.position.set(
      tilesPos[index][0],
      tilesPos[index][1],
      tilesPos[index][2]
    );
  });
  //  Create object array to check later with a ray
  const objects: three.Object3D[] = [];
  objects.push(cube);
  objects.push(boat);

  //    Define the function which starts the game
  function animate() {
    //  Set the function we're currently in to the animate callback
    requestAnimationFrame(animate);

    //  Rotate the game
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
  }

  //  Add mouse click event
  renderer.domElement.onclick = function onGameClick(ev: MouseEvent) {
    //  Offset gets element local coordinates
    const mouse3D = new three.Vector3(
      (ev.offsetX / renderer.domElement.width) * 2 - 1,
      -(ev.offsetY / renderer.domElement.height) * 2 + 1,
      0.5
    );
    console.log("X proportion %f and Y proportion %f.", mouse3D.x, mouse3D.y);
    const raycaster = new three.Raycaster();

    //  New ray from mouse click position
    raycaster.setFromCamera(mouse3D, camera);

    //  Will return array of intersecting objects
    const intersects = raycaster.intersectObjects(objects);

    //  Temporary check if something is actually hit with ray
    if (intersects.length > 0) {
      console.log("HIT!");
    } else {
      console.log("MISS!");
    }
  };

  //  Animate the Game
  animate();
}

export { createGame };
