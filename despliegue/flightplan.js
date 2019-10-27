  var plan = require('flightplan');

  // configuration only in staging machine
  plan.target('staging', {
    host: 'delicate-sunset-33.westus.cloudapp.azure.com',
    username: 'vagrant',
    agent: process.env.SSH_AUTH_SOCK
  });

  plan.remote(function(remote) {
    remote.log('Executing aplication');

    remote.with('cd ~/IV-Application', function() {
      remote.exec('npm install');
      remote.exec('npm install');
      remote.exec('sudo pm2 start app.js');
    });

  });

  plan.local(function(local) {
    local.log('Cleaning up...');
  });
