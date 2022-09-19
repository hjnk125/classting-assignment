import React from "react";
import { PieChart, Pie, Cell } from "recharts";

type DataType = {
	name: string,
	value: number
}

type ChartProps = {
	data: DataType[]
}

const COLORS = ["#00C49F", "#FF8042"];

function Chart({ data }: ChartProps) {

	return (
		<PieChart width={200} height={200}>
			<Pie
				data={data}
				cx="50%"
				cy="50%"
				innerRadius={75}
				outerRadius={100}
				startAngle={-270}
				endAngle={90}
				paddingAngle={0}
				dataKey="value"
			>
				{data.map((entry, index) => (
					<Cell key={`cell-${entry.name}`} fill={COLORS[index % COLORS.length]} />
				))}
			</Pie>
		</PieChart>
	);
}

export default Chart;