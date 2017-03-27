const rp = require('request-promise');

function film(req, res) {
  const baseUrl = 'http://api.cinelist.co.uk/search/cinemas/coordinates/51.525493/-0.0822173';

  rp({
    method: 'GET',
    url: `${baseUrl}`,
    json: true
  })
  .then((response) => {
    res.status(200).json(response);
  })
  .catch((err) => {
    res.status(500).json(err);
  });
}

module.exports = {
  film
};