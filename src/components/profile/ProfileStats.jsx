const ProfileStats = () => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm">
      <h2 className="text-xl font-bold mb-5">
        Profile Statistics
      </h2>

      <div className="space-y-4">
        <Stat
          title="Profile Completion"
          value="85%"
        />

        <Stat
          title="Resumes Created"
          value="12"
        />

        <Stat
          title="Downloads"
          value="35"
        />

        <Stat
          title="ATS Average"
          value="92%"
        />
      </div>
    </div>
  );
};

const Stat = ({ title, value }) => (
  <div className="flex justify-between border-b pb-3">
    <span>{title}</span>
    <span className="font-bold">{value}</span>
  </div>
);

export default ProfileStats;