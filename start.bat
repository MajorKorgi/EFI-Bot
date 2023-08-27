@ECHO off

ECHO "###############################################################"
ECHO "#                                                             #"
ECHO "#  This is a script to start the efi-bot!                     #"
ECHO "#  Please make sure you have the latest version of NodeJS.    #"
ECHO "#                                                             #"
ECHO "#  If you have any questions, please visit our website:       #"
ECHO "#  http://avegamers.net                                       #"
ECHO "#                                                             #"
ECHO "###############################################################"
ECHO "  "

ECHO "Starting efi-bot..."

node deploy-commands.js
node bot.js

PAUSE