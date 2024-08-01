function DeleteAccount() {
  return (
    <div className="bg-yellow-500 rounded-lg">
      <h2>Danger zone</h2>
      <div>
        <div>
          <h3>Delete account</h3>
          <p>
            You can delete your account here. This action is not reversible. All
            information related to this account will be deleted permanently.
          </p>
        </div>
        <button>Yes, delete my account</button>
      </div>
    </div>
  );
}

export default DeleteAccount;
