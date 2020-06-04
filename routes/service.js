  //LABORATORIO_3
var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
  var datos = req.query;
  console.log(datos);
  res.status(200).json({
  msn: "Hola mundo"
  }); });
//Paso 3.
//Creación de servicios
//En esta práctica realizaremos los siguientes servicios
router.post('/test', function(req, res, next) {
var data= req.body;
console.log(req.body);
res.status(200).json(data);
});
/*Desafíos
1.
Cambio de divisa
    a. Servicio que recibirá 3 parámetros, la moneda original, la cantidad , y la
    moneda del tipo de cambio tipo cadena. (Todas las monedas estarán en
    relación al dollar).
    b. Responderá con número flotante , dando la cantidad exacta del tipo de
    divisa. */
router.post('/divisas', function(req, res, next) {
  var monedas=['CAD',1.3256384622,
              'HKD', 7.8401345088,
              'ISK',124.6932654731,
              'PHP',52.1294192493,
              'DKK',6.7855130419,
              'HUF',304.6169226575,
              'CZK',23.5135872035,
              'GBP',0.8011724075,
              'RON',4.3155503045,
              'SEK',9.7030809779,
              'IDR',14112.4965918386,
              'INR',70.9474688721,
              'BRL',4.1587748796,
              'RUB',63.6425520313,
              'HRK',6.7290738889,
              'JPY',107.6524584204,
              'THB',30.5643915296,
              'CHF',0.988639462,
              'EUR',0.9088430428,
              'MYR', 4.1814959556,
              'BGN',1.7775152231,
              'TRY',5.6850858857,
              'CNY',7.1070617104,
              'NOK', 9.0179950922,
              'NZD',1.583931655,
              'ZAR',14.868581296,
              'USD',1,
              'MXN', 19.4398800327,
              'SGD',1.3764427883,
              'AUD',1.471326002,
              'ILS',3.5040443515,
              'KRW',1193.9107516132,
              'PLN',3.9819140234,
              'BO',6.96];
      var datos= req.body;
      var monO= monedas.indexOf(datos.MonedaOriginal)+1;
      var cant=datos.Cantidad;
      var monC= monedas.indexOf(datos.MonedadeCambio)+1;
      if (monO!=0 && monC!=0){
        var camb= (parseFloat(cant)/monedas[monO])*monedas[monC];
        datos['CantidadConvertida']=camb;
        res.status(200).json(datos);
      }else
        res.status(300).json({msn: "Verifique los tipos de moneda"});

});
  /*Calculo de interes compuesto
      a. Este servicio recibirá 3 parámetros, el monto que se solicita, y el tipo de
      interés anual, y el tiempo de pago.
      b. Responderá con la cantidad que el cliente debe pagar.*/
  router.post('/interes', function(req, res, next) {
    var datos= req.body;
    var ci=parseFloat(datos.MontoSolicitado);
    var i=parseFloat(datos.InteresAnual);
    var n=parseFloat(datos.TipodePago);
    var Cf=ci*Math.pow((1+i),n);
    datos['CapitaFinal']=Cf.toFixed(2);
    res.status(200).json(datos);
    
  });
module.exports = router;
