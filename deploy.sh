#!/usr/bin/env bash

serverIp="54.87.30.7"
sshUser="ec2-user"
sshKey="~/.ssh_keys/profile_machine.pem"

buildScript="yarn build"
site="abdelwahab.dev"

rm -rf build.zip build/   
$buildScript    
zip -vr build.zip build/

ssh -i $sshKey  ubuntu@$serverIp "sudo rm -rf /var/www/$site/build.zip"

scp -i $sshKey build.zip $sshUser@$serverIp:/var/www/$site

ssh -i $sshKey ubuntu@$serverIp "cd /var/www/$site && unzip build.zip && mv html html-old && mv build html && rm -rf html-old"

