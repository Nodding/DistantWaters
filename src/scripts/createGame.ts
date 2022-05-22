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

function createGame(id: string) {
  //  Grab the container that will contain the game
  const gameContainer = document.getElementById(id);
  if (gameContainer == null) {
    console.error("Could not fetch game container.");
    throw `Element of id '${id}' could not be found`;
    return;
  }

  //  Configure the settings for the game
  const scene = new three.Scene();

  //camera settings (changing camera width is a great way to move the camera around)
  const aspectRatio = window.innerWidth / window.innerHeight;
  const cameraWidth = 25;
  const cameraHeight = cameraWidth / aspectRatio;

  const camera = new three.OrthographicCamera(
    //left
    cameraWidth / -2,
    //right
    cameraWidth / 2,
    //top
    cameraHeight / 2,
    //bottom
    cameraHeight / -2
  );

  //  Mouse initialization and listener
  const mouse = new three.Vector3(0, 0, 0);
  document.addEventListener("mousedown", onDocumentMouseDown, false);

  //basic green cube
  const geometry = new three.BoxGeometry();
  const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new three.Mesh(geometry, material);

  //    Set the size of the game
  const renderer = new three.WebGLRenderer();
  renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.5);
  gameContainer.appendChild(renderer.domElement);

  //    Create the objects within the game
  /*const geometry = new three.BoxGeometry();
  const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new three.Mesh(geometry, material);
  scene.add(cube);
  */

  //    Move the camera to the proper location
  camera.position.z = 5;

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
  function onDocumentMouseDown(event) {
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
  function moveCUBE(coord) {
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
