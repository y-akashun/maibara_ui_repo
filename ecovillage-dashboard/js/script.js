// チャートの共通設定
const chartColors = {
    facilityExternal: '#fdd059',  // 施設外で発電した再エネ
    facilityInternal: '#71a7d6',  // 施設内で発電した再エネ
    gridPurchased: '#97c9be',     // 電力市場から購入した再エネ
    gauge: {
        target:{
            main: '#8cbdfc',          // ゲージのメインカラー
            background: '#e6e6e6'     // ゲージの背景色
        },
        generation:{
            main: '#f2dd66',          // ゲージのメインカラー
            background: '#e6e6e6'     // ゲージの背景色
        }
    },
    generation:'#f2dd66'
};

// グラフの数値データ
const chartData = {
    home: {
        recyclerate: {
            series: [35, 40, 25],
            labels: ['施設外で発電した再エネ', '施設内で発電した再エネ', '電力市場から購入した再エネ']
        },
        co2mokuhyo: {
            value: 75,
            color: chartColors.gauge.target
        },
        monthlyrecyclerate: {
            series: [{
                name: '買電',
                type: 'bar',
                data: [320, 350, 280, 260, 240, 220, 200, null, null, null, null, null],
                color: chartColors.gridPurchased
            }, {
                name: 'オンサイト',
                type: 'bar',
                data: [180, 160, 220, 250, 280, 310, 340, null, null, null, null, null],
                color: chartColors.facilityInternal
            }, {
                name: 'オフサイト',
                type: 'bar',
                data: [120, 140, 160, 180, 200, 220, 240, null, null, null, null, null],
                color: chartColors.facilityExternal
            }, {
                name: '再エネ利用率',
                type: 'line',
                data: [48.4, 46.2, 57.6, 62.3, 66.7, 70.7, 74.4, null, null, null, null, null]
            }]
        }
    },
    user: {
        fac1: {
            recyclerate: {
                series: [45, 30, 25],
                labels: ['施設外で発電した再エネ', '施設内で発電した再エネ', '電力市場から購入した再エネ']
            },
            monthlyrecyclerate: {
                series: [{
                    name: '買電',
                    type: 'bar',
                    data: [320, 350, 280, 260, 240, 220, 200, null, null, null, null, null],
                    color: chartColors.gridPurchased
                }, {
                    name: 'オンサイト',
                    type: 'bar',
                    data: [180, 160, 220, 250, 280, 310, 340, null, null, null, null, null],
                    color: chartColors.facilityInternal
                }, {
                    name: 'オフサイト',
                    type: 'bar',
                    data: [120, 140, 160, 180, 200, 220, 240, null, null, null, null, null],
                    color: chartColors.facilityExternal
                }, {
                    name: '再エネ利用率',
                    type: 'line',
                    data: [48.4, 46.2, 57.6, 62.3, 66.7, 70.7, 74.4, null, null, null, null, null]
                }]
            },
            dailyrecyclerate: {
                series: [
                    {
                        name: '買電',
                        data: [2.0, 1.8, 1.5, 1.2, 1.5, 2.5, 4.5, 7.0, 9.5, 1.10, 12.0, 12.5, 13.0, 12.0, 11.0, 10.0, 9.0, 8.0, 7.0, 6.0, 4.5, 3.5, 2.5, 2.0],
                        color: chartColors.gridPurchased
                    },
                    {
                        name: 'オンサイト',
                        data: [1.5, 1.2, 10, 0.8, 1.2, 2.0, 3.5, 5.5, 7.5, 8.5, 9.0, 9.5, 10.0, 9.5, 8.5, 7.5, 7.0, 6.0, 5.0, 4.0, 3.5, 2.5, 2.0, 1.5],
                        color: chartColors.facilityInternal
                    },
                    {
                        name: 'オフサイト',
                        data: [1.0, .8, .5, .5, 0.8, 1.5, 2.5, 4.0, 5.5, 6.5, 7.0, 7.5, 8.0, 7.5, 6.5, 6.0, 5.5, 4.5, 4.0, 3.0, 2.5, 2.0, 1.5, 1.0],
                        color: chartColors.facilityExternal
                    }
                ]
            },
        },
        fac2: {
            recyclerate: {
                series: [45, 30, 25],
                labels: ['施設外で発電した再エネ', '施設内で発電した再エネ', '電力市場から購入した再エネ']
            },
            monthlyrecyclerate: {
                series: [{
                    name: '買電',
                    type: 'bar',
                    data: [320, 350, 280, 260, 240, 220, 200, null, null, null, null, null],
                    color: chartColors.gridPurchased
                }, {
                    name: 'オンサイト',
                    type: 'bar',
                    data: [180, 160, 220, 250, 280, 310, 340, null, null, null, null, null],
                    color: chartColors.facilityInternal
                }, {
                    name: 'オフサイト',
                    type: 'bar',
                    data: [120, 140, 160, 180, 200, 220, 240, null, null, null, null, null],
                    color: chartColors.facilityExternal
                }, {
                    name: '再エネ利用率',
                    type: 'line',
                    data: [48.4, 46.2, 57.6, 62.3, 66.7, 70.7, 74.4, null, null, null, null, null]
                }]
            },
            dailyrecyclerate: {
                series: [
                    {
                        name: '買電',
                        data: [2.0, 1.8, 1.5, 1.2, 1.5, 2.5, 4.5, 7.0, 9.5, 1.10, 12.0, 12.5, 13.0, 12.0, 11.0, 10.0, 9.0, 8.0, 7.0, 6.0, 4.5, 3.5, 2.5, 2.0],
                        color: chartColors.gridPurchased
                    },
                    {
                        name: 'オンサイト',
                        data: [1.5, 1.2, 10, 0.8, 1.2, 2.0, 3.5, 5.5, 7.5, 8.5, 9.0, 9.5, 10.0, 9.5, 8.5, 7.5, 7.0, 6.0, 5.0, 4.0, 3.5, 2.5, 2.0, 1.5],
                        color: chartColors.facilityInternal
                    },
                    {
                        name: 'オフサイト',
                        data: [1.0, .8, .5, .5, 0.8, 1.5, 2.5, 4.0, 5.5, 6.5, 7.0, 7.5, 8.0, 7.5, 6.5, 6.0, 5.5, 4.5, 4.0, 3.0, 2.5, 2.0, 1.5, 1.0],
                        color: chartColors.facilityExternal
                    }
                ]
            }
        },
        fac3: {
            recyclerate: {
                series: [45, 30, 25],
                labels: ['施設外で発電した再エネ', '施設内で発電した再エネ', '電力市場から購入した再エネ']
            },
            monthlyrecyclerate: {
                series: [{
                    name: '買電',
                    type: 'bar',
                    data: [320, 350, 280, 260, 240, 220, 200, null, null, null, null, null],
                    color: chartColors.gridPurchased
                }, {
                    name: 'オンサイト',
                    type: 'bar',
                    data: [180, 160, 220, 250, 280, 310, 340, null, null, null, null, null],
                    color: chartColors.facilityInternal
                }, {
                    name: 'オフサイト',
                    type: 'bar',
                    data: [120, 140, 160, 180, 200, 220, 240, null, null, null, null, null],
                    color: chartColors.facilityExternal
                }, {
                    name: '再エネ利用率',
                    type: 'line',
                    data: [48.4, 46.2, 57.6, 62.3, 66.7, 70.7, 74.4, null, null, null, null, null]
                }]
            },
            dailyrecyclerate: {
                series: [
                    {
                        name: '買電',
                        data: [2.0, 1.8, 1.5, 1.2, 1.5, 2.5, 4.5, 7.0, 9.5, 1.10, 12.0, 12.5, 13.0, 12.0, 11.0, 10.0, 9.0, 8.0, 7.0, 6.0, 4.5, 3.5, 2.5, 2.0],
                        color: chartColors.gridPurchased
                    },
                    {
                        name: 'オンサイト',
                        data: [1.5, 1.2, 10, 0.8, 1.2, 2.0, 3.5, 5.5, 7.5, 8.5, 9.0, 9.5, 10.0, 9.5, 8.5, 7.5, 7.0, 6.0, 5.0, 4.0, 3.5, 2.5, 2.0, 1.5],
                        color: chartColors.facilityInternal
                    },
                    {
                        name: 'オフサイト',
                        data: [1.0, .8, .5, .5, 0.8, 1.5, 2.5, 4.0, 5.5, 6.5, 7.0, 7.5, 8.0, 7.5, 6.5, 6.0, 5.5, 4.5, 4.0, 3.0, 2.5, 2.0, 1.5, 1.0],
                        color: chartColors.facilityExternal
                    }
                ]
            }
        }
    },
    generator: {
        fac4: {
            performance: { value: 80 },
            monthlyperformance: {
                series: [
                    {
                        name: '発電量',
                        data: [800, 780, 750, 730, 700, 680, 650, 680, 700, 730, 750, 780],
                        color: chartColors.generation
                    }
                ]
            },
            dailyperformance: {
                series: [
                    {
                        name: '発電量',
                        data: [25, 20, 15, 10, 15, 30, 50, 75, 90, 95, 10, 85, 90, 80, 60, 90, 80, 70, 60, 50, 40, 35, 30, 25],
                        color: chartColors.generation
                    }
                ]
            },
            currentPerformance: {
                value: 75,
                color: chartColors.gauge.generation
            },
            batteryChart: {
                value:75
            }
        },
        fac5: {
            performance: { value: 75 },
            monthlyperformance: {
                series: [
                    {
                        name: '発電量',
                        data: [800, 780, 750, 730, 700, 680, 650, 680, 700, 730, 750, 780],
                        color: chartColors.generation
                    }
                ]
            },
            dailyperformance: {
                series: [
                    {
                        name: '発電量',
                        data: [25, 20, 15, 10, 15, 30, 50, 75, 90, 95, 10, 85, 90, 80, 60, 90, 80, 70, 60, 50, 40, 35, 30, 25],
                        color: chartColors.generation
                    }
                ]
            },
            currentPerformance: {
                value: 75,
                color: chartColors.gauge.generation
            }
        },
        fac6: {
            performance: { value: 70 },
            monthlyperformance: {
                series: [
                    {
                        name: '発電量',
                        data: [800, 780, 750, 730, 700, 680, 650, 680, 700, 730, 750, 780],
                        color: chartColors.generation
                    }
                ]
            },
            dailyperformance: {
                series: [
                    {
                        name: '発電量',
                        data: [25, 20, 15, 10, 15, 30, 50, 75, 90, 95, 10, 85, 90, 80, 60, 90, 80, 70, 60, 50, 40, 35, 30, 25],
                        color: chartColors.generation
                    }
                ]
            },
            currentPerformance: {
                value: 75,
                color: chartColors.gauge.generation
            }
        }
    }
};

