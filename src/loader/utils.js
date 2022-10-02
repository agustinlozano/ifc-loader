import geometryTypes from '../types/geometryTypes.js'
import ifcApi from '../config/initIfcApi.js'

export async function OpenIfc (ifcAsText) {
  await ifcApi.Init()
  return ifcApi.OpenModel(ifcAsText)
}

export function GetAllItems (modelID, excludeGeometry = false) {
  const allItems = {}
  const lines = ifcApi.GetAllLines(modelID)
  getAllItemsFromLines(modelID, lines, allItems, excludeGeometry)
  return allItems
}

function getAllItemsFromLines (modelID, lines, allItems, excludeGeometry) {
  for (let i = 1; i <= lines.size(); i++) {
    try {
      saveProperties(modelID, lines, allItems, excludeGeometry, i)
    } catch (e) {
      console.log(e)
    }
  }
}

function saveProperties (modelID, lines, allItems, excludeGeometry, index) {
  const itemID = lines.get(index)
  const props = ifcApi.GetLine(modelID, itemID)

  // eslint-disable-next-line no-proto
  props.type = props.__proto__.constructor.name

  if (!excludeGeometry || !geometryTypes.has(props.type)) {
    allItems[itemID] = props
  }
}
