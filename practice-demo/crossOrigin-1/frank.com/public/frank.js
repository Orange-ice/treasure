function ajax(method, url) {
  return new Promise((resolve, reject) => {
    const request = new XMLHttpRequest();
    request.open(method, url);
    request.onreadystatechange = () => {
      if (request.readyState === 4) {
        if (request.status === 200) {
          resolve(request.response);
        } else {
          reject(request);
        }
      }
    };
    request.send();
  });
}

ajax("GET", "http://localhost:8888/friends.json").then((response) => {
  console.log("这是AJAX");
  console.log(response);
});

function jsonp(url) {
  return new Promise((resolve, reject) => {
    const random = "frankJSONCallbackName" + Math.random();
    window[random] = (data) => {
      resolve(data);
    };
    const script = document.createElement("script");
    script.src = `${url}?callback=${random}`;
    script.onload = () => {
      script.remove();
    };
    script.onerror = () => {
      reject();
    };
    document.body.appendChild(script);
  });
}

jsonp("http://localhost:8888/friends.js").then((data) => {
  console.log(data);
});
