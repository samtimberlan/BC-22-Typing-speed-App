const test = require("../server/config/routes");
const request =require("request");
const base_url = "http://localhost:5000/";

describe("should return valid html ", function() {
    describe("GET /", function() {

        it("returns status code 200", function() {
            request.get(base_url, function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });

        });
        it("returns status code 200",function(){
            request.get(base_url+"typingspeed", function(error, response, body) {
                expect(response.statusCode).toBe(200);
                done();
            });
        })

    });

});

