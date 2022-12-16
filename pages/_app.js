import "../styles/globals.css";
import toast, { Toaster } from "react-hot-toast";
function MyApp({ Component, pageProps }) {
  return (
    <div className="h-screen w-screen bg-[#202125] text-stone-200 overflow-auto">
      <Component {...pageProps} />
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: "#363636",
            color: "#fff",
            borderRadius: "100px",
            marginTop: "20px",
            fontSize: "14px",
          },
        }}
        reverseOrder={false}
      />
    </div>
  );
}

export default MyApp;
