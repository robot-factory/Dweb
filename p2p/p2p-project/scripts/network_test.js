const network = require('network')

network.get_active_interface((err, result) => {
  if (err) {
    console.log('network get_active_interface err', err)
  } else {
    console.log('network get_active_interface response', result)
  }
})