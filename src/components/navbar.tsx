interface NavbarProps {}

const Navbar = (_: NavbarProps) => {
  return (
    <nav className="bg-stone-900">
      <div className="h-14 max-w-4xl mx-auto flex items-center">
        <h1 className="text-2xl text-white font-bold">API Endpoint Tester</h1>
      </div>
    </nav>
  )
}

export default Navbar