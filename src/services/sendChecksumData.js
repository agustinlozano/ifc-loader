const BASE_URL = 'http://projects.bimtrazer.com/api/'

/* eslint-env browser */

async function sendChecksumData (data) {
  const modelData = new FormData()

  modelData.append('Guids', data.guids)
  modelData.append('File', data.file)

  const URL = BASE_URL + 'checksum'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: modelData
  }

  const res = await fetch(URL, options)

  console.log(res)

  return res
}

export default sendChecksumData
