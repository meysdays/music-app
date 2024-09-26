export default defineEventHandler(async (event) => {

    const spotifyAuthUrl = `https://accounts.spotify.com/authorize?client_id=4a008d4c9834431c828be178f1d0e143&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)}&scope=${encodeURIComponent(scopes)}`;
    await sendRedirect()
})