(function($) {
  'use strict';
  $(function() {
    if ($("#order-chart").length) {
      var areaData = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
              {
                  label: "Offering",
                  data: [200, 480, 700, 600, 620, 350, 380, 350, 850, 600, 650, 350],
                  borderColor: '#4B49AC',
                  borderWidth: 2,
                  fill: false
              },
              {
                  label: "Expenses",
                  data: [400, 450, 410, 500, 480, 600, 450, 550, 460, 560, 450, 700],
                  borderColor: '#FF4747',
                  borderWidth: 2,
                  fill: false
              }
          ]
      };
  
      var areaOptions = {
          responsive: true,
          maintainAspectRatio: true,
          plugins: {
              filler: { propagate: false }
          },
          scales: {
              x: {
                  display: true,
                  ticks: { color: "#6C7383" },
                  grid: { display: false }
              },
              y: {
                  display: true,
                  beginAtZero: true,
                  min: 200,
                  max: 1000,
                  ticks: { stepSize: 200, color: "#6C7383" },
                  grid: { color: "#f2f2f2" }
              }
          },
          plugins: {
              legend: {
                  display: false // Hide default legend
              }
          }
      };
  
      var revenueChartCanvas = $("#order-chart").get(0).getContext("2d");
      new Chart(revenueChartCanvas, {
          type: 'line',
          data: areaData,
          options: areaOptions
      });
  }  
    
    if ($("#order-chart-dark").length) {
      var areaData = {
        labels: ["10","","","20","","","30","","","40","","", "50","","", "60","","","70"],
        datasets: [
          {
            data: [200, 480, 700, 600, 620, 350, 380, 350, 850, "600", "650", "350", "590", "350", "620", "500", "990", "780", "650"],
            borderColor: [
              '#4747A1'
            ],
            borderWidth: 2,
            fill: false,
            label: "Orders"
          },
          {
            data: [400, 450, 410, 500, 480, 600, 450, 550, 460, "560", "450", "700", "450", "640", "550", "650", "400", "850", "800"],
            borderColor: [
              '#F09397'
            ],
            borderWidth: 2,
            fill: false,
            label: "Downloads"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        plugins: {
          filler: {
            propagate: false
          }
        },
        scales: {
          xAxes: [{
            display: true,
            ticks: {
              display: true,
              padding: 10,
              fontColor:"#fff"
            },
            gridLines: {
              display: false,
              drawBorder: false,
              color: 'transparent',
              zeroLineColor: '#575757'
            }
          }],
          yAxes: [{
            display: true,
            ticks: {
              display: true,
              autoSkip: false,
              maxRotation: 0,
              stepSize: 200,
              min: 200,
              max: 1200,
              padding: 18,
              fontColor:"#fff"
            },
            gridLines: {
              display: true,
              color:"#575757",
              drawBorder: false
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        elements: {
          line: {
            tension: .35
          },
          point: {
            radius: 0
          }
        }
      }
      var revenueChartCanvas = $("#order-chart-dark").get(0).getContext("2d");
      var revenueChart = new Chart(revenueChartCanvas, {
        type: 'line',
        data: areaData,
        options: areaOptions
      });
    }
    if ($("#sales-chart").length) {
      var SalesChartCanvas = $("#sales-chart").get(0).getContext("2d");
      var SalesChart = new Chart(SalesChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
          datasets: [{
              label: 'Present',
              data: [480, 230, 470, 210, 330],
              backgroundColor: '#98BDFF'
            },
            {
              label: 'Absent',
              data: [400, 340, 50, 480, 170],
              backgroundColor: '#4B49AC'
            }
          ]
        },
        options: {
          cornerRadius: 5,
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                display: true,
                drawBorder: false,
                color: "#F2F2F2"
              },
              ticks: {
                display: true,
                min: 0,
                max: 1000,
                autoSkip: true,
                maxTicksLimit: 10,
                fontColor:"#6C7383"
              }
            }],
            xAxes: [{
              stacked: false,
              ticks: {
                beginAtZero: true,
                fontColor: "#6C7383"
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: 1
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        },
      });
      document.getElementById('sales-legend').innerHTML = SalesChart.generateLegend();
    }

    if ($("#accounting-chart").length) {
      var AccountingChartCanvas = $("#accounting-chart").get(0).getContext("2d");
      var AccountingChart = new Chart(AccountingChartCanvas, {
          type: 'bar',
          data: {
              labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"], // Adjusted to 5 weeks
              datasets: [{
                  label: 'Tithes & Offerings',
                  data: [31200, 45000, 51000, 62000, 34000], // Adjusted data for 5 weeks
                  backgroundColor: '#98BDFF' // Color for income
              },
              {
                  label: 'Expenses',
                  data: [8060, 12000, 9500, 8000, 11000], // Adjusted data for 5 weeks
                  backgroundColor: '#4B49AC' // Color for expenses
              }]
          },
          options: {
              cornerRadius: 5,
              responsive: true,
              maintainAspectRatio: true,
              layout: {
                  padding: {
                      left: 0,
                      right: 0,
                      top: 20,
                      bottom: 0
                  }
              },
              scales: {
                  yAxes: [{
                      display: true,
                      gridLines: {
                          display: true,
                          drawBorder: false,
                          color: "#F2F2F2"
                      },
                      ticks: {
                          display: true,
                          min: 0,
                          max: 70000, // Adjust this max value based on your data
                          autoSkip: true,
                          maxTicksLimit: 10,
                          fontColor:"#6C7383"
                      }
                  }],
                  xAxes: [{
                      stacked: false,
                      ticks: {
                          beginAtZero: true,
                          fontColor: "#6C7383"
                      },
                      gridLines: {
                          color: "rgba(0, 0, 0, 0)",
                          display: false
                      },
                      barPercentage: 1
                  }]
              },
              legend: {
                  display: true
              },
              elements: {
                  point: {
                      radius: 0
                  }
              }
          },
      });
    }      

    if ($("#sales-chart-dark").length) {
      var SalesChartCanvas = $("#sales-chart-dark").get(0).getContext("2d");
      var SalesChart = new Chart(SalesChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5"],
          datasets: [{
              label: 'Present',
              data: [480, 230, 470, 210, 330],
              backgroundColor: '#98BDFF'
            },
            {
              label: 'Absent',
              data: [400, 340, 550, 480, 170],
              backgroundColor: '#4B49AC'
            }
          ]
        },
        options: {
          cornerRadius: 5,
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                display: true,
                drawBorder: false,
                color: "#575757"
              },
              ticks: {
                display: true,
                min: 0,
                max: 500,

                autoSkip: true,
                maxTicksLimit: 10,
                fontColor:"#F0F0F0"
              }
            }],
            xAxes: [{
              stacked: false,
              ticks: {
                beginAtZero: true,
                fontColor: "#F0F0F0"
              },
              gridLines: {
                color: "#575757",
                display: false
              },
              barPercentage: 1
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        },
      });
      document.getElementById('sales-legend').innerHTML = SalesChart.generateLegend();
    }

    if ($("#month-present-chart").length) {
      var SalesChartCanvas = $("#month-present-chart").get(0).getContext("2d");
      var SalesChart = new Chart(SalesChartCanvas, {
        type: 'bar',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: 'Present',
              data: [480, 230, 470, 210, 330, 390, 520, 410, 310, 450, 380, 600], 
              backgroundColor: '#98BDFF'
            },
            {
              label: 'Absent',
              data: [150, 120, 200, 80, 170, 140, 190, 130, 100, 180, 160, 220], 
              backgroundColor: '#4B49AC'
            }
          ]
        },
        options: {
          cornerRadius: 5,
          responsive: true,
          maintainAspectRatio: true,
          layout: {
            padding: {
              left: 0,
              right: 0,
              top: 20,
              bottom: 0
            }
          },
          scales: {
            yAxes: [{
              display: true,
              gridLines: {
                display: true,
                drawBorder: false,
                color: "#F2F2F2"
              },
              ticks: {
                display: true,
                min: 0,
                max: 1000,
                autoSkip: true,
                maxTicksLimit: 10,
                fontColor:"#6C7383"
              }
            }],
            xAxes: [{
              stacked: false,
              ticks: {
                beginAtZero: true,
                fontColor: "#6C7383"
              },
              gridLines: {
                color: "rgba(0, 0, 0, 0)",
                display: false
              },
              barPercentage: 1
            }]
          },
          legend: {
            display: false
          },
          elements: {
            point: {
              radius: 0
            }
          }
        },
      });
      document.getElementById('present-legend').innerHTML = SalesChart.generateLegend();
    }    
    
    if ($("#north-america-chart").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [{
            data: [100, 50, 50],
            backgroundColor: [
               "#4B49AC","#FFC100", "#248AFD",
            ],
            borderColor: "rgba(0,0,0,0)"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 78,
        elements: {
          arc: {
              borderWidth: 4
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        legendCallback: function(chart) { 
          var text = [];
          text.push('<div class="report-chart">');
            text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[0] + '"></div><p class="mb-0">Offline sales</p></div>');
            text.push('<p class="mb-0">88333</p>');
            text.push('</div>');
            text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[1] + '"></div><p class="mb-0">Online sales</p></div>');
            text.push('<p class="mb-0">66093</p>');
            text.push('</div>');
            text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[2] + '"></div><p class="mb-0">Returns</p></div>');
            text.push('<p class="mb-0">39836</p>');
            text.push('</div>');
          text.push('</div>');
          return text.join("");
        },
      }
      var northAmericaChartPlugins = {
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
      
          ctx.restore();
          var fontSize = 3.125;
          ctx.font = "500 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#13381B";
      
          var text = "90",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
      
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      var northAmericaChartCanvas = $("#north-america-chart").get(0).getContext("2d");
      var northAmericaChart = new Chart(northAmericaChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: northAmericaChartPlugins
      });
      document.getElementById('north-america-legend').innerHTML = northAmericaChart.generateLegend();
    }
    if ($("#north-america-chart-dark").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [{
            data: [100, 50, 50],
            backgroundColor: [
               "#4B49AC","#FFC100", "#248AFD",
            ],
            borderColor: "rgba(0,0,0,0)"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 78,
        elements: {
          arc: {
              borderWidth: 4
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        legendCallback: function(chart) { 
          var text = [];
          text.push('<div class="report-chart">');
            text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[0] + '"></div><p class="mb-0">Offline sales</p></div>');
            text.push('<p class="mb-0">88333</p>');
            text.push('</div>');
            text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[1] + '"></div><p class="mb-0">Online sales</p></div>');
            text.push('<p class="mb-0">66093</p>');
            text.push('</div>');
            text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[2] + '"></div><p class="mb-0">Returns</p></div>');
            text.push('<p class="mb-0">39836</p>');
            text.push('</div>');
          text.push('</div>');
          return text.join("");
        },
      }
      var northAmericaChartPlugins = {
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
      
          ctx.restore();
          var fontSize = 3.125;
          ctx.font = "500 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#fff";
      
          var text = "90",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
      
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      var northAmericaChartCanvas = $("#north-america-chart-dark").get(0).getContext("2d");
      var northAmericaChart = new Chart(northAmericaChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: northAmericaChartPlugins
      });
      document.getElementById('north-america-legend').innerHTML = northAmericaChart.generateLegend();
    }

    if ($("#south-america-chart").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [{
            data: [60, 70, 70],
            backgroundColor: [
              "#4B49AC","#FFC100", "#248AFD",
            ],
            borderColor: "rgba(0,0,0,0)"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 78,
        elements: {
          arc: {
              borderWidth: 4
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        legendCallback: function(chart) { 
          var text = [];
          text.push('<div class="report-chart">');
            text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[0] + '"></div><p class="mb-0">Offline sales</p></div>');
            text.push('<p class="mb-0">495343</p>');
            text.push('</div>');
            text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[1] + '"></div><p class="mb-0">Online sales</p></div>');
            text.push('<p class="mb-0">630983</p>');
            text.push('</div>');
            text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[2] + '"></div><p class="mb-0">Returns</p></div>');
            text.push('<p class="mb-0">290831</p>');
            text.push('</div>');
          text.push('</div>');
          return text.join("");
        },
      }
      var southAmericaChartPlugins = {
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
      
          ctx.restore();
          var fontSize = 3.125;
          ctx.font = "600 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#000";
      
          var text = "76",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
      
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      var southAmericaChartCanvas = $("#south-america-chart").get(0).getContext("2d");
      var southAmericaChart = new Chart(southAmericaChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: southAmericaChartPlugins
      });
      document.getElementById('south-america-legend').innerHTML = southAmericaChart.generateLegend();
    }
    if ($("#south-america-chart-dark").length) {
      var areaData = {
        labels: ["Jan", "Feb", "Mar"],
        datasets: [{
            data: [60, 70, 70],
            backgroundColor: [
              "#4B49AC","#FFC100", "#248AFD",
            ],
            borderColor: "rgba(0,0,0,0)"
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 78,
        elements: {
          arc: {
              borderWidth: 4
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        },
        legendCallback: function(chart) { 
          var text = [];
          text.push('<div class="report-chart">');
            text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[0] + '"></div><p class="mb-0">Offline sales</p></div>');
            text.push('<p class="mb-0">495343</p>');
            text.push('</div>');
            text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[1] + '"></div><p class="mb-0">Online sales</p></div>');
            text.push('<p class="mb-0">630983</p>');
            text.push('</div>');
            text.push('<div class="d-flex justify-content-between mx-4 mx-xl-5 mt-3"><div class="d-flex align-items-center"><div class="mr-3" style="width:20px; height:20px; border-radius: 50%; background-color: ' + chart.data.datasets[0].backgroundColor[2] + '"></div><p class="mb-0">Returns</p></div>');
            text.push('<p class="mb-0">290831</p>');
            text.push('</div>');
          text.push('</div>');
          return text.join("");
        },
      }
      var southAmericaChartPlugins = {
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
      
          ctx.restore();
          var fontSize = 3.125;
          ctx.font = "600 " + fontSize + "em sans-serif";
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#fff";
      
          var text = "76",
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2;
      
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
      var southAmericaChartCanvas = $("#south-america-chart-dark").get(0).getContext("2d");
      var southAmericaChart = new Chart(southAmericaChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: southAmericaChartPlugins
      });
      document.getElementById('south-america-legend').innerHTML = southAmericaChart.generateLegend();
    }

    function format ( d ) {
      // `d` is the original data object for the row
      return '<table cellpadding="5" cellspacing="0" border="0" style="width:100%;">'+
          '<tr class="expanded-row">'+
              '<td colspan="8" class="row-bg"><div><div class="d-flex justify-content-between"><div class="cell-hilighted"><div class="d-flex mb-2"><div class="mr-2 min-width-cell"><p>Policy start date</p><h6>25/04/2020</h6></div><div class="min-width-cell"><p>Policy end date</p><h6>24/04/2021</h6></div></div><div class="d-flex"><div class="mr-2 min-width-cell"><p>Sum insured</p><h5>$26,000</h5></div><div class="min-width-cell"><p>Premium</p><h5>$1200</h5></div></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Quote no.</p><h6>Incs234</h6></div><div class="mr-2"><p>Vehicle Reg. No.</p><h6>KL-65-A-7004</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Policy number</p><h6>Incsq123456</h6></div><div class="mr-2"><p>Policy number</p><h6>Incsq123456</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-3 d-flex"><div class="highlighted-alpha"> A</div><div><p>Agent / Broker</p><h6>Abcd Enterprices</h6></div></div><div class="mr-2 d-flex"> <img src="../../images/faces/face5.jpg" alt="profile"/><div><p>Policy holder Name & ID Number</p><h6>Phillip Harris / 1234567</h6></div></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Branch</p><h6>Koramangala, Bangalore</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Channel</p><h6>Online</h6></div></div></div></div></td>'
          '</tr>'+
      '</table>';
  }
  var table = $('#example').DataTable( {
    "ajax": "js/data.txt",
    "columns": [
        { "data": "Quote" },
        { "data": "Product" },
        { "data": "Business" },
        { "data": "Policy" }, 
        { "data": "Premium" }, 
        { "data": "Status" }, 
        { "data": "Updated" }, 
        {
          "className":      'details-control',
          "orderable":      false,
          "data":           null,
          "defaultContent": ''
        }
    ],
    "order": [[1, 'asc']],
    "paging":   false,
    "ordering": true,
    "info":     false,
    "filter": false,
    columnDefs: [{
      orderable: false,
      className: 'select-checkbox',
      targets: 0
    }],
    select: {
      style: 'os',
      selector: 'td:first-child'
    }
  } );
$('#example tbody').on('click', 'td.details-control', function () {
  var tr = $(this).closest('tr');
  var row = table.row( tr );

  if ( row.child.isShown() ) {
      // This row is already open - close it
      row.child.hide();
      tr.removeClass('shown');
  }
  else {
      // Open this row
      row.child( format(row.data()) ).show();
      tr.addClass('shown');
  }
} );
  
  });
})(jQuery);


