import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);



var meses = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];

export default function GraphicIncomeMonth({ passiveIncomePerMonth }) {

     const passiveIncome = [];
        for (let i = 1; i <= 12; i++) {
        passiveIncome.push(passiveIncomePerMonth * i);
        }
       
var maxIncome = Math.max(...passiveIncome);

var misoptions = {
    responsive: true,
    animation: true,
    plugins: {
        legend: {
            display: false
        },
        tooltips: {
            callbacks: {
              label: function (context) {
                var value = context.parsed.y;
                return "$" + value.toFixed(2); // Mostrar el valor con 2 decimales
              }
            }
          }
    },
    scales: {
        y: {
            min: 0,
            max: maxIncome + 10000
        },
        x: {
            ticks: { color: '#16161a' }
        }
    }
};


    var midata = {
        labels: meses,
        datasets: [
            {
                label: 'Accumulated Passive Income Per Month',
                data: passiveIncome,
                backgroundColor: '#2ea828',
            }
        ]
    };

    return <Bar data={midata} options={misoptions} />;
}
