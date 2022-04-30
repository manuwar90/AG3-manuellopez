import './style.css';

//Gráfico de columnas. Mi 1º gráfico
var data = [
  { year: 1991, name: 'alpha', value: 15 },
  { year: 1992, name: 'alpha', value: 20 },
];

var visualization = d3plus
  .viz()
  .container('#viz1')
  .data(data)
  .type('bar')
  .id('name')
  .x('year')
  .y('value')
  .draw();
