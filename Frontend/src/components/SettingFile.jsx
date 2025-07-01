import { Camera, Save } from "lucide-react";
import { useState } from "react";

const SettingFile = () => {
  const [activeTab, setActiveTab] = useState("Edit Profile");
  const [twoFactor, setTwoFactor] = useState(false);
  const [notifications, setNotifications] = useState({
    digitalCurrency: true,
    merchantOrder: false,
    recommendations: true,
  });

  const tabs = ["Edit Profile", "Preferences", "Security"];

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-8 bg-white rounded-xl shadow-lg">
      <div className="flex flex-wrap gap-4 sm:gap-8 md:space-x-12 mb-6 md:mb-10 pb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`text-sm sm:text-base font-medium ${
              activeTab === tab
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-500 hover:text-gray-700"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {activeTab === "Edit Profile" && (
        <div className="flex flex-col md:flex-row gap-6 md:gap-12">
          {/* Left side - Profile Picture */}
          <div className="w-full md:w-1/4 flex justify-center md:block">
            <div className="relative">
              <img
                src="/profile.jpg"
                alt="Profile"
                className="w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover"
              />
              <button className="absolute bottom-1 right-1 p-2 bg-blue-600 rounded-full shadow-md hover:bg-blue-700 transition-colors">
                <Camera className="w-4 h-4 text-white" />
              </button>
            </div>
          </div>

          {/* Right side - Input Fields */}
          <div className="w-full md:w-3/4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-2">
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Charlene Reed"
                    className="w-full px-3 sm:px-4 py-2 sm:py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue="charlenereed@gmail.com"
                    className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Date of Birth
                  </label>
                  <input
                    type="text"
                    defaultValue="25 January 1990"
                    className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Permanent Address
                  </label>
                  <input
                    type="text"
                    defaultValue="San Jose, California, USA"
                    className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                  />
                </div>
              </div>

              <div className="space-y-4 sm:space-y-6">
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    User Name
                  </label>
                  <input
                    type="text"
                    defaultValue="Charlene Reed"
                    className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Password
                  </label>
                  <input
                    type="password"
                    defaultValue="********"
                    className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    Present Address
                  </label>
                  <input
                    type="text"
                    defaultValue="San Jose, California, USA"
                    className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-600 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    defaultValue="San Jose"
                    className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                  />
                </div>
              </div>

              <div className="col-span-1 sm:col-span-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      defaultValue="45962"
                      className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-600 mb-2">
                      Country
                    </label>
                    <input
                      type="text"
                      defaultValue="USA"
                      className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Preferences" && (
        <div className="space-y-6 sm:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-x-12 sm:gap-y-4">
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Currency
              </label>
              <input
                type="text"
                defaultValue="USD"
                className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
              />
            </div>
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Time Zone
              </label>
              <input
                type="text"
                defaultValue="(GMT-12:00) International Date Line West"
                className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
              />
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base text-gray-900">Notification</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  I send or receive digita currency
                </span>
                <button
                  className={`w-12 h-6 rounded-full transition-colors ${
                    notifications.digitalCurrency
                      ? "bg-blue-600"
                      : "bg-gray-200"
                  }`}
                  onClick={() =>
                    setNotifications((prev) => ({
                      ...prev,
                      digitalCurrency: !prev.digitalCurrency,
                    }))
                  }
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                      notifications.digitalCurrency
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  I receive merchant order
                </span>
                <button
                  className={`w-12 h-6 rounded-full transition-colors ${
                    notifications.merchantOrder ? "bg-blue-600" : "bg-gray-200"
                  }`}
                  onClick={() =>
                    setNotifications((prev) => ({
                      ...prev,
                      merchantOrder: !prev.merchantOrder,
                    }))
                  }
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                      notifications.merchantOrder
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">
                  There are recommendation for my account
                </span>
                <button
                  className={`w-12 h-6 rounded-full transition-colors ${
                    notifications.recommendations
                      ? "bg-blue-600"
                      : "bg-gray-200"
                  }`}
                  onClick={() =>
                    setNotifications((prev) => ({
                      ...prev,
                      recommendations: !prev.recommendations,
                    }))
                  }
                >
                  <div
                    className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                      notifications.recommendations
                        ? "translate-x-6"
                        : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeTab === "Security" && (
        <div className="space-y-6 sm:space-y-8">
          <div className="space-y-4">
            <h3 className="text-base text-gray-900">
              Two-factor Authentication
            </h3>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">
                Enable or disable two factor authentication
              </span>
              <button
                className={`w-12 h-6 rounded-full transition-colors ${
                  twoFactor ? "bg-blue-600" : "bg-gray-200"
                }`}
                onClick={() => setTwoFactor(!twoFactor)}
              >
                <div
                  className={`w-5 h-5 bg-white rounded-full transform transition-transform ${
                    twoFactor ? "translate-x-6" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-base text-gray-900">Change Password</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  defaultValue="********"
                  className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-600 mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  defaultValue="********"
                  className="w-full px-4 py-2.5 text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-6 sm:mt-10 flex justify-end">
        <button className="px-8 sm:px-15 py-2 sm:py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
          Save
        </button>
      </div>
    </div>
  );
};

export default SettingFile;