// Chart.jsのグラフ描画関数
function drawDonutChart(elementId, options) {
    const canvasId = `${elementId}-canvas`;
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // 合計値を計算
    const total = options.series.reduce((acc, val) => acc + val, 0);
    
    const chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: options.labels,
            datasets: [{
                data: options.series,
                backgroundColor: [
                    chartColors.facilityExternal,
                    chartColors.facilityInternal,
                    chartColors.gridPurchased
                ],
                borderWidth: 0
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '70%',
            layout: {
                padding: 20
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                },
                // annotation: {
                //     annotations: {
                //         label1: {
                //             type: 'label',
                //             xValue: 50,
                //             yValue: 50,
                //             xAdjust: 20,
                //             yAdjust: 20,
                //             content: `${total}`,
                //             font: {
                //                 size: 36,
                //                 weight: 500,
                //                 family: 'Lexend'
                //             },
                //             color: '#000'
                //         },
                //         label2: {
                //             type: 'label',
                //             xValue: 50,
                //             yValue: 50,
                //             xAdjust: 20,
                //             yAdjust: 45,
                //             content: `%`,
                //             font: {
                //                 size: 16,
                //                 weight: 700,
                //                 family: 'Noto Sans JP'
                //             },
                //             color: '#000'
                //         }
                //     },
                // }
            }
        },
        plugins: [{
            id: 'valueLabels',
            afterDatasetsDraw: (chart) => {
                const { ctx, data, width, height } = chart;
                const meta = chart.getDatasetMeta(0);
                
                ctx.save();
                ctx.font = '500 26px Lexend';
                ctx.fillStyle = '#444';
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // テキストの大きさを推定するための余白
                const textPadding = 15;
                
                meta.data.forEach((arc, i) => {
                    const value = data.datasets[0].data[i];
                    const valueText = `${value}%`;
                    
                    // テキストの幅を測定
                    const textWidth = ctx.measureText(valueText).width;
                    const textHeight = 26; // フォントサイズに基づく推定高さ
                    
                    // 元の位置を計算
                    const angle = (arc.startAngle + arc.endAngle) / 2;
                    const radius = (arc.outerRadius + arc.innerRadius) / 1;
                    let x = arc.x + Math.cos(angle) * radius;
                    let y = arc.y + Math.sin(angle) * radius;
                    
                    // キャンバスの境界をチェック
                    const halfTextWidth = textWidth / 2 + textPadding;
                    const halfTextHeight = textHeight / 2 + textPadding;
                    
                    // X座標の調整
                    if (x - halfTextWidth < 0) {
                        x = halfTextWidth; // 左端に収める
                    } else if (x + halfTextWidth > width) {
                        x = width - halfTextWidth; // 右端に収める
                    }
                    
                    // Y座標の調整
                    if (y - halfTextHeight < 0) {
                        y = halfTextHeight; // 上端に収める
                    } else if (y + halfTextHeight > height) {
                        y = height - halfTextHeight; // 下端に収める
                    }
                    
                    // 数値部分を描画
                    ctx.font = '500 26px Lexend';
                    ctx.fillText(value, x, y);
                    
                    // %記号を描画（異なるフォントで）
                    const percentWidth = ctx.measureText(value).width -5// 2 + 5; // 間隔を追加
                    ctx.font = '700 16px "Noto Sans JP"';
                    ctx.fillText('%', x + percentWidth, y +1.5);
                    
                    // グラフ項目の中心点を計算
                    const segmentRadius = (arc.outerRadius + arc.innerRadius) / 2;
                    const segmentX = arc.x + Math.cos(angle) * segmentRadius;
                    const segmentY = arc.y + Math.sin(angle) * segmentRadius;
                    
                    // テキストの下線の位置を計算
                    const underlineY = y + halfTextHeight - textPadding;
                    const underlineLeftX = x - halfTextWidth + textPadding;
                    const underlineRightX = x + halfTextWidth - textPadding;
                    
                    // 下線を描画
                    ctx.beginPath();
                    ctx.moveTo(underlineLeftX, underlineY);
                    ctx.lineTo(underlineRightX, underlineY);
                    ctx.strokeStyle = '#666';
                    ctx.lineWidth = 1;
                    ctx.stroke();
                    
                    // グラフ項目の中心から見て、テキストが右側にあるか左側にあるかを判断
                    const isTextOnRight = arc.x < x;
                    
                    // 引き出し線の終点を決定（下線の左端か右端）
                    const lineEndX = isTextOnRight ? underlineLeftX : underlineRightX;
                    
                    // 引き出し線を描画
                    ctx.beginPath();
                    ctx.moveTo(segmentX, segmentY); // グラフ項目の中心から開始
                    ctx.lineTo(lineEndX, underlineY); // 下線の端に向かって線を引く
                    ctx.strokeStyle = '#666'; // 線の色
                    ctx.lineWidth = 1; // 線の太さ
                    ctx.stroke();
                });
                
                ctx.restore();
            }
        }, {
            // 中央に合計値と%を表示するプラグイン
            id: 'centerText',
            afterDraw: (chart) => {
                const { ctx, width, height } = chart;
                
                // 合計値のテキスト描画
                ctx.save();
                ctx.textAlign = 'center';
                ctx.textBaseline = 'middle';
                
                // 数値の描画
                ctx.font = '500 36px Lexend';
                ctx.fillStyle = '#000';
                ctx.fillText(total, width / 2, height / 2);
                
                // %記号の描画
                ctx.font = '700 16px "Noto Sans JP"';
                ctx.fillText('%', width / 2, height / 2 + 25);
                
                ctx.restore();
            }
        }]
    });
    
    return chart;
}

