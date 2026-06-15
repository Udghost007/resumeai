import Sidebar from "../../components/dashboard/Sidebar";
import DashboardHeader from "../../components/dashboard/DashboardHeader";
import ProfileForm from "../../components/profile/ProfileForm";
import ProfileStats from "../../components/profile/ProfileStats";

const Profile = () => {
  return (
    <div className="min-h-screen bg-slate-100 flex">
      <Sidebar />

      <div className="flex-1 overflow-x-hidden">
        <DashboardHeader />

        <div className="p-4 md:p-8 grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ProfileForm />
          </div>

          <div>
            <ProfileStats />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
