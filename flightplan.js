  var plan = require('flightplan');

  // configuration only in staging machine
  plan.target('staging', {
    host: 'twilight-hill-77.westus.cloudapp.azure.com',
    username: 'vagrant',
    agent: process.env.SSH_AUTH_SOCK
  });

  plan.remote(function(remote) {
    remote.log('Executing aplication');

    remote.with('cd ~/IV-Application', function() {
      remote.exec('npm install');
      remote.exec('sudo npm start');
    });

  });

  plan.local(function(local) {
    local.log('Clean up');
  });
