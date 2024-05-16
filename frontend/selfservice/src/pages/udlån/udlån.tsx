import getData from "@/lib/data/get";

export default function UdlånPage() {
  return (
    <div>
      <button
        onClick={() => {
          fetch("http://localhost:3000/api/loans_view").then((res) => {
            res.json().then((data) => {
              console.log(data);
            });
          });
        }}
      >
        Get
      </button>
    </div>
  );
}
