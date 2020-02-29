module.exports = class parseOrd {
  constructor(objExcel) {
    let _objExcel = objExcel;
    console.log(this.parseOrder(_objExcel));
  }

   parseOrder (orders) {
    let res = new Object();
    let lenSizeVal = 0;
    for (var key in orders[1]) res[key] = [];
    for (var key in orders) lenSizeVal++;

    for (var key in res) {
      for (var i = 0; i <= lenSizeVal; i++) {
        for (var keyj in orders[i]) {
          if (keyj == key) {
            res[key].push(orders[i][keyj]);
          }
        }
      }
    }
    return res;
  }
}