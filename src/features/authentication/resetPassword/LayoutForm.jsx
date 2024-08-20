function LayoutForm({ title, icon, text, children }) {
  return (
    <div className="w-full h-screen flex items-center justify-center bg-stone-100">
      <div className="max-w-md w-96 rounded-xl border border-gray-200 bg-stone-50 shadow-sm">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <div className="mb-4 inline-block rounded-full bg-blue-200 p-2 text-blue-500">
              {icon}
            </div>
            <h1 className="block text-2xl font-bold text-gray-800">{title}</h1>
            <p className="mt-2 text-sm text-gray-600">{text}</p>
          </div>

          <div className="mt-6">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default LayoutForm;
