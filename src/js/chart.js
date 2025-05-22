const chartData = {
    labels: ["Python", "Java", "Javascript", "C#", "Others"],
    data: [30, 20, 10, 7, 33],

};

const myChart = document.querySelector(".my-chart");

new Chart(myChart, {
    type: "doughnut",
    data: {
        labels: chartData.labels,
        datasets: [
            {
                label: " Language Popularity",
                data: chartData.data,
                backgroundColor: [
                    "#b78d65", // warna dasar
                    "#a97f59", // sedikit lebih gelap
                    "#c89d75", // lebih terang
                    "#9c6e48", // lebih gelap lagi
                    "#d6b89a", // paling terang
                ],
            },
        ],
        hoverOffset: 20,
    },
    options: {
        borderWidth: 5,
        hoverBorderWidth: 0,
        responsive: true,
        plugins: {
            tooltip: {
                backgroundColor: "#333",  // warna latar tooltip
                titleFont: {
                  size: 16,               // ukuran font judul (label)
                  weight: "bold"
                },
                bodyFont: {
                  size: 14                // ukuran font isi
                },
                padding: 12,              // padding di dalam tooltip
                caretSize: 8,             // ukuran segitiga kecil tooltip
                cornerRadius: 6,          // radius sudut tooltip
              },
            legend: {
                display: false,
            },
        },
    },

});