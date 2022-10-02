import ifcApi from '../config/initIfcApi.js'
import { OpenIfc } from './utils.js'

const loadModel = (changed) => {
  // eslint-disable-next-line no-undef
  const reader = new FileReader()

  reader.onload = () => LoadFile(reader.result)
  reader.readAsText(changed.target.files[0])
}

async function LoadFile (ifcAsText) {
  const uint8array = new TextEncoder().encode(ifcAsText)
  const modelID = await OpenIfc(uint8array)
  const map = ifcApi.ifcGuidMap

  console.log(map)

  ifcApi.CreateIfcGuidToExpressIdMapping(modelID)

  console.log(map)

  const guids = getAllGuids(map)

  if (guids.length === 0) {
    console.error('No GUIDs found')
  }

  console.log(guids)

  return modelID
}

function getAllGuids (map) {
  const values = map.values()
  const guids = []

  for (const value of values) {
    for (const item of value) {
      const guid = item

      console.log(guid)
      // guids.push(guid)
    }
  }

  return guids
}

export default loadModel
