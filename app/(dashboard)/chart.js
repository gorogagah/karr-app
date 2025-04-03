"use client"

import { CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import CustomTooltip from "../utils/customTooltip";

const data = [
    { name: '16 Mar', Penjualan: 63560 },
    { name: '17 Mar', Penjualan: 62180 },
    { name: '18 Mar', Penjualan: 61560 },
    { name: '19 Mar', Penjualan: 65260 },
    { name: '20 Mar', Penjualan: 63560 },
    { name: '21 Mar', Penjualan: 62560 },
    { name: '22 Mar', Penjualan: 66160 },
];

export default function Chart() {
    return (
        <ResponsiveContainer height={435}>
            <LineChart data={data} margin={{ top: 0, right: 24, left: 24, bottom: 24 }}>
                <Line type="monotone" dataKey="Penjualan" dot={{ fill: "#0ea5e9", stroke: "#fff", strokeWidth: 2, r: 5 }} activeDot={{ fill: "#0ea5e9", stroke: "#fff", strokeWidth: 2, r: 7 }} stroke="#0ea5e9" strokeWidth={3} />
                <CartesianGrid vertical={false} stroke="#ccc" />
                <XAxis dataKey="name" />
                <YAxis domain={['auto', 'auto']} axisLine={false} tickLine={false} />
                <Tooltip content={<CustomTooltip />} />
            </LineChart>
        </ResponsiveContainer>
    );
}