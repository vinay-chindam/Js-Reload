Node js:
Node.js is a cross-platform, open-source JavaScript runtime environment that lets you run JavaScript code outside of a browser — typically on servers.

Chrome:V8
firefox:Spyder monkey

LTs even odd theory

A REST API is an interface that allows clients (like browsers or mobile apps) to communicate with servers using standard HTTP methods like GET, POST, PUT, and DELETE.
----------------------------------------------------------------------------------------------------------------------

Cors (cross origin resource sharing)

Browser side thing
Can pass through things like postman

app.use(cors()) allows all domains to intereact and risky
app.use((cors({
  origin:some domain that requests are allowed from

}}}
------------------------------------------------------------------------------------------------------------------------------------

JWT

              Json web token (stateless )
              stored on client side
              header:
              payload:
              signature

how it works:

header contains meta data like what algo is used
payload mostly contains user data and expiry etc

server uses a secret key  and combo of header and payload to generate a signature 
All these three are appended and called jwt
now server stores secret key

when ever user relogins  a jwt will be there with request and its verified at server

1 splits using delimiter
2 decoded using header,payload and secret key to achieve desired signature
3 compare desired and actual signature which came along requrest
4 if matches then user is ligitamate
5 else jwt has been currupted



This is how JWT works
              


