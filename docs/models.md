# Format

We are technically using the GLTF format. However, every file must have the *.glb* extension. This ensures that everything needed for the model is placed perfectly within the file.

# Importing new models into the project

This will require **Blender**. First, import whatever file you want to be in the game into blender first. What we are looking for is the scale of the model. Pressing *A* will select everyhting on the screen. Pressing *S* will enter scale mode and allow you to scale down the model. Note that extremeley large models might appear completely invisible, because the ViewPort Camera that shows the model will declare them outside the *clipping range* if they go behind the camera.

When exporting the model, always export as a gltb. I also recommend saving a local *.blend* file for assurity of file and texture safety.