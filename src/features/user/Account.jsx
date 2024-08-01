//#969FE7

import BasicInformation from "./BasicInformation";
import DeleteAccount from "./DeleteAccount";
import PasswordInformation from "./PasswordInformation";

function Account() {
  return (
    <section className="grid grid-cols-1 gap-5 mt-20 h-full px-4 lg:gap-6 lg:px-10 lg:grid-cols-2">
      <BasicInformation />
      <PasswordInformation />
      <DeleteAccount />
    </section>
  );
}

export default Account;
/**
 *  

      
 */
