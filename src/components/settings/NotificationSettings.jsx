const NotificationSettings = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-bold mb-5">Notification Settings</h2>

      <div className="space-y-4">
        <label className="flex items-center gap-3">
          <input type="checkbox" />
          Email Notifications
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" />
          Resume Updates
        </label>

        <label className="flex items-center gap-3">
          <input type="checkbox" />
          Marketing Emails
        </label>
      </div>
    </div>
  );
};

export default NotificationSettings;