document.getElementById('saveEvent').addEventListener('click', function () {
  // Get values from form
  const eventTitle = document.getElementById('eventTitle').value;
  const eventChapter = document.getElementById('eventChapter').value;
  const eventDescription = document.getElementById('eventDescription').value;
  const eventDateTime = document.getElementById('eventDateTime').value;
  const eventFee = document.getElementById('eventFee').value || "0";

  // Add event to the table
  const tableBody = document.getElementById('eventsTable').querySelector('tbody');
  const newRow = document.createElement('tr');

  newRow.innerHTML = `
      <td>${eventChapter}</td>
      <td>${eventTitle}</td>
      <td>${new Date(eventDateTime).toLocaleString()}</td>
      <td>
          <button class="btn btn-info btn-sm view-btn" data-toggle="modal" data-target="#viewEventModal">View</button>
          <button class="btn btn-warning btn-sm edit-btn" data-toggle="modal" data-target="#editEventModal">Edit</button>
          <button class="btn btn-danger btn-sm archive-btn">Archive</button>
      </td>
  `;

  // Append new row to table
  tableBody.appendChild(newRow);

  // Attach event listeners
  attachEventListeners(newRow);

  // Close modal
  $('#addEventModal').modal('hide');

  // Clear form
  document.getElementById('eventForm').reset();
});

