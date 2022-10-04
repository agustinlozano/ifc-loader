import ifcApi from '../config/initIfcApi.js'
import { validateAnArray } from '../utils/validate.js'
import { getAllGuids, LoadFile } from './utils.js'
import generateName from './generateName.js'
import sendChecksumData from '../services/sendChecksumData.js'

/* eslint-env browser */

const loadModel = (changed) => {
  const reader = new FileReader()
  const file = changed.target.files[0]

  reader.readAsText(file)

  reader.onload = () => handlerOnload(reader, file)
}

async function handlerOnload (reader, file) {
  const modelId = await LoadFile(reader.result)

  ifcApi.CreateIfcGuidToExpressIdMapping(modelId)

  const map = ifcApi.ifcGuidMap
  const guids = getAllGuids(map)

  validateAnArray(guids, 'No GUIDs found.')

  const name = await generateName(file.name)

  const modelData = {
    Name: name,
    Guids: guids,
    IfcContent: reader.result
  }

  // En este punto del tiempo tengo toda la infomraciuon necesaria
  // para poder hacer el sendChecksumData
  console.log(modelData)
  // sendChecksumData(modelData)
}

export default loadModel
