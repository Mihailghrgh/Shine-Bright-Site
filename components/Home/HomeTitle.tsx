import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
function HomeTitle() {
  return (
    <div className="min-h-screen bg-background" id="home">
      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6 leading-tight">
            Transformați business-ul, noi îți oferim{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Soluția!
            </span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Folosind serviciile noastre noi îți vom oferii cel profesional
            serviciu de curățare pe care îl poți primii. Apelează acum sau
            trimite-ne un email apăsând butonul de mai jo!
          </p>
          <Link href="#footer">
            <Button
              color="primary"
              size="lg"
              className="text-lg px-8 py-6 hover:shadow-xl transition duration-250"
            >
              Trimite email !
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
export default HomeTitle;
