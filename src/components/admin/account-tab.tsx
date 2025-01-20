import { LogoutButton } from "../shared/logout-button";

export const AccountTab = () => {
  return (
    <div>
      <div className="mb-6">
        <h2 className="mb-3 text-2xl font-bold">Account</h2>
        <p className="text-gray-500">Manage admin account.</p>
      </div>

      <LogoutButton />
    </div>
  );
};
