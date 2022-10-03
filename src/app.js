import ifcApi from './config/initIfcApi'
import loadModel from './loader/index.js'
const $loaderTag = document.getElementById('file-input')

async function bootMyApp () {
  try {
    await ifcApi.Init()
    $loaderTag.addEventListener('change', loadModel)
  } catch (error) {
    throw new Error('There was an error while booting the app.')
  }
}

bootMyApp()
