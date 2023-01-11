import * as THREE from 'three'
import BlastScene from './BlasterScene'

const width = window.innerWidth
const height = window.innerHeight

// # RENDERER
const renderer = new THREE.WebGLRenderer({
  canvas: document.getElementById("app") as HTMLCanvasElement
})
renderer.setSize(width, height)

// # CAMERA (field depth, aspect ratio, )
const mainCamera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100)

// # SCENE
const scene = new BlastScene()
scene.initialize()

/* --- */

// ## ONSTART CODE
// render the scene

function tick() {
  scene.update()
  renderer.render(scene, mainCamera)
  requestAnimationFrame(tick)
}

tick()
