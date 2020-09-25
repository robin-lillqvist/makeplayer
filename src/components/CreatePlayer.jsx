import axios from 'axios'

function randomUsername (site) {
  return (
    `${site}-` +
    Math.random()
      .toString(36)
      .substring(2, 7) +
    Math.random()
      .toString(36)
      .substring(2, 7)
  )
}

function randomPhone () {
  return '70' + (Math.floor(Math.random() * 9000000) + 1000000)
}

const requestPlayer = async (request, site, url) => {
  let requestURL = `https://${site}${url}`
  debugger
  try {
    let response = await axios.post(requestURL, {})
    return response
  } catch (error) {
    return error
  }
}

export default async function CreatePlayer (site, franchise, currency, url) {
  let user = randomUsername(site)
  let phone = randomPhone()

  let apiRequest = {
    username: user,
    password: 'password',
    email: `${user}@comeon.com`,
    firstName: 'API',
    lastName: 'User',
    gender: 'FEMALE',
    postalCode: '12331',
    city: 'Stockholm',
    country: `${franchise}`,
    currency: `${currency}`,
    day: 1,
    month: 1,
    year: 1988,
    callingCode: '46',
    phoneNumber: phone,
    address: 'Kungsgatan 39',
    deviceId: 'TestDevice',
    acceptMarketingOffers: false
  }

  let result = requestPlayer(apiRequest, site, url)

  return result
}
