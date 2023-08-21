import * as THREE from 'three'

export default class BlastScene extends THREE.Scene
{
    initialize()
    {
        // ## OBJECTS
        // create a cube and define material, then apply both to a created mesh called cube
        const geometry = new THREE.BoxGeometry()
        const material = new THREE.MeshPhongMaterial({color: 0xFFAD00})

        const cube = new THREE.Mesh(geometry, material)
        cube.position.z = -5
        cube.position.y = -1

        this.add(cube)

        // ## LIGHTS
        const light = new THREE.DirectionalLight(0xFFFFFF, 1)
        light.position.set(0 , 4, 2)

        this.add(light)
    }

    update() {
        // update
    }
}
