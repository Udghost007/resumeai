import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

import AccountSettings from "../../components/settings/AccountSettings";
import SecuritySettings from "../../components/settings/SecuritySettings";
import NotificationSettings from "../../components/settings/NotificationSettings";

const Settings = () => {
  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1 overflow-x-hidden">
        <DashboardHeader
          title="Settings"
          subtitle="Manage your account settings"
        />

        <div className="p-4 md:p-8 space-y-6">
          <AccountSettings />
          <SecuritySettings />
          <NotificationSettings />
        </div>
      </div>
    </div>
  );
};

export default Settings;
