var req = {};

/*these request functions can be wrapped
  into 1, like send(), but not now 
*/

// prettier-ignore
req.changeMarker = function(data) {
  $.post(
    "/marker/type",
    JSON.stringify({
      icon: data.icon,
      color: data.color.toLowerCase()
    })
  ).done(function(res) {
    console.log(res);
    window._markerIcon = require("../img/ggmMarker/" + res);
  });
};

req.getDistance = function(data) {
  $.post(
    "/distance",
    JSON.stringify({
      from: data.from,
      to: data.to
    })
  ).done(function(res) {
    var response = JSON.parse(res);

    $(".distance").html(
      "The distance between those points are " +
        response.rows[0].elements[0].distance.text
    );
  });
};

req.addMarker = function(data) {
  return $.post("/marker/add", JSON.stringify(data));
};

req.saveMarkerContent = function(data) {
  return $.post("/marker/content/" + data.id, JSON.stringify(data));
};

module.exports = {
  req: req
};
