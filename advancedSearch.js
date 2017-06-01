var expectFriendNames = function(expectedNames, key) {
  element.all(by.repeater(key + ' in friends').column(key + '.name')).then(function(arr) {
    arr.forEach(function(wd, i) {
      expect(wd.getText()).toMatch(expectedNames[i]);
    });
  });
};

it('should search across all fields when filtering with a string', function() {
  var searchText = element(by.model('searchText'));
  searchText.clear();
  searchText.sendKeys('a');
  expectFriendNames(['Arts','and','Analysis'], 'friend');

  searchText.clear();
  searchText.sendKeys('c');
  expectFriendNames(['Cyber','Computer','Cyber-Security'], 'friend');

  searchText.clear();
  searchText.sendKeys('d');
  expectFriendNames(['Development','Data'], 'friend');

  searchText.clear();
  searchText.sendKeys('e');
  expectFriendNames(['Earth','Experience'], 'friend');

  searchText.clear();
  searchText.sendKeys('i');
  expectFriendNames(['Infrastructure','Image'], 'friend');

  searchText.clear();
  searchText.sendKeys('l');
  expectFriendNames(['Lab','Learning'], 'friend');

  searchText.clear();
  searchText.sendKeys('m');
  expectFriendNames(['Music','Machine','Medical'], 'friend');

  searchText.clear();
  searchText.sendKeys('o');
  expectFriendNames(['Omics'], 'friend');

  searchText.clear();
  searchText.sendKeys('p');
  expectFriendNames(['Production'], 'friend');

  searchText.clear();
  searchText.sendKeys('r');
  expectFriendNames(['Research','Robotics'], 'friend');

  searchText.clear();
  searchText.sendKeys('s');
  expectFriendNames(['Sciences','SDE','Security'], 'friend');

  searchText.clear();
  searchText.sendKeys('u');
  expectFriendNames(['UVA'], 'friend');

  searchText.clear();
  searchText.sendKeys('v');
  expectFriendNames(['Virtual'], 'friend');

});

it('should search in specific fields when filtering with a predicate object', function() {
  var searchAny = element(by.model('search.$'));
  searchAny.clear();
  searchAny.sendKeys('i');
  expectFriendNames(['Mary', 'Mike', 'Julie', 'Juliette'], 'friendObj');
});
it('should use a equal comparison when comparator is true', function() {
  var searchName = element(by.model('search.name'));
  var strict = element(by.model('strict'));
  searchName.clear();
  searchName.sendKeys('Julie');
  strict.click();
  expectFriendNames(['Julie'], 'friendObj');
});