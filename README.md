A simple library that converts locations, typically provided by something like the Google Place Autocomplete API (or Geocomplete) into URL friendly slugs - in an AirBnb style

Shoreditch Highstreet, London **
becomes
**Shoreditch-High-Street--London

##Usage

**Slug**
```javascript
var slugger = require('location-slugger'),

var result = slugger.slug("Camberley, Surrey");
//returns 'Camberley--Surrey'
  ```
  
**Un-Slug**
  ```javascript
var slugger = require('location-slugger'),

var result = slugger.slug("Camberley--Surrey");
//returns 'Camberley, Surrey'
  ```