// Function to attach event listeners for View, Edit, and Archive buttons
function attachEventListeners(row) {
  const viewBtn = row.querySelector(".view-btn");
  const editBtn = row.querySelector(".edit-btn");
  const archiveBtn = row.querySelector(".archive-btn");

  // View button functionality
  viewBtn.addEventListener("click", function () {
    document.getElementById('viewEventTitle').textContent = row.cells[1].textContent;
    document.getElementById('viewEventChapter').textContent = row.cells[0].textContent;
    document.getElementById('viewEventDescription').textContent = "Event description here..."; // Update dynamically if needed
    document.getElementById('viewEventDateTime').textContent = row.cells[2].textContent;
    document.getElementById('viewEventFee').textContent = "₱0"; // Update dynamically if needed
  });

  // Edit button functionality
  editBtn.addEventListener("click", function () {
    document.getElementById('editEventTitle').value = row.cells[1].textContent;
    document.getElementById('editEventChapter').value = row.cells[0].textContent;
    document.getElementById('editEventDescription').value = "Event description here..."; // Update dynamically if needed
    document.getElementById('editEventDateTime').value = new Date(row.cells[2].textContent).toISOString().slice(0, 16);
    document.getElementById('editEventFee').value = "0"; // Update dynamically if needed

    // Save changes
    document.getElementById('updateEvent').onclick = function () {
      row.cells[0].textContent = document.getElementById('editEventChapter').value;
      row.cells[1].textContent = document.getElementById('editEventTitle').value;
      row.cells[2].textContent = new Date(document.getElementById('editEventDateTime').value).toLocaleString();

      // Close modal
      $('#editEventModal').modal('hide');
    };
  });

  // Archive button functionality
  archiveBtn.addEventListener("click", function () {
    row.remove();
  });
}

