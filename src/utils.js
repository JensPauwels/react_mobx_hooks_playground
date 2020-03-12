export const doFetch = async (url, method, body) => {
  const options = {
    method,
    credentials: 'include',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  let statusCode;

  return fetch(url, options)
    .then(res => {
      statusCode = res.status;
      return res.text();
    })
    .then((body) => {
      try {
        return JSON.parse(body);
      } catch {
        return body;
      }
    })
    .then((res) => {
      if (statusCode !== 200) throw {
        message: res.message,
        status_code: statusCode
      };
      else return res;
    });
};

