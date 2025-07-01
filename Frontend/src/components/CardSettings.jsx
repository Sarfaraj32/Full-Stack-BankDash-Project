// CardSettings.jsx
import { ShieldOff, Lock, GanttChartSquare, Apple, Store } from "lucide-react";

const settings = [
  {
    title: "Block Card",
    desc: "Instantly block your card",
    icon: <ShieldOff className="text-yellow-500" />,
    bg: "bg-yellow-100",
  },
  {
    title: "Change Pic Code",
    desc: "Withdraw without any card",
    icon: <Lock className="text-blue-500" />,
    bg: "bg-blue-100",
  },
  {
    title: "Add to Google Pay",
    desc: "Withdraw without any card",
    icon: <GanttChartSquare className="text-pink-500" />,
    bg: "bg-pink-100",
  },
  {
    title: "Add to Apple Pay",
    desc: "Withdraw without any card",
    icon: <Apple className="text-teal-500" />,
    bg: "bg-teal-100",
  },
  {
    title: "Add to Apple Store",
    desc: "Withdraw without any card",
    icon: <Store className="text-teal-500" />,
    bg: "bg-teal-100",
  },
];

export default function CardSettings() {
  return (
    <div>
      <h3 className="text-lg font-bold">Card Setting</h3>
      <div className="bg-white rounded-2xl shadow-md p-4 w-full max-w-sm border border-blue-200">
        <div className="space-y-1">
          {settings.map((setting, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-3 rounded-xl bg-gray-50 hover:shadow"
            >
              <div className={`p-2 rounded-full ${setting.bg}`}>
                {setting.icon}
              </div>
              <div>
                <p className="font-semibold text-gray-700">{setting.title}</p>
                <p className="text-sm text-gray-500">{setting.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