// Attach event listeners to existing table rows
document.querySelectorAll("#eventsTable tbody tr").forEach(row => {
  attachEventListeners(row);
});

// Add event listeners for View and Edit buttons
document.addEventListener('click', function (event) {
  if (event.target.classList.contains('view-btn')) {
      const row = event.target.closest('tr');
      document.getElementById('viewEventTitle').textContent = row.cells[1].textContent;
      document.getElementById('viewEventChapter').textContent = row.cells[0].textContent;
      document.getElementById('viewEventDateTime').textContent = row.cells[2].textContent;
      $('#viewEventModal').modal('show');
  }

  if (event.target.classList.contains('edit-btn')) {
      const row = event.target.closest('tr');
      document.getElementById('eventTitle').value = row.cells[1].textContent;
      document.getElementById('eventChapter').value = row.cells[0].textContent;
      document.getElementById('eventDateTime').value = new Date(row.cells[2].textContent).toISOString().slice(0, 16);
      $('#addEventModal').modal('show');
  }
});

function openViewModal(button) {
  let row = button.closest("tr");
  
  document.getElementById("viewChapter").innerText = row.dataset.chapter;
  document.getElementById("viewEventName").innerText = row.dataset.name;
  document.getElementById("viewEventDescription").innerText = row.dataset.description;
  document.getElementById("viewEventDateTime").innerText = row.dataset.datetime;
  document.getElementById("viewEventFee").innerText = row.dataset.fee ? "₱" + row.dataset.fee : "Free";

  let poster = document.getElementById("viewEventPoster");
  poster.src = row.dataset.poster || "../images/poster.png";
}

function openEditModal(button) {
  let row = button.closest("tr");

  document.getElementById("editChapter").value = row.dataset.chapter;
  document.getElementById("editEventName").value = row.dataset.name;
  document.getElementById("editEventDescription").value = row.dataset.description;
  document.getElementById("editEventDateTime").value = formatDateTime(row.dataset.datetime);
  document.getElementById("editEventFee").value = row.dataset.fee;

  let poster = document.getElementById("editEventPoster");
  poster.src = row.dataset.poster || "default-placeholder.jpg";
}

function formatDateTime(dateTimeString) {
  let date = new Date(dateTimeString);
  return date.toISOString().slice(0, 16);
}

function archiveEvent(button) {
  let row = button.closest("tr");
  row.remove(); // Removes the event row from the table
}

function searchEvents() {
  let input = document.getElementById("searchEvent").value.toLowerCase();
  let rows = document.querySelectorAll("#eventsTable tbody tr");

  rows.forEach(row => {
    let text = row.innerText.toLowerCase();
    row.style.display = text.includes(input) ? "" : "none";
  });
}

function showSetting(setting, element) {
  let content = {
      adminInfo: `
        <h5 class="card-title"><i class="ti-user"></i> Admin Information</h5>
        <p class="card-text">Manage admin details, email, and contact information.</p>
        
        <form id="adminInfoForm">
            <div class="mb-3">
                <label for="adminName" class="form-label"><i class="ti-user"></i> Full Name</label>
                <input type="text" class="form-control" id="adminName" placeholder="Enter full name" value="John Doe">
            </div>

            <div class="mb-3">
                <label for="adminEmail" class="form-label"><i class="ti-email"></i> Email Address</label>
                <input type="email" class="form-control" id="adminEmail" placeholder="Enter email" value="admin@example.com">
            </div>

            <div class="mb-3">
                <label for="adminPhone" class="form-label"><i class="ti-mobile"></i> Phone Number</label>
                <input type="text" class="form-control" id="adminPhone" placeholder="Enter phone number" value="+1234567890">
            </div>

            <div class="mb-3">
                <label for="adminRole" class="form-label"><i class="ti-id-badge"></i> Role</label>
                <select class="form-control" id="adminRole">
                    <option selected>Administrator</option>
                    <option>Super Admin</option>
                    <option>Editor</option>
                </select>
            </div>

            <button type="button" class="btn btn-primary" onclick="saveAdminInfo()">
                <i class="ti-save"></i> Save Changes
            </button>
        </form>
      `,

      privacySecurity: `<h5 class="card-title"><i class="ti-lock"></i> Privacy & Security</h5>
                        <p class="card-text">Control who can access your settings and secure your account.</p>`,

      backupRestore: `<h5 class="card-title"><i class="ti-cloud-up"></i> Backup & Restore</h5>
                      <p class="card-text">Backup important data and restore previous settings if needed.</p>`,

      activityLogs: `<h5 class="card-title"><i class="ti-time"></i> Activity Logs</h5>
                     <p class="card-text">View recent actions performed by users in the system.</p>`
  };

  // Add fade-out effect before changing content
  let contentDiv = document.getElementById("settingsContent");
  contentDiv.classList.remove("show");

  setTimeout(() => {
      contentDiv.innerHTML = content[setting];
      contentDiv.classList.add("show");
  }, 300);

  // Remove 'active' from all buttons
  document.querySelectorAll(".list-group-item").forEach(btn => btn.classList.remove("active"));
  element.classList.add("active");
}

