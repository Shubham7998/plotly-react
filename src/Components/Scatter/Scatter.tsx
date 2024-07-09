import { title } from 'process';
import React from 'react';
import Plot from 'react-plotly.js';

export default function Scatter() {
    return (
        <Plot
            data={[
                {
                    x: [1, 2, 3, 4, 6, 8, 10, 12, 14, 16, 18],
                    y: [32, 37, 40.5, 43, 49, 54, 59, 63.5, 69.5, 73, 74],
                    mode: "markers",
                    type: "bar",
                    opacity: .9,
                    marker: {
                        color: 'red',
                        line: {
                            width: 2.5,
                            outliercolor: 'blue'
                        }
                    }
                },
            ]}
            layout={{
                title: "Growth Rate in Boys",
                xaxis: {
                    title: "Age (years)",
                },
                yaxis: {
                    title: "Height (inches)",
                },
            }}
        />
    )
}
