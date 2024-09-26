export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const authorizationCode = body.code;

  const clientId = '';
  const clientSecret = '';
  const redirectUri = ''

  const uri = `https://api.spotify.com/v1/recommendations?seed_artists=4NHQUGzhtTLFvgF5SZesLK&seed_genres=classical%2Ccountry&seed_tracks=0c6xIDDpzE81m2q797ordA`

  const {data} = await $fetch(uri)

  return data
})