function saveAdminInfo() {
  let name = document.getElementById("adminName").value;
  let email = document.getElementById("adminEmail").value;
  let phone = document.getElementById("adminPhone").value;
  let role = document.getElementById("adminRole").value;

  // Use AlertifyJS to display the success message with customized styling
  alertify.success(`
    <strong>Admin Info Updated!</strong>
  `);
}

document.addEventListener("DOMContentLoaded", function () {
  // Sample real data
  const attendanceData = [
      { name: "Juan Dela Cruz", chapter: "North Chapter", time: "March 27, 2025 - 10:00 AM" },
      { name: "Maria Santos", chapter: "South Chapter", time: "March 27, 2025 - 10:05 AM" },
      { name: "Pedro Ramirez", chapter: "East Chapter", time: "March 27, 2025 - 10:15 AM" },
      { name: "Ana Mendoza", chapter: "West Chapter", time: "March 27, 2025 - 10:30 AM" },
  ];

  // Populate the attendance table with real data
  const attendanceBody = document.getElementById("attendance-body");
  attendanceData.forEach((data) => {
      const row = document.createElement("tr");
      row.dataset.name = data.name;
      row.innerHTML = `
          <td>${data.name}</td>
          <td class="font-weight-bold">${data.chapter}</td>
          <td>${data.time}</td>
          <td><button class="btn btn-success mark-present">Mark as Present</button></td>
      `;
      attendanceBody.appendChild(row);
  });

  // Event listener for "Mark as Present" button
  document.querySelectorAll(".mark-present").forEach(button => {
      button.addEventListener("click", function () {
          const row = this.closest("tr"); // Find the closest row to the button
          const name = row.cells[0].innerText;  // Get the Name from the row
          const chapter = row.cells[1].innerText;  // Get the Chapter
          const time = row.cells[2].innerText;  // Get the Time

          // Remove row from the attendance table
          row.remove();

          // Append the row to the Present Members Table
          const newRow = `<tr>
              <td>${name}</td>
              <td>${chapter}</td>
              <td>${time}</td>
          </tr>`;
          document.getElementById("present-body").insertAdjacentHTML("beforeend", newRow);
      });
  });
});

