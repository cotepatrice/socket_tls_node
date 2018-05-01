# socket_tls_node
Test socket tls in Node js

This is based on 2 tutorials : https://gist.github.com/anhldbk/3ea07d006c0fd411f19c0e362d4e0ec0 and 
https://gist.github.com/sandfox/1831932

You should regenerate the certificates in tls exemple. Be careful when generating singnin requests. Enter your PC name when asked for 
Common Name to be able to test with localhost :

###
#Step 1 - Generates server certificates
###
```
cd server

#generate private key
openssl genrsa -out server-private-key.pem 4096

#generate signing request
openssl req -new -key server-private-key.pem -out server-certificate-signing-request.pem

#self sign the request (or send off the Verisign etc etc)
openssl x509 -req -in server-certificate-signing-request.pem -signkey server-private-key.pem -out server-certificate.pem

###
#Step 2 - now for the client certificates
###

cd ../
cd client

#generate private key
openssl genrsa -out client-private-key.pem 4096

#generate signing request
openssl req -new -key client-private-key.pem -out client-certificate-signing-request.pem

#self sign the request (or send off the Verisign etc etc)
openssl x509 -req -in client-certificate-signing-request.pem -signkey client-private-key.pem -out client-certificate.pem
```

Then you launch a first console to host the server in administrator mode on Windows and type :

```
cd ..\
node server\server.js
```
Now you can open a second console and launch the client
```
node client\client.js
```
