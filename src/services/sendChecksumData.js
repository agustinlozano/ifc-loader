const BASE_URL = 'http://projects.bimtrazer.com/api/'

/* eslint-env browser */

async function sendChecksumData (data) {
  const modelData = new FormData()

  modelData.append('Name', data.Name)
  modelData.append('Guids', data.Guids)
  modelData.append('IfcContent', data.IfcContent)

  const URL = BASE_URL + 'checksum'
  const options = {
    method: 'POST',
    body: modelData
  }

  const res = await fetch(URL, options)

  console.log(res)

  return res
}

export default sendChecksumData
