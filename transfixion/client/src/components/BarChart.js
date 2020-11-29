import React from "react";
import { Cell, Pie, PieChart } from "recharts";
import LangInput from "../components/LangInput";

const data = [
  { name: "AAAA", value: 400 },
  { name: "BBBB", value: 300 },
  { name: "CCCC", value: 300 },
  { name: "DDDD", value: 200 }
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const ownLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default () => {
  return (
    <div className="row">
      <div className="col-md-7">
        <PieChart width={828} height={432}>
          <Pie
            data={data}
            cx={220}
            cy={250}
            labelLine={false}
            label={ownLabel}
            outerRadius={160}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((_, i) => (
              <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
        <h3 className="text-center">{LangInput("analysis_report")}</h3>
      </div>
      <div className="col-md-4">
        <table className="table table-sm table-hover table-border">
          <tbody>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