function showChapter(chapter, element) {
  const content = {
    "Poblacion Plaridel": `<h5 class="card-title"><i class="ti-clipboard"></i> Poblacion Plaridel</h5>` + generateTable('Poblacion Plaridel'),
    "Sipat Plaridel": `<h5 class="card-title"><i class="ti-clipboard"></i> Sipat Plaridel</h5>` + generateTable('Sipat Plaridel'),
    "Banga 1st": `<h5 class="card-title"><i class="ti-clipboard"></i> Banga 1st</h5>` + generateTable('Banga 1st'),
    "San Antonio NE": `<h5 class="card-title"><i class="ti-clipboard"></i> San Antonio NE</h5>` + generateTable('San Antonio NE'),
    "San Leonardo NE": `<h5 class="card-title"><i class="ti-clipboard"></i> San Leonardo NE</h5>` + generateTable('San Leonardo NE'),
    "R10 Tondo": `<h5 class="card-title"><i class="ti-clipboard"></i> R10 Tondo</h5>` + generateTable('R10 Tondo'),
    "Cavite": `<h5 class="card-title"><i class="ti-clipboard"></i> Cavite</h5>` + generateTable('Cavite'),
    "Galas Balagtas": `<h5 class="card-title"><i class="ti-clipboard"></i> Galas Balagtas</h5>` + generateTable('Galas Balagtas'),
    "San Jose Plaridel": `<h5 class="card-title"><i class="ti-clipboard"></i> San Jose Plaridel</h5>` + generateTable('San Jose Plaridel'),
  };

  let contentDiv = document.getElementById("chapterContent");
  contentDiv.classList.remove("show");
  setTimeout(() => {
    contentDiv.innerHTML = content[chapter];
    contentDiv.classList.add("show");
  }, 300);

  document.querySelectorAll(".list-group-item").forEach(btn => btn.classList.remove("active"));
  element.classList.add("active");
}

