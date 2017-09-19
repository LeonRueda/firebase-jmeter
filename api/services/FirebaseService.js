/**
 * Created by pedro.rueda on 19/09/2017.
 */
const firebase = require('firebase');
const Observable = require('rxjs/Observable').Observable;
require('rxjs/add/observable/of');
require('rxjs/add/observable/fromEvent');
let counter = 0;

const Service = {
  init: function () {
    const config = {
      apiKey: "AIzaSyD5pgr5gnepLaJYfXthXP98sRo162730rI",
      authDomain: "turneraschat.firebaseapp.com",
      databaseURL: "https://turneraschat.firebaseio.com",
      projectId: "turneraschat",
      storageBucket: "turneraschat.appspot.com",
      messagingSenderId: "342325063686",
      counter: counter
    };
    firebase.initializeApp(config);
    this.database = firebase.database();
    this.ref = this.database.ref('Leon-Probes');
    this.ref$ = Observable.of(this.ref);
  },
  connect: function () {
    Service.init();
    return new Promise( ( success, error ) => {
      let query = this.ref.orderByChild('createdAt').limitToLast(10);
      Observable.fromEvent(query, 'value', parseMessage)
        .subscribe( ( val ) => success( val ), err => error(err));
    })
  },
  sendMessage: function ( message ) {
    this.ref.push( message );
  },
  readMessages: function (number) {
    return new Promise( ( success, error ) => {
      let query = this.ref.orderByChild('createdAt').limitToLast(number);
      Observable.fromEvent(query, 'value', parseMessage)
        .subscribe( ( val ) => success( val ), err => error(err));
    })
  }
};

const parseMessage = function (snap) {
  return ({
    val : snap.val(),
    id: snap.key,
    createdAt: Date.now(),
    serverTime: snap.val() ? snap.val().createdAt : '-'
  });
};

module.exports = Service;
