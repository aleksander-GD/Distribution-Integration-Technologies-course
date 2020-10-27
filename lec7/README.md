Exercise: Cryptanalysis
-----------------------

You've learned the following top-secret message:
```
 Stensucaioerylstce
```

Decrypt it

Hint: Scytale


Exercise: HTTPS with a self-signed certificate
----------------------------------------------

- Install `openssl`

  Mac/Linux: you may already have `openssl` installed  
  Windows Subsystem for Linux: `sudo apt-get install openssl`  
  Windows: https://tecadmin.net/install-openssl-on-windows/  

 - Generate a self-signed certificate as described here:

    https://letsencrypt.org/docs/certificates-for-localhost/  

   (alternatively: reuse the one I included here)

- Install the `express` module (or just run  `npm install`)

- Run your own local node HTTPS server.  
  (Make sure the Node server reads your generated files)

- Check that you can access https://localhost:3000 both via
  `curl --insecure` and your Chrome browser

- Can you recognize the TLS handshake when running the following command?
  ```
   $ curl -v --insecure https://localhost:3000
  ```

- Challenge: can you install your root certificate to remove the
  browser's warning?


Exercise: Secure the coupon-code service
----------------------------------------

The coupon-code service in [coupon-code](coupon-code) is not secure against cheating clients.

Secure it by modifying the client and server appropriately.

Bonus exercise: extend the coupon-code service to use HTTPS.