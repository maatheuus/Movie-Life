import BasicInformation from "./BasicInformation";
import DeleteAccount from "./DeleteAccount";
import PasswordInformation from "./PasswordInformation";

function Account() {
  return (
    <section className="grid grid-cols-1 gap-0 h-full px-8 py-20 md:gap-6 md:px-20 md:grid-cols-2">
      <BasicInformation />
      <PasswordInformation />
      <DeleteAccount />
    </section>
  );
}

export default Account;
