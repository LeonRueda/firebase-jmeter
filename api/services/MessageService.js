/**
 * Created by pedro.rueda on 19/09/2017.
 */

const Rx = require('rxjs');
const Service = {
  send: function (number, interval) {
    return new Promise((success, error) => {
      let counter = 0;
      const timer$ = Rx.Observable.interval(interval)
        .take(number)
        .subscribe(
          data => FirebaseService.sendMessage(data),
          err => error(err),
          complete => success(complete)
        );
    });
  }
};

module.exports = Service;