function drawRadialBarChart(elementId, options) {
    const canvasId = `${elementId}-canvas`;
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // デフォルトのカラーを設定
    const defaultColors = chartColors.gauge.target;
    // オプションからカラーを取得（存在する場合）
    const colors = options.color || defaultColors;
    
    let chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [options.series[0], 100 - options.series[0]],
                backgroundColor: [
                    colors.main,
                    colors.background
                ],
                borderWidth: 0,
                circumference: 180,
                rotation: 270
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            cutout: '80%',
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            },
        },
    });

    // 値を表示するための要素を追加
    const container = document.getElementById(elementId);
    const valueDisplay = document.createElement('div');
    valueDisplay.className = 'percentage';
    valueDisplay.style.position = 'absolute';
    valueDisplay.style.top = '70%';
    valueDisplay.style.left = '50%';
    valueDisplay.style.transform = 'translate(-50%, -50%)';
    valueDisplay.style.fontSize = '36px';
    valueDisplay.style.fontWeight = '500';
    valueDisplay.innerHTML = `${options.series[0]}<span class="unit">%</span>`;
    container.appendChild(valueDisplay);

    return chart;
}

function drawAreaChart(elementId, options) {
    const canvasId = `${elementId}-canvas`;
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    const colors = [
        chartColors.gridPurchased,  // 電力市場から購入した再エネ
        chartColors.facilityInternal,   // 施設内で発電した再エネ
        chartColors.facilityExternal    // 施設外で発電した再エネ
    ];
    const datasets = options.series.map((series, index) => ({
        label: series.name,
        data: series.data,
        backgroundColor: series.color || colors[index],
        borderColor: (series.color || colors[index]).replace('0.6', '1'), // 境界線は不透明に
        borderWidth: 1,
        fill: true,
        tension: 0,
        pointRadius:0
    }));

    // 日次データか月次データかを判断
    const isDaily = options.series[0].data.length === 24;
    const labels = isDaily 
        ? Array.from({length: 24}, (_, i) => i)
        : ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];

    return new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: datasets
        },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        stacked: true,
                        title: {
                            display: true,
                            text: '%'
                        },
                        ticks:{
                            stepSize:25,
                            font:{
                                size:16,
                                family:"Lexend",
                                weight:700
                            }
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: isDaily ? '時' : '月'
                        },
                        ticks:{
                            font:{
                                size:16,
                                family:"Lexend",
                                weight:700
                            },
                            maxRotation: 0
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
    });
}

