var assert = require('assert');
var calc = require("./calc.js");
var MS = require("./almondStore.js");

/*
describe("calc test",function(){
	this.timeout(10000)
	 it("returns 4+5=9",function(done){
	 	assert.equal(calc.add(4,5), 9);
		setTimeout(done,2000);
	});

it("returns 4*5=20",function(done){
	 	assert.equal(calc.mul(4,5), 20);
		setTimeout(done,2000);
	});

it("returns 5-4=1",function(done){
	 	assert.equal(calc.sub(5,4), 1);
		setTimeout(done,2000);
	});

it("returns 10/2 ==5",function(done){
	assert.equal(calc.div(10,2), 5)
	setTimeout(done,2000);
   });

it("x and y are equal",function(done){
	assert.equal(calc.fun(19,19),"x and y are equal")
	    	setTimeout(done,2000);
    });

it("securifi emebedded systems",function(done){
	assert.equal(calc.fun_one(), "securifi emebedded systems")
		setTimeout(done,2000);
});
});

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});



describe('Array', function() {  
  describe('#indexOf()', function() {
    // pending test below
    it('should return -1 when the value is not present');
  });
});

describe('a suite of tests', function() {
   this.timeout(9000);
  it('should take less than 500ms', function(done) {
  	assert.equal(calc.div(10,2), 5)
    setTimeout(done, 2000);
  });
});

describe("test case timeout", function(){    // it will excute after 2 secs 
	this.timeout(10000);
		it("should take 2sec", function(done){
			assert.equal(calc.fun_three(),"please subscribe it")
			setTimeout(done,2000);

		});
});

describe("MS.increment function", function(){
	it("something",function(done){
		assert.equal(MS.increment(true), "testing");
		done();
		console.log(connections);
	});
});

describe("MS.hset function", function(){
  it("something",function(done){
    assert.equal(MS.hset("251176216367984", {connecting: true}),)
      done();
  });
});

describe("MS.hget function", function(){
  it("something",function(done){
    assert.equal(MS.hget("251176216367984"), "testing")
      done();
  });
});

describe("MS.addAff function", function(){
  it("something",function(done){
    assert.equal(MS.addAff("251176216367984a", {connecting: 'false'}),undefined )
      done();
  });
});

describe("MS.addAff function", function(){
  it("something",function(done){
    assert.equal(MS.addAff("251176216367984a", {connecting: 'false'}),undefined )
      done();
  });
	
	describe("MS.check function", function(){
  it("something",function(done){
    assert.deepEqual((MS.check("55454")), {AlmondMAC: '55454', Server: 'A2101', Status: 0, lastEpoch: 0 })
      done();
       });
});
	
	describe("MS.setUsers function", function(){
	it("function testing", function(done){
		assert.equal(MS.setUsers({users:[]}, {UserID:200, Action: "add"}), 1)
			done();
	})
})
});
*/


describe("MS.hset function", function(){
  it("function testing",function(done){
    assert.equal(MS.hset("251176216367984", {connecting: true}), )
    console.log(MS.sessionDestroyMACS)
         done();

  });
});

describe("MS.hset function", function(){
  it("function testing",function(done){
    assert.equal(MS.hset("251176216367984", {connecting: true}), )
         done();
  });
});
