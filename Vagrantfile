Vagrant.configure('2') do |config|
  config.vm.box = 'azure'

  # use local ssh key to connect to remote vagrant box
  config.ssh.private_key_path = '~/.ssh/id_rsa'
  config.vm.provider :azure do |azure, override|

    # each of the below values will default to use the env vars named as below if not specified explicitly
    azure.tenant_id = '875cbb37-231c-44f5-965d-a2e2a0f0ab47'
    azure.client_id = 'b0bf52af-02ff-4230-80bc-f82b191dd9f1'
    azure.client_secret = 'bb003172-e5b0-4366-8321-878a4925c8b6'
    azure.subscription_id = '11bf26af-2b6d-4568-8799-6179d925bad9'
  end

  config.vm.provision :ansible do |ansible|
    	ansible.playbook = "provision/ansible_prov.yml"
  end

end
