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
    MessageService.send(req.param("number"), req.param("interval"))
      .then( data => res.send(data) )
      .catch( err => console.log(err) );
  }
};
module.exports = Controller;
