import { IfcAPI } from 'web-ifc/web-ifc-api'

const ifcApi = new IfcAPI()

ifcApi.SetWasmPath('src/wasm/')

export default ifcApi
