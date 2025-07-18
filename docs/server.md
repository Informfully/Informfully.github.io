---
title: Server Overview
---

The Informfully back end uses [Meteor](https://www.meteor.com/). Meteor
connects to clients using a web socket protocol, which is a full-duplex
communication protocol that closes only once a connection state has
died. That is, web socket connections are bidirectional and are kept
open even after the response to a request is received by the client. The
benefit of this is that after successfully connecting to a client, the
server can "push" data to the client whereas over traditional protocols
(HTTP), a connection to a client is closed once the response from the
server is received. A traditional client receives data updates by
re-requesting the same resources.

For time-sensitive applications, this translates to requesting the same
resources from a server in very short time intervals (polling) which
unnecessarily increases the load on a server. It is encouraged to check
out the Meteor documentation referenced below for more information.

# Database Collections

The project uses a MongoDB for the database. You can download [MongoDB
Compass](https://www.mongodb.com/products/compass) to view and
manipulate the data in the database. If you are running Meteor locally,
you can connect MongoDB Compass to the database by following the
instructions in [Local
Development](https://informfully.readthedocs.io/en/latest/development.html).
If Meteor has been deployed to production, take a look at [Website
Deployment](https://informfully.readthedocs.io/en/latest/deployment.html)
to connect to a remote database.

[List of Database
Collections:](https://informfully.readthedocs.io/en/latest/database.html)

# Meteor Publications

The Meteor server shares its data with the client through
`publications`. The client can `subscribe` to a publication to get the
necessary data and copy it into its own local Minimongo database. The
local database is updated automatically, always reflecting the most
current changes.

The files for the Meteor Publications are in the folder
`imports/api/server/publications` and are split into files according to
the related collections in MongoDB. These functions define what data
will be synchronized to the client when it subscribes to one of the
publications.

[List of Meteor
Publications:](https://informfully.readthedocs.io/en/latest/publications.html)

# Meteor Methods

Meteor `methods` are functions to call when modifying data. It is
similar to POST requests with REST APIs. These methods are also
available to the client as stub functions. This means that the client
will simulate the outcome and update its UI with its local Minimongo
database before a confirmation from the server (more info
[here](https://docs.meteor.com/api/methods.html)).

The methods can be found in the folder `imports/api/`. In this folder,
all the Meteor methods are split into JavaScript files and are named
after the collections in MongoDB they are related to.

[List of Meteor
Methods:](https://informfully.readthedocs.io/en/latest/methods.html)
