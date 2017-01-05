describe('tree', function() {

  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
     var alice = {
       name: 'alice',
       shout: function(){
         return this.name;
       }
     }
      var boundShout = alice.shout.bind(alice);
      var boundobject = alice.shout.bind({name: 'bob'});

    expect(boundShout()).to.equal('alice');
    expect(boundobject()).to.equal('bob');
  });


  it('should have methods named "addChild" and "contains", and a property named "value"', function() {
      var func = function(a, b){ return a + b };
      var boundFunc = func.bind(null, 'foo');
      var result = boundFunc('bar');
    expect(result).to.equal('foobar');
  });

});
