
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
export function drawChart(data:number[],colors:string[],labels:string[],chart_label:string,div_id:string){
    new Chart(div_id, {
        type: 'doughnut',
          data: {
          labels:labels,
          
            datasets: [{
              label:chart_label,
                data: data,
                backgroundColor: colors,
                rotation:-90,
              
            }]
        },
        options: {
         borderColor:'transparent'
        }
    });
}