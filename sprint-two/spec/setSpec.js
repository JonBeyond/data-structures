describe('set', function() {
  var set;

  beforeEach(function() {
    set = Set();
  });

  it('should have methods named "add", "contains", and "remove"', function() {
    expect(set.add).to.be.a('function');
    expect(set.contains).to.be.a('function');
    expect(set.remove).to.be.a('function');
  });

  it('should add values to a set', function() {
    set.add('Susan Sarandon');
    set.add('Danny Glover');
    expect(set.contains('Danny Glover')).to.equal(true);
    expect(set.contains('Susan Sarandon')).to.equal(true);
  });

  it('should remove values from a set', function() {
    set.add('Mel Gibson');
    set.add({'a':1});
    set.add(5);
    set.remove('Mel Gibson');
    set.remove({'a':1});
    set.remove(5);
    expect(set.contains('Mel Gibson')).to.equal(false);
    expect(set.contains(JSON.stringify({'a':1}))).to.equal(false);
    expect(set.contains(5)).to.equal(false);
  });

  it('should add numbers and objects to a set', function() {
    set.add({'a':1});
    set.add(5);
    expect(set.contains(JSON.stringify({'a':1}))).to.equal(true);
    expect(set.contains(5)).to.equal(true);
  });

});
