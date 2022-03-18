# Tinder Cats

This challenge it was started using the following architecture and methodologies and technical decisions.

- Clean Code & Hexagonal Architecture (Frontend focused):

The Hexagonal Architecture is based on layers like an onion and proposes three base layers, Domain, Application, and Infrastructure. In this case, I focused on the Video as the main Entity (and unique) of the application. Also implemented on the other layers is the implementation of Video repository and controllers inside the infrastructure as well to be used on the Infrastructure too but on use cases and UI.

```javascript
./src
../domain
..../application
....../useCases

../infrastructure
..../ui
..../components
....../screens
..../repositories
..../controllers

```



Using this approach the domain folder does know-how will be implemented, and the application layer only can access to domain but doesn't know how the infrastructure will be implemented encouraging the segregation of the responsibilities

