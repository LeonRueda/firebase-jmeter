/**
 * Created by pedro.rueda on 19/09/2017.
 */
const Controller = {
  connect: function ( req, res ) {
    FirebaseService.connect()
      .then( (data) => {
        return res.send(data);
      })
      .catch( (err) => console.log(err));
  },
  sendMessage: function (req, res) {
    MessageService.send(req.param("number"), req.param("interval"));
    res.send("schedule " + req.param("number") + " messages each " + req.param("interval")/1000 + " secs." );
  },
  readMessage: function (req, res) {
    FirebaseService.readMessages(+req.param("number"))
      .then( data => res.send( data ) )
      .catch( err => console.log( err ) );
  }
};
module.exports = Controller;
