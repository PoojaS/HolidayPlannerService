
var functions = function (gatewayService) {

    function fetch(from, to, location) {
        console.log("Fetching hotels");
        return ["Ibis", "Novetel"];
    };

    return {
        fetch: fetch
    }

};

module.exports = functions;