function drawProgressBarChart(elementId, options) {
    const canvasId = `${elementId}-canvas`;
    const ctx = document.getElementById(canvasId).getContext('2d');
    
    // デフォルトのカラーを設定
    const defaultColors = chartColors.gauge.target;
    // オプションからカラーを取得（存在する場合）
    const colors = options.color || defaultColors;
    
    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [''],
            datasets: [{
                data: [options.value],
                backgroundColor: colors.main,
                borderWidth: 0,
                barPercentage: 0.3,
                categoryPercentage: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {
                    min: 0,
                    max: 100,
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    },
                    ticks: {
                        display: false
                    },
                    border: {
                        display: false
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    enabled: false
                }
            }
        }
    });
}

function drawMixedBarChart(elementId, options) {
    const canvasId = `${elementId}-canvas`;
    const ctx = document.getElementById(canvasId).getContext('2d');
    const datasets = options.series.map((series, index) => {
        const isLine = series.type === 'line';
        return {
            label: series.name,
            data: series.data,
            type: isLine ? 'line' : 'bar',
            backgroundColor: isLine ? '#ffffff' : series.color || [chartColors.gridPurchased, chartColors.facilityExternal, chartColors.facilityInternal][index],
            borderColor: isLine ? '#417545' : undefined,
            borderWidth: isLine ? 4 : 0,
            pointBorderWidth: isLine ? 2 : 0,
            yAxisID: isLine ? 'percentage' : 'power',
            order: isLine ? 0 : 1,
            pointRadius: isLine ? 4 : 0,
            fill: false
        };
    });

    return new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            datasets: datasets
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                power: {
                    type: 'linear',
                    position: 'left',
                    stacked: true,
                    max: 1000,
                    title: {
                        display: true,
                        position: 'top',
                        align: 'end',
                        text: '(kWh)'
                    },
                    ticks: {
                        stepSize:250,
                        callback: function(value) {
                            return value;
                        },
                        font:{
                            size:16,
                            family:"Lexend",
                            weight:700
                        }
                    }
                },
                percentage: {
                    type: 'linear',
                    position: 'right',
                    min: 0,
                    max: 100,
                    grid: {
                        drawOnChartArea: false
                    },
                    title: {
                        display: true,
                        text: '再エネ利用率 (%)'
                    },
                    ticks: {
                        stepSize:25,
                        callback: function(value) {
                            return value;
                        },
                        font:{
                            size:16,
                            family:"Lexend",
                            weight:700
                        }
                    }
                },
                x: {
                    stacked: true,
                    ticks:{
                        font:{
                            size:16,
                            family:"Lexend",
                            weight:700
                        },
                    }
                }
            },
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const isPercentage = context.dataset.yAxisID === 'percentage';
                            return `${context.dataset.label}: ${context.parsed.y}${isPercentage ? '%' : ' kWh'}`;
                        }
                    }
                }
            }
        }
    });
}

