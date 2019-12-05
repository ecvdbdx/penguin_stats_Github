const fetchJson = url => {
  return fetch(url).then(function(res) {
    return res.json();
  });
};
export default fetchJson;
