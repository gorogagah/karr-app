export default function CustomTooltip({ payload, label, active }) {
    if (active) {
        const listItems = payload.map((data) =>
            <div className="flex items-center px-3 pb-3">
                <span className="size-3 rounded-full mr-2" style={{ "background-color": data.color }}></span>
                <span>{data.name}: </span>
                <span className="font-semibold text-gray-900 ml-2">Rp {data.value}</span>
            </div>
        );

        return (
            <div className="overflow-hidden rounded-sm shadow-md text-sm text-gray-500 bg-white dark:text-gray-400 dark:bg-gray-800">
                <h1 className="bg-gray-200 border-b border-gray-300 px-3 py-2 mb-3">{label}</h1>
                {listItems}
            </div>
        );
    }

    return null;
}