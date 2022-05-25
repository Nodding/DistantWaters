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

  //  Set the camer to look at the origin
  camera.lookAt(0, 0, 0);

  //  Configure the light for the scene

  //  Create a soft ambient light so that everything can be seen
  const ambLight = new three.AmbientLight(0x222222, 0.1);
  scene.add(ambLight);

  //  Create a softbox simulating sunlight that provides shadows to the scene
  const sun = new three.DirectionalLight(0xffffb5, 0.7);
  sun.position.set(100, 100, 0);
  scene.add(sun);

  //  Mouse initialization and listener
  const mouse = new three.Vector3(0, 0, 0);
  document.addEventListener("mousedown", onDocumentMouseDown, false);

  //  Create the boat

  //basic green cube
  const geometry = new three.BoxGeometry();
  const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new three.Mesh(geometry, material);
  cube.position.set(0, 0, 0);
  scene.add(cube);

  //  Create the boat
  const boat = await loadGLTFObject("src/assets/models/pirateship.glb");
  boat.position.set(0, 0, 0);
  scene.add(boat);

  //    Define the function which starts the game
  function animate() {
    //  Set the function we're currently in to the animate callback
    requestAnimationFrame(animate);

    //  Rotate the game
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
  //  Mouse click event function
  function onDocumentMouseDown(event: MouseEvent) {
    event.preventDefault();

    switch (event.which) {
      case 1: // ONLY left mouse click
        mouse.x = event.clientX / window.innerWidth;
        mouse.y = -event.clientY / window.innerHeight;
        moveCUBE(mouse);
        break;
    }
  }

  //  Moves cube when called. (BROKEN! NEED TO FIX IT GOING TO 0,0 FIRST BEFORE TRANSLATING)
  function moveCUBE(coord: three.Vector3) {
    cube.translateX(-(coord.x / window.innerWidth));
    cube.translateY(coord.y / window.innerHeight);

    cube.translateX(coord.x);
    cube.translateY(coord.y);
    scene.add(cube);
  }

  //    Animate the Game
  animate();
}

export { createGame };
