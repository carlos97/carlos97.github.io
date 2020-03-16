const app = new Vue({
  el: '#app',
  data: {
    numeroPuntos : 0,
    contador: 0,
    puntos: [],
    regresionLineal:[],
    x :0,
    y :0,
    lr:{},
    xArreglo:[],
    yArreglo:[]

  },
  methods :{

    sacarPuntos(){
      var temp = 0;
      var mayor = 0;
      for(i = 0; i < this.yArreglo.length; i++){
        if (this.yArreglo[i] > mayor){
          mayor = this.yArreglo[i];
        }
      }
      for (var i = 0; i < mayor; i++) {
        var temp = this.lr.slope*i+this.lr.intercept;
        this.regresionLineal.push({
          x:i, y:temp
        });
      }

      this.mostrarGrafica();
      this.regresionLineal = [];
    },
    hacerRegresionLineal(){
      var lr = {};
        var n = this.yArreglo.length;
        var sum_x = 0;
        var sum_y = 0;
        var sum_xy = 0;
        var sum_xx = 0;
        var sum_yy = 0;

        for (var i = 0; i < this.yArreglo.length; i++) {

            sum_x += this.xArreglo[i];
            sum_y += this.yArreglo[i];
            sum_xy += (this.xArreglo[i]*this.yArreglo[i]);
            sum_xx += (this.xArreglo[i]*this.xArreglo[i]);
            sum_yy += (this.yArreglo[i]*this.yArreglo[i]);
        }

        lr['slope'] = (n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x);
        lr['intercept'] = (sum_y - lr.slope * sum_x)/n;
        lr['r2'] = Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2);
        lr['slope1'] = ((n * sum_xy - sum_x * sum_y) / (n*sum_xx - sum_x * sum_x)).toFixed(2);
        lr['intercept1'] = ((sum_y - lr.slope * sum_x)/n).toFixed(2);
        lr['r21'] = (Math.pow((n*sum_xy - sum_x*sum_y)/Math.sqrt((n*sum_xx-sum_x*sum_x)*(n*sum_yy-sum_y*sum_y)),2)).toFixed(2);

        this.lr = lr;
        this.sacarPuntos();
    },
    agregarPunto(){
      this.puntos.push({
        x:this.x, y:this.y
      });
      this.xArreglo.push(this.x);
      this.yArreglo.push(this.y)
      this.x == 0;
      this.y == 0;
      this.mostrarGrafica();
    },
    mostrarGrafica(){
      var chart = new CanvasJS.Chart("chartContainer", {
      	animationEnabled: true,
      	zoomEnabled: false,
      	title:{
      		text: "Regresion lineal"
      	},
      	data: [{
      		type: "scatter",
      		dataPoints: this.puntos
      	},{
          type: "line",
          dataPoints : this.regresionLineal
        }]
      });
      chart.render();

    }

  },
  computed : {


  }
})
