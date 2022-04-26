var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
var cube, cube2;
var modelObject;


/**
 * Generate a scene object with a background color
 **/

function getScene() {
  var scene = new THREE.Scene();
  scene.background = new THREE.Color(0x111111);
  return scene;
}

/**
 * Generate the camera to be used in the scene. Camera args:
 *   [0] field of view: identifies the portion of the scene
 *     visible at any time (in degrees)
 *   [1] aspect ratio: identifies the aspect ratio of the
 *     scene in width/height
 *   [2] near clipping plane: objects closer than the near
 *     clipping plane are culled from the scene
 *   [3] far clipping plane: objects farther than the far
 *     clipping plane are culled from the scene
 **/

function getCamera() {
  var aspectRatio = window.innerWidth / window.innerHeight;
  var camera = new THREE.PerspectiveCamera(75, aspectRatio, 0.1, 1000);
  camera.position.set(0, 90, -10);
  return camera;
}

/**
 * Generate the light to be used in the scene. Light args:
 *   [0]: Hexadecimal color of the light
 *   [1]: Numeric value of the light's strength/intensity
 *   [2]: The distance from the light where the intensity is 0
 * @param {obj} scene: the current scene object
 **/

function getLight(scene) {
  var light = new THREE.PointLight(0xffffff, 1, 0);
  light.position.set(20, 50, 20);
  scene.add(light);

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(ambientLight);
  return light;
}

/**
 * Generate the renderer to be used in the scene
 **/

function getRenderer() {
  // Create the canvas with a renderer
  var renderer = new THREE.WebGLRenderer({
    antialias: true
  });
  // Add support for retina displays
  renderer.setPixelRatio(window.devicePixelRatio);
  // Specify the size of the canvas
  renderer.setSize(window.innerWidth, window.innerHeight);
  // Add the canvas to the DOM
  document.body.appendChild(renderer.domElement);
  return renderer;
}

/**
 * Generate the controls to be used in the scene
 * @param {obj} camera: the three.js camera for the scene
 * @param {obj} renderer: the three.js renderer for the scene
 **/

function getControls(camera, renderer) {
  var controls = new THREE.TrackballControls(camera, renderer.domElement);
  controls.zoomSpeed = 0.4;
  controls.panSpeed = 0.4;
  return controls;
}

/**
 * Load model
 **/

function loadModel() {
  loader = new THREE.OBJLoader();
  loader.load('models/BRIST_Game.obj', function (object) {
    object.rotation.z = Math.PI;
    modelObject = object;
    modelObject.rotation.x = -90;
    modelObject.rotation.y = -80;
    modelObject.position.set(50, -400, 0);
    scene.add(object);
    animateModel();
    createBox();
    createBox2();
    createBox3();
    createBox4();
  });
}

function animateModel() {
  requestAnimationFrame(animateModel);
  modelObject.rotation.z -= 0.01;
  
}


// create the first box
function createBox() {
    // create a box
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({
      color: 0x12ae54
    });
    cube = new THREE.Mesh(geometry, material);
    cube.position.set(0, -50, -50);
    scene.add(cube);
    cube.scale.x = 20; // SCALE
    cube.scale.y = 20; // SCALE
    cube.scale.z = 20; // SCALE
    cube.parent = modelObject;
  
  
    animate();
  }
  
  // animate the first box
  function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    cube.rotation.z += 0.1;
    renderer.render(scene, camera);
  
  }

  // create the second box
function createBox2() {
    // create a box
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({
      color: 0xee260e
    });
    cube2 = new THREE.Mesh(geometry, material);
    cube2.position.set(0, 200, -50);
    scene.add(cube2);
    cube2.scale.x = 20; // SCALE
    cube2.scale.y = 20; // SCALE
    cube2.scale.z = 20; // SCALE
    cube2.parent = modelObject;
  
  
    animate2();
  }
  
  // animate the second box
  function animate2() {
    requestAnimationFrame(animate2);
    cube2.rotation.x += 0.1;
    cube2.rotation.y += 0.1;
    cube2.rotation.z += 0.1;
    renderer.render(scene, camera);
  
  }
  
  // create the third box
function createBox3() {
    // create a box
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({
      color: 0xeee00e
    });
    cube3 = new THREE.Mesh(geometry, material);
    cube3.position.set(0, 80, -170);
    scene.add(cube3);
    cube3.scale.x = 20; // SCALE
    cube3.scale.y = 20; // SCALE
    cube3.scale.z = 20; // SCALE
    cube3.parent = modelObject;
  
  
    animate3();
  }
  
  // animate the third box
  function animate3() {
    requestAnimationFrame(animate3);
    cube3.rotation.x += 0.1;
    cube3.rotation.y += 0.1;
    cube3.rotation.z += 0.1;
    renderer.render(scene, camera);
  
  }
  
   // create the fourth box
function createBox4() {
    // create a box
    var geometry = new THREE.BoxGeometry();
    var material = new THREE.MeshBasicMaterial({
      color: 0x120eee
    });
    cube4 = new THREE.Mesh(geometry, material);
    cube4.position.set(0, 80, 100);
    scene.add(cube4);
    cube4.scale.x = 20; // SCALE
    cube4.scale.y = 20; // SCALE
    cube4.scale.z = 20; // SCALE
    cube4.parent = modelObject;
  
  
    animate4();
  }
  
  // animate the fourth box
  function animate4() {
    requestAnimationFrame(animate4);
    cube4.rotation.x += 0.1;
    cube4.rotation.y += 0.1;
    cube4.rotation.z += 0.1;
    renderer.render(scene, camera);
  
  }



/**
 * Render!
 **/

function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
  controls.update();
};

var scene = getScene();
var camera = getCamera();
var light = getLight(scene);
var renderer = getRenderer();
var controls = getControls(camera, renderer);


loadModel()

render();