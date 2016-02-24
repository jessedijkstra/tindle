export function getJWT(refreshToken) {
  return fetch('https://ws.blendle.com/tokens', {
    method: 'post',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      refresh_token: refreshToken
    })
  }).then((response)=> response.json());
}
