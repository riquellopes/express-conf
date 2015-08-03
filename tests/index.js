var request = require("supertest");
var assert = require('assert');
var config = require("../config")

describe("Load environment", function(){

    it('the name should Bustamante', function(){
        assert.equal(config.name, "Bustamante");
    });
});
