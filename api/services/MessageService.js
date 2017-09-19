/**
 * Created by pedro.rueda on 19/09/2017.
 */

const Rx = require('rxjs');
const Service = {
  renderMessage: function (counter) {
    return {
      body: "body", // string;
      color: "color", // string;
      createdAt: {}, // Object;
      referrer: "referrer", // string;
      uid: "uid", // string;
      username: "UserName", // string;
      counter: counter
    }
  },
  send: function (number, interval) {
    let counter = 0;
    const timer$ = Rx.Observable.interval(interval)
      .take(number)
      .subscribe(
        data => FirebaseService.sendMessage(this.renderMessage(data)),
        err => error(err),
        complete => success(complete)
      );
  },
  read: function (number) {
    return new Promise( (success, error) => {
      FirebaseService.readMessages(number)
        .then(data => success(data))
        .catch( err => error(err));
    })
  }
};

module.exports = Service;
