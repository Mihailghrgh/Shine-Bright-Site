function Footer() {
  return (
    <footer
      id="footer"
      className="py-20 flex justify-center bg-gradient-to-r from-blue-400 via-blue-500 to-indigo-600"
    >
      <div className="flex space-x-0 md:space-x-56 flex-col md:flex-row justify-between items-center text-white">
        <div>
          <h1 className="font-bold tracking-wider text-6xl">DACON</h1>
          <p className="tracking-widest text-3xl">SHINE BRIGHT</p>
        </div>

        <div className="flex space-x-6 pt-4 text-white">
          <p className="hover:text-slate-50 transition-colors">0735843957</p>
          <p className="hover:text-slate-50 transition-colors">
            dacon@gmail.com
          </p>
          <p className="hover:text-slate-50 transition-colors">
            București, Sector 6
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
