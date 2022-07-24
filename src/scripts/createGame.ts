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
import { loadGLTFObject } from "./loadAssets";
import { createAxialSystem, getTileObjects } from "./tiles";

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

  //  camera settings (changing camera width is a great way to move the camera around)
  const aspectRatio = window.innerWidth / window.innerHeight;
  const cameraWidth = 25;
  const cameraHeight = cameraWidth / aspectRatio;

  //  Set the size of the game
  const renderer = new three.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth - 200, window.innerHeight * 0.7);
  gameContainer.appendChild(renderer.domElement);

  //  Configure Renderer for GLTF objects
  renderer.outputEncoding = three.sRGBEncoding;

  //  Configure misc render properties

  //  Create the objects within the game

  //  Create the camera for the scene
  const cameraScale = 0.4;
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
  camera.position.set(70, 70, -70);

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

  //  Create the boat
  const localUserBoat = await loadGLTFObject(
    "src/assets/models/pirateship.glb"
  );
  localUserBoat.position.set(0, 0, 0);
  scene.add(localUserBoat);

  //  Create and add hexagon tiles to the game
  //  First I create a line of hexagons along the x axis
  const drawRadius = 5; //  How large the hexagons will actually be drawn on the screen
  const distanceRadius = 5.3; //  How far apart the hexagons will be from each other
  //  Get the positions for all of the tiles
  const tilesCoordinates = createAxialSystem(7, 8);
  //  Place renderable objects at each of those positions
  const tileList = getTileObjects(
    drawRadius,
    0,
    distanceRadius,
    tilesCoordinates,
    [-30, 0, -30]
  );
  //  Add those objects to the scene
  tileList.forEach((el) => scene.add(el));

  //  Define the function which starts the game
  function animate() {
    //  Set the function we're currently in to the animate callback
    requestAnimationFrame(animate);

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
    const intersects = raycaster.intersectObjects(tileList);

    //  Temporary check if something is actually hit with ray
    if (intersects.length > 0) {
      const firstObject = intersects[0].object;
      console.log(
        "Hit tile %d at position %d, %d, %d",
        firstObject.id,
        firstObject.position.x,
        firstObject.position.y,
        firstObject.position.z
      );
    } else {
      console.log("MISS!");
    }
  };

  //  Animate the Game
  animate();
}

export { createGame };
