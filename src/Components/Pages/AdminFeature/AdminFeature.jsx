import "./AdminFeatured.scss";
import MoreVertIcon from "@mui/icons-material/MoreVert";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpOutlinedIcon from "@mui/icons-material/KeyboardArrowUpOutlined";
import { Bar, BarChart, Cell, Pie, PieChart } from "recharts";

const AdminFeatured = () => {
    const data = [
        { name: "Group A", value: 400 },
        { name: "Group B", value: 300 },
        { name: "Group C", value: 300 },
        { name: "Group D", value: 200 }
    ];
    const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({
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

    return (
        <div className="featured  ">
            <div className="top">
                <h1 className="title">Total Students</h1>
                <MoreVertIcon fontSize="small" />
            </div>
            <div className="bottom">
                <div className="featuredChart ">
                    <PieChart width={200} height={150}>
                        <Pie
                            data={data}
                            cx={100}
                            cy={55}
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={60}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
                <p className="title">Total Number of Students</p>
                <p className="amount">420</p>
                <p className="desc">
                    Number Of Students In Each Class
                </p>

                <div className="summary">

                    <div className="item">
                        <div className="itemTitle">5th</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">23</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">6th</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">23</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">7th</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">23</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">8th</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">23</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">9th</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">23</div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="itemTitle">10th</div>
                        <div className="itemResult positive">
                            <KeyboardArrowUpOutlinedIcon fontSize="small" />
                            <div className="resultAmount">23</div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AdminFeatured;