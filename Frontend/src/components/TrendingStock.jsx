const stocks = [
  { name: "Trivago", price: "$520", return: "+5%" },
  { name: "Canon", price: "$480", return: "+10%" },
  { name: "Uber Food", price: "$350", return: "-3%" },
  { name: "Nokia", price: "$940", return: "+2%" },
  { name: "Tiktok", price: "$670", return: "-12%" },
];

export default function TrendingStock() {
  return (
    <div className="w-full">
      <h3 className="text-lg font-bold mb-4">Trending Stock</h3>
      <div className="bg-white rounded-2xl shadow-md p-2 w-full">
        {stocks.map((stock, index) => (
          <div
            key={stock.name}
            className="flex items-center justify-between bg-gray-50 p-2 rounded-xl"
          >
            <div className="flex items-center gap-4">
              <div className="bg-gray-100 p-2 rounded-full">
                {`0${index + 1}`}
              </div>
              <div>
                <h3 className="font-semibold text-gray-700">{stock.name}</h3>
                <p className="text-sm text-gray-500">{stock.price}</p>
              </div>
            </div>
            <div className="text-right">
              <p
                className={`text-sm ${
                  stock.return.startsWith("+")
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {stock.return}
              </p>
              <p className="text-xs text-blue-500">Return Value</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