function drawBatteryChart(elementId, options){
    // options から value を取得（デフォルト値は 0）
    const value = options.value || 0;
    
    // バッテリーレベルの要素を取得
    // 注: batteryLevel900 は誤字で batteryLevel90 の可能性があるため、両方に対応
    const batteryLevels = [
        document.getElementById('batteryLevel10'),
        document.getElementById('batteryLevel20'),
        document.getElementById('batteryLevel30'),
        document.getElementById('batteryLevel40'),
        document.getElementById('batteryLevel50'),
        document.getElementById('batteryLevel60'),
        document.getElementById('batteryLevel70'),
        document.getElementById('batteryLevel80'),
        document.getElementById('batteryLevel90'),
        document.getElementById('batteryLevel100')
    ];
    
    // value に基づいて .active クラスを付与/削除
    batteryLevels.forEach((level, index) => {
        if (!level) return; // 要素が存在しない場合はスキップ
        
        const levelValue = (index + 1) * 10; // 10, 20, 30, ...
        
        if (levelValue <= value) {
            level.classList.add('active');
        } else {
            level.classList.remove('active');
        }
    });
    
    // .battery-value 要素を更新
    const batteryValueElement = document.querySelector('.battery-value');
    if (batteryValueElement) {
        batteryValueElement.innerHTML = `${value}<div class="battery-value-unit">%</div>`;
    }
}

