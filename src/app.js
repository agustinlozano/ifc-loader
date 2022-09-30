import { IfcAPI, IFCSPACE } from 'web-ifc/web-ifc-api'
const ifcFileLocation = '../models/PruebaParametrosBTZ.ifc'
const ifcapi = new IfcAPI()
let modelID = 0

ifcapi.SetWasmPath('src/wasm/')

async function getIfcFile (url) {
  const response = await fetch(url)
  const buffer = await response.arrayBuffer()
  return new Uint8Array(buffer)
}

/**
 * Get all IFCSPACE from ifc file
 * @param integer modelID
 * @returns array
 */
function getAllSpaces (modelID) {
  // Get all the propertyset lines in the IFC file
  const lines = ifcapi.GetLineIDsWithType(modelID, IFCSPACE)
  const lineSize = lines.size()
  const spaces = []

  for (let i = 0; i < lineSize; i++) {
    // Getting the ElementID from Lines
    const relatedID = lines.get(i)
    // Getting Element Data using the relatedID
    const relDefProps = ifcapi.GetLine(modelID, relatedID)
    spaces.push(relDefProps)
  }

  return spaces
}

async function bootMyApp () {
  await ifcapi.Init()
  const ifcData = await getIfcFile(ifcFileLocation)

  modelID = ifcapi.OpenModel(ifcData)
  const isModelOpened = ifcapi.IsModelOpen(modelID)

  console.log({ isModelOpened })

  const spaces = getAllSpaces(modelID)

  console.log({ spaces })

  ifcapi.CloseModel(modelID)
}

bootMyApp()
