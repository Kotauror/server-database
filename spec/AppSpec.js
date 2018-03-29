require('jasmine-ajax')

describe('createServer', function () {
  // Put our http response in a variable.
  var success = {
      status: 200,
      responseText: "Hello World",
  }

  //Declare the variable within the suite's scope
  var request;

  beforeEach(function (done) {

    // Start listening to xhr requests
    jasmine.Ajax.install();

    //Call whatever will make the actual request
    createServer();

    //Answer the request.
    request = jasmine.Ajax.requests.mostRecent();
    request.respondWith(success);
    done();
  });

  it("sends the request to the right end point", function(done) {
    expect(request.url).toBe('http://localhost/4000');
    done();
  });

  it("uses the correct method", function(done) {
    expect(request.method).toBe('GET');
    done();
  });

})
