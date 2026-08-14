import {PieChart,Pie,Cell,Tooltip,Legend,ResponsiveContainer} from "recharts";

const LeadStatusChart=({data})=>{

    if(!data || !data.length){
        return <p>No status data available</p>;
    }

    // Pink theme color palette with variations
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
            const entry = payload[0];
            const percentage = ((entry.value / data.reduce((sum, item) => sum + item.count, 0)) * 100).toFixed(1);
            return (
                <div className="chart-tooltip">
                    <p className="tooltip-label">{entry.payload.status}</p>
                    <p className="tooltip-value">Count: {entry.value}</p>
                    <p className="tooltip-percentage">{percentage}%</p>
                </div>
            );
        }
        return null;
    };

    // Custom label renderer
    const renderCustomLabel = (entry) => {
        const total = data.reduce((sum, item) => sum + item.count, 0);
        const percentage = ((entry.count / total) * 100).toFixed(0);
        return `${percentage}%`;
    };

    return(
        <div className="chart-card">

            <h3>Lead Status</h3>

            <ResponsiveContainer width="100%" height={320}>

                <PieChart margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>

                    <Pie
                        data={data}
                        dataKey="count"
                        nameKey="status"
                        cx="50%"
                        cy="50%"
                        outerRadius={100}
                        innerRadius={0}
                        label={renderCustomLabel}
                        labelLine={false}
                        isAnimationActive={true}
                        animationDuration={800}
                        animationEasing="ease-out"
                    >
                        {data.map((entry,index)=>(
                            <Cell key={`cell-${index}`} fill={chartColors[index % chartColors.length]} />
                        ))}
                    </Pie>

                    <Tooltip content={<CustomTooltip />} />

                    <Legend 
                        layout="vertical" 
                        align="right" 
                        verticalAlign="middle"
                        wrapperStyle={{ paddingLeft: '20px' }}
                    />

                </PieChart>

            </ResponsiveContainer>

        </div>
    );

};

export default LeadStatusChart;