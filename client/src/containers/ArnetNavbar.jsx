import Navbar from "../components/Navbar";
const navItems = [
	{
		name: "Home",
		link: "/arnet",
	},
	{
		name: "Brasier",
		link: "/arnet/brasier",
	},
	{
		name: "Panties",
		link: "/arnet/panties",
	},
	{
		name: "Marsutex",
		link: "/",
	},
	{
		name: "Contactanos",
		link: "mailto:ersel@marsutex.com",
	},
];

function ArnetNavbar() {
	return <Navbar navItems={navItems} name={"Arnet Intima"} />;
}

export default ArnetNavbar;
