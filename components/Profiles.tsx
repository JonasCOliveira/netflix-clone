import Link from "next/link";

const images = [
  "/images/default-blue.png",
  "/images/default-red.png",
  "/images/default-slate.png",
  "/images/default-green.png",
];

interface UserCardProps {
  name: string;
}

const UserCard: React.FC<UserCardProps> = ({ name }) => {
  const imgSrc = images[Math.floor(Math.random() * 4)];
  return (
    <Link href="/Auth">
      <div className="group flex-row w-44 mx-auto">
        <div className="w-44 h-44 rounded-md flex items-center justify-center border-2 border-transparent group-hover:cursor-pointer group-hover:border-white overflow-hidden">
          <img src={imgSrc} alt="" className="w-max h-max object-contain" />
        </div>
        <div className="mt-4 text-gray-400 text-2xl text-center group-hover:text-white">
          {name}
        </div>
      </div>
    </Link>
  );
};

const Profiles = () => {
  return (
    <div className="h-[100vh] flex items-center justify-center">
      <div className="flex flex-col">
        <h1 className="text-3xl md:text-6xl text-white text-center">
          Who&#39;s watching?
        </h1>
        <div className="flex items-center justify-center gap-8 mt-10">
          <UserCard name="Jonas" />
        </div>
      </div>
    </div>
  );
};

export default Profiles;
