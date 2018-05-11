DH = { data: {} };

DH.loadData = function (data) {
  DH.data = Object.assign(DH.data, data);
};

DH.get = function (key, val) {
  return DH.data.hasOwnProperty(key) ? DH.data[key] : val;
};

$(function () {
  var dhData = $('#dhData');

  if (dhData.length)
    DH.loadData(JSON.parse(dhData.text()));
});
