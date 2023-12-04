import "./Snow.css";

export default function Snow() {
  const snowValue: number = 50;

  return (
    <>
    <div className="main-content container mx-auto p-10 flex items-center">
        <div className="container mx-auto p-4 border border-gray-300 rounded-lg shadow-lg">
            <p className="text-center">Container</p>
        </div>
    </div>
      <div className="snow-container">
        {Array.from({ length: snowValue }, (_, index) => (
          <div key={index} className="snowflake">
          </div>
        ))}
      </div>
    </>
  );
}


