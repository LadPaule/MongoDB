const mocha = require('mocha');
const assert = require('assert');
const ispraModel = require('../models/isprans');
//Description for Mocha

describe('Saves the records to the mongo data base', function(){
   //creating tests;

   it('Saving records', function(){

      var characters = new ispraModel({
         name: 'Ssozi Paul',
         age: 21,
         expertise: 'Systems Administrator'
      });

      characters.save().then(function(){
         assert(characters.isNew === false);
  
      });
   });

});