/* eslint-env browser */
import './loadComponents.js'
async function loadScene (sceneURL) {
  console.log('load scene', sceneURL)

  fetch(sceneURL, { cache: 'no-cache' })
    .then(res => res.text())
    .then(text => {
      const container = document.querySelector('#container')
      container.innerHTML = text
    })
}
loadScene('../scene/scene.xml')
