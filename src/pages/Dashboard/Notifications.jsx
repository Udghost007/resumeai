import { useState } from "react";
import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";

import NotificationList from "../../components/notifications/NotificationList";
import NotificationFilter from "../../components/notifications/NotificationFilter";

const Notifications = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="flex bg-slate-100 min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <DashboardHeader
          title="Notifications"
          subtitle="Stay updated with your activities"
        />

        <div className="p-8 space-y-6">
          <NotificationFilter
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
          <NotificationList activeFilter={activeFilter} />
        </div>
      </div>
    </div>
  );
};

export default Notifications;
