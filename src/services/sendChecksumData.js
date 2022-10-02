// Send IFC model to server and get checksum
const BASE_URL = 'http://projects.bimtrazer.com/api/'

async function sendChecksumData (ifcModel) {
  const URL = BASE_URL + 'checksum'
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'text/plain'
    },
    body: ifcModel
  }

  const res = await fetch(URL, options)

  console.log(res)

  return res
}

export default sendChecksumData
