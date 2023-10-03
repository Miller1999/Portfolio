const Aside = ({ children }) => {
  return (
    <aside className="w-2/5 max-w-[calc(135px+32px)] h-[calc(647px-32px)] border-r border-black p-4 bg-gray-500 flex flex-col gap-5">
      <div className="flex flex-col gap-5">{children}</div>
    </aside>
  );
};

export default Aside;
