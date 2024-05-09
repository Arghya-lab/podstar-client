import MonaLisaLoadingAnimation from "@/components/ui/MonaLisaLoadingAnimation";

function Loader() {
  return (
    <div className="flex-1 flex justify-center items-center">
      <div>
        <MonaLisaLoadingAnimation />
      </div>
    </div>
  );
}

export default Loader;
