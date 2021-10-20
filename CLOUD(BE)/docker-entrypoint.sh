dockerize -wait tcp://mysql:3306 -timeout 60s

echo "Start server"
node app.js