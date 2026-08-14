import {BarChart,Bar,XAxis,YAxis,Tooltip,ResponsiveContainer,Cell,CartesianGrid} from "recharts";

const LeadSourceChart=({data})=>{
    // Pink gradient palette for bars
    const chartColors = [
        "#E83E8C",  // Primary pink
        "#D946EF",  // Purple
        "#EC4899",  // Rose
        "#F472B6",  // Light pink
        "#FCA5D0",  // Very light pink
        "#F9A8D4",  // Soft pink
        "#E879F9",  // Vibrant purple-pink
        "#D8B4FE",  // Lavender
    ];

    // Custom tooltip styling
    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            return (
                <div className="chart-tooltip">
                    <p className="tooltip-label">{payload[0].payload.source}</p>
                    <p className="tooltip-value">Count: {payload[0].value}</p>
                </div>
            );
        }
        return null;
    };

    return(
        <div className="chart-card">

            <h3>Lead Sources</h3>

            <ResponsiveContainer width="100%" height={320}>

                <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>

                    <CartesianGrid stroke="none" />

                    <XAxis 
                        dataKey="source" 
                        stroke="none"
                        style={{ fontSize: '12px' }}
                        axisLine={false}
                        tickLine={false}
                    />

                    <YAxis 
                        stroke="none"
                        style={{ fontSize: '12px' }}
                        width={40}
                        axisLine={false}
                        tickLine={false}
                    />

                    <Tooltip content={<CustomTooltip />} />

                    <Bar 
                        dataKey="count" 
                        radius={[999, 999, 999, 999]}
                        fill="#E83E8C"
                        stroke="none"
                        isAnimationActive={true}
                        animationDuration={800}
                        animationEasing="ease-out"
                    >
                        {data && data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                        ))}
                    </Bar>

                </BarChart>

            </ResponsiveContainer>

        </div>
    );

};

export default LeadSourceChart;