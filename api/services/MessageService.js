/**
 * Created by pedro.rueda on 19/09/2017.
 */

const Observable = require('rxjs/Observable').Observable;
require('rxjs/Observable/interval');

const Service = {
  sendMessage: function (number, interval) {
    let counter = 0;
    const timer$ = Observable.interval(interval).take(number).subscribe(data => FirebaseService.sendMessage(data));

  }
};

module.exports = Service;
