interface PillProps {
    label: string;
    onClick?: () => void;
  }
  
  const Pill = ({ label, onClick }: PillProps) => (
    <button
      onClick={onClick}
      className="bg-gray-200 hover:bg-gray-300 px-4 py-1 rounded-full text-sm mr-2 mb-2"
    >
      {label}
    </button>
  );
  
  export default Pill;
  