// イベントリスナーと表示関数
document.addEventListener('DOMContentLoaded', () => {    
    document.querySelectorAll('.nav-group a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const facilityType = link.dataset.facilityType;
            const facilityId = link.dataset.facilityId || null;
            const facilityTitle = link.dataset.facilityTitle;
            const facilitySubTitle = link.dataset.facilitySubtitle;
            showContent(facilityType, facilityId, facilityTitle, facilitySubTitle);
        });
    });
    document.querySelector('#home').click()
});

function showContent(facilityType, facilityId = null, facilityTitle, facilitySubtitle) {
    ['ホーム', '需要家', '発電蓄電施設', '発電施設'].forEach(id => {
        document.getElementById(id).style.display = 'none';
    });
    
    const content = document.getElementById(facilityType);
    if (content) {
        content.style.display = 'flex';
    }

    document.querySelectorAll('.nav-group h2').forEach(el => {
        el.classList.remove('active');
    });

    document.querySelectorAll('.nav-group li').forEach(li => {
        li.classList.remove('active');
    });

    document.querySelector('#dashboard-title').innerText = facilityTitle
    document.querySelector('#dashboard-subtitle').innerText = facilitySubtitle

    const clickedLink = document.querySelector(`a[data-facility-type="${facilityType}"]${facilityId ? `[data-facility-id="${facilityId}"]` : ''}`);
    if (clickedLink) {
        if (facilityType === 'ホーム') {
            clickedLink.closest('h2').classList.add('active');
        } else {
            clickedLink.closest('li').classList.add('active');
        }
    }

    const clearChartContainer = (elementId) => {
        const container = document.getElementById(elementId);
        if (container) {
            container.innerHTML = `<canvas id="${elementId}-canvas"></canvas>`;
        }
    };

    [
        'home-recyclerate',
        'home-co2mokuhyo',
        'home-monthlyrecyclerate',
        'user-recyclerate',
        'user-monthlyrecyclerate',
        'user-dailyrecyclerate',
        'generator-performance',
        'generator-progress',
        'generator-monthlyperformance',
        'generator-dailyperformance',
        'generator-storage-performance',
        'generator-storage-monthlyperformance',
        'generator-storage-dailyperformance'
    ].forEach(clearChartContainer);

    if (facilityType === 'ホーム') {
        drawDonutChart('home-recyclerate', {
            series: chartData.home.recyclerate.series,
            labels: chartData.home.recyclerate.labels
        });
        
        drawRadialBarChart('home-co2mokuhyo', {
            series: [chartData.home.co2mokuhyo.value],
            labels: ['達成率'],
            color: chartData.home.co2mokuhyo.color
        });
        
        drawMixedBarChart('home-monthlyrecyclerate', {
            series: chartData.home.monthlyrecyclerate.series
        });
    }
    else if (facilityType === '需要家' && facilityId) {
        const userData = chartData.user[facilityId];
        if (userData) {
            drawDonutChart('user-recyclerate', {
                series: userData.recyclerate.series,
                labels: userData.recyclerate.labels
            });
            
            drawMixedBarChart('user-monthlyrecyclerate', {
                series: userData.monthlyrecyclerate.series
            });
            
            drawAreaChart('user-dailyrecyclerate', {
                series: userData.dailyrecyclerate.series
            });
        }
    }
    else if (facilityType === '発電蓄電施設' && facilityId) {
        const generatorData = chartData.generator[facilityId];
        if (generatorData) {
            drawRadialBarChart('generator-storage-performance', {
                series: [generatorData.currentPerformance.value],
                labels: ['現在の発電量'],
                color: generatorData.currentPerformance.color
            });
            
            // バッテリーチャートの描画（batteryChart データがある場合）
            if (generatorData.batteryChart) {
                drawBatteryChart('battery-chart', generatorData.batteryChart);
            }
            
            drawMixedBarChart('generator-storage-monthlyperformance', {
                series: generatorData.monthlyperformance.series
            });
            
            drawAreaChart('generator-storage-dailyperformance', {
                series: generatorData.dailyperformance.series
            });
        }
    }
    else if (facilityType === '発電施設' && facilityId) {
        const generatorData = chartData.generator[facilityId];
        if (generatorData) {
            drawRadialBarChart('generator-performance', {
                series: [generatorData.currentPerformance.value],
                labels: ['現在の発電量'],
                color: generatorData.currentPerformance.color
            });
            
            // drawRadialBarChart('generator-progress', {
            //     series: [generatorData.performance.value],
            //     labels: ['現在の蓄電量']
            // });
            
            drawMixedBarChart('generator-monthlyperformance', {
                series: generatorData.monthlyperformance.series
            });
            
            drawAreaChart('generator-dailyperformance', {
                series: generatorData.dailyperformance.series
            });
        }
    }
}
