import "./Snow.css";

export default function Snow() {
  const snowValue: number = 50;

  return (
    <>
      <div className="snow-container">
        {Array.from({ length: snowValue }, (_, index) => (
          <div key={index} className="snowflake">
          </div>
        ))}
      </div>
    </>
  );
}


