function startCountdown(count, callback) {
    callback(count, function (count) {
      callback(count, function (count) {
        callback(count, function (count) {
          callback(count, function (count) {
            callback(count, function (count) {
              callback(count, function (count) {
                callback(count, function (count) {
                  callback(count, function (count) {
                    callback(count, function (count) {
                      callback(count, function () {
                        callback("Happy Independence Day");
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  }
  function updateDisplay(count, next) {
    setTimeout(function () {
      document.getElementById('display').innerText = count;
      next(count - 1);
    }, 1000);
  }
  startCountdown(10, updateDisplay);
  