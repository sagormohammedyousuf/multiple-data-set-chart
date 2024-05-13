const years = ['2005', '2006', '2007', '2008', '2009', '2010'];
const examiness = [944015, 995123, 1024537, 743609, 1063484, 1206019];
const gpa = [17276, 30472, 32646, 52500, 45934, 62134];
const passPercentage = [511298, 616226, 598311, 700018, 678541, 808500];
const failPercentage = [458590, 374578, 411264, 313282, 323259, 204700];
const maleCount = [470007, 543764, 471007, 372805, 572267, 627672];
const femaleCount = [474076, 451359, 473008, 370804, 532267, 578347];

const ctx = document.getElementById("myChart").getContext("2d");

const data = {
    labels: years,
    datasets: [
        {
            label: "Examinees",
            data: examiness,
            backgroundColor: "#006769",
            borderColor: "4#0A578",
            borderWidth: 1,
        },
        {
            label: "GPA 5",
            data: gpa,
            backgroundColor: "#002379",
            borderColor: "#7469B6",
            borderWidth: 1,
        },
        {
            label: "Pass Percentage",
            data: passPercentage,
            backgroundColor: "#0A6847",
            borderColor: "#618264",
            borderWidth: 1,
        },
        {
            label: "Fail Percentage",
            data: failPercentage,
            backgroundColor: "red",
            borderColor: "#C06C6B",
            borderWidth: 1,
        },
        {
            label: "Male",
            data: maleCount,
            backgroundColor: "#03A3FF",
            borderColor: "#7A4E48",
            borderWidth: 1,
        },
        {
            label: "Female",
            data: femaleCount,
            backgroundColor: "#EC49A7",
            borderColor: "#7D7A68",
            borderWidth: 1,
        }
    ],
};

const config = {
    type: "bar",
    data: data,
    options: {
        scales: {
            y: {
                beginAtZero: true,
                ticks: {
                    stepSize: 50000,
                    callback: function(value, index, values) {
                        return value.toLocaleString(); // Format y-axis ticks with commas
                    }
                },
            },
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y.toLocaleString();
                        }
                        return label;
                    }
                }
            }
        }
    },
};

new Chart(ctx, config);