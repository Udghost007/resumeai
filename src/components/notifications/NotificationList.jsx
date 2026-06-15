const notifications = [
  {
    id: 1,
    type: "resume",
    title: "Resume Generated",
    message: "Your Frontend Developer Resume has been created successfully.",
    time: "2 minutes ago",
  },
  {
    id: 2,
    type: "ai",
    title: "AI Summary Generated",
    message: "AI generated a professional summary for your resume.",
    time: "15 minutes ago",
  },
  {
    id: 3,
    type: "system",
    title: "Profile Updated",
    message: "Your profile information was updated successfully.",
    time: "1 hour ago",
  },
];

const NotificationList = ({ activeFilter = "all" }) => {
  const filteredNotifications =
    activeFilter === "all"
      ? notifications
      : notifications.filter((item) => item.type === activeFilter);

  return (
    <div className="space-y-4">
      {filteredNotifications.map((item) => (
        <div key={item.id} className="bg-white p-5 rounded-2xl shadow-sm">
          <h3 className="font-semibold text-lg">{item.title}</h3>

          <p className="text-slate-600 mt-2">{item.message}</p>

          <span className="text-sm text-slate-400 mt-3 block">{item.time}</span>
        </div>
      ))}

      {filteredNotifications.length === 0 && (
        <div className="bg-white p-8 rounded-2xl shadow-sm text-center text-slate-500">
          No notifications found.
        </div>
      )}
    </div>
  );
};

export default NotificationList;
