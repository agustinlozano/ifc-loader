import ifcApi from '../config/initIfcApi.js'
import { validateAnArray } from '../utils/validate.js'
import { getAllGuids, LoadFile } from './utils.js'

/* eslint-env browser */

const loadModel = (changed) => {
  const reader = new FileReader()

  const file = changed.target.files[0]

  reader.readAsText(file)
  const modelData = { file }

  reader.onload = () => handlerOnload(reader, modelData)
}

async function handlerOnload (reader, modelData) {
  const modelId = await LoadFile(reader.result)

  ifcApi.CreateIfcGuidToExpressIdMapping(modelId)

  const map = ifcApi.ifcGuidMap
  const guids = getAllGuids(map)

  validateAnArray(guids, 'No GUIDs found.')

  modelData = { ...modelData, modelId, guids }

  // En este punto del tiempo tengo toda la infomraciuon necesaria
  // para poder hacer el sendChecksumData
  console.log(modelData)
  // sendChecksumData(modelData)
}

export default loadModel
