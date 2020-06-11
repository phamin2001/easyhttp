function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Make any HTTP GET Request
easyHTTP.prototype.get = function (url, callback) {
  this.http.open('GET', url, true);

  let self = this;

  this.http.onload = function () {
    console.log(self.http.status);
    
    if (self.http.status === 200) {
      callback(null, self.http.responseText);
    } else {
      callback('Error:' + self.http.status);
    }
  };

  this.http.send();
};

// Make any HTTP POST Request

// Make any HTTP PUT Request

// Make any HTTP DELETE Request
