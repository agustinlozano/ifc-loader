import ifcApi from './config/initIfcApi'
import loadModel from './loader/index.js'
const $loaderTag = document.getElementById('file-input')

async function bootMyApp () {
  await ifcApi.Init()
  $loaderTag.addEventListener('change', loadModel)
}

bootMyApp()