function generateTable(chapter) {
  let tableRows = '';

  if (chapter === 'Poblacion Plaridel') {
    tableRows = `
      <tr>
        <td>₱1,000</td>
        <td>Registration Fee</td>
        <td>Pending</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>₱500</td>
        <td>Tithes</td>
        <td>Collected</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option selected>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
    `;
  } else if (chapter === 'Sipat Plaridel') {
    tableRows = `
      <tr>
        <td>₱300</td>
        <td>Offering</td>
        <td>Pending</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>₱150</td>
        <td>Offering</td>
        <td>Collected</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option selected>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
    `;
  } else if (chapter === 'Banga 1st') {
    tableRows = `
      <tr>
        <td>₱2,000</td>
        <td>Registration Fee</td>
        <td>Pending</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>₱1,200</td>
        <td>Tithes</td>
        <td>Collected</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option selected>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
    `;
  } else if (chapter === 'San Antonio NE') {
    tableRows = `
      <tr>
        <td>₱500</td>
        <td>Offering</td>
        <td>Pending</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>₱300</td>
        <td>Offering</td>
        <td>Collected</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option selected>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
    `;
  } else if (chapter === 'San Leonardo NE') {
    tableRows = `
      <tr>
        <td>₱400</td>
        <td>Offering</td>
        <td>Pending</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>₱250</td>
        <td>Offering</td>
        <td>Collected</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option selected>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
    `;
  } else if (chapter === 'R10 Tondo') {
    tableRows = `
      <tr>
        <td>₱800</td>
        <td>Registration Fee</td>
        <td>Pending</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>₱400</td>
        <td>Tithes</td>
        <td>Collected</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option selected>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
    `;
  } else if (chapter === 'Cavite') {
    tableRows = `
      <tr>
        <td>₱1,500</td>
        <td>Offering</td>
        <td>Pending</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>₱750</td>
        <td>Tithes</td>
        <td>Collected</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option selected>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
    `;
  } else if (chapter === 'Galas Balagtas') {
    tableRows = `
      <tr>
        <td>₱2,500</td>
        <td>Registration Fee</td>
        <td>Pending</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>₱1,500</td>
        <td>Tithes</td>
        <td>Collected</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option selected>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
    `;
  } else if (chapter === 'San Jose Plaridel') {
    tableRows = `
      <tr>
        <td>₱600</td>
        <td>Offering</td>
        <td>Pending</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
      <tr>
        <td>₱350</td>
        <td>Offering</td>
        <td>Collected</td>
        <td>
          <select class="form-select" onchange="updateStatus(this)">
            <option>Pending</option>
            <option selected>Collected</option>
            <option>Bank Deposit</option>
          </select>
        </td>
      </tr>
    `;
  }

  return `
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th>Amount</th>
          <th>Description</th>
          <th>Status</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        ${tableRows}
      </tbody>
    </table>
  `;
}

function updateStatus(selectElement) {
  let newStatus = selectElement.value;
  let statusCell = selectElement.parentElement.previousElementSibling;
  statusCell.textContent = newStatus;
  alertify.success(`Status updated to: ${newStatus}`);
}

// 

