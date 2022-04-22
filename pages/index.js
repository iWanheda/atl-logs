import Sidebar from "./components/Sidebar";
import MainScreen from "./components/MainScreen";
import UserSettings from "./components/UserSettings";

const Home = ({ logs }) => {
  return (
    <main className="bg-primary w-screen h-screen flex">
      <Sidebar />
      <MainScreen logs={logs} />
      <UserSettings />
    </main>
  );
};

export async function getServerSideProps(ctx) {
  const data = await fetch("http://localhost:3030/log/trunk").then((r) =>
    r.json()
  );

  return {
    props: {
      logs: data.reverse(),
    },
  };
}

export default Home;
