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
  const camera = new three.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new three.WebGLRenderer();
  //    Set the size of the game
  renderer.setSize(window.innerWidth * 0.6, window.innerHeight * 0.5);
  gameContainer.appendChild(renderer.domElement);

  //    Create the objects within the game
  const geometry = new three.BoxGeometry();
  const material = new three.MeshBasicMaterial({ color: 0x00ff00 });
  const cube = new three.Mesh(geometry, material);
  scene.add(cube);

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

  //    Animate the Game
  animate();
}

export { createGame };
