// אתר מוכן להעלאה ל‑Vercel
// שלבים:
// 1. צור פרויקט Next.js חדש
// 2. החלף את הקובץ app/page.js בקוד הזה
// 3. העלה ל‑GitHub
// 4. חבר ל‑Vercel ופרסם

export default function ContractorWebsite() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      {/* Hero Section */}
      <header className="bg-[url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center">
        <div className="bg-black/60 min-h-[85vh] flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
            עמשה ייזום ובנייה
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl leading-relaxed mb-8">
            קבלן בנייה רשום המתמחה בבניית בתים פרטיים, תוספות בנייה,
            שיפוצים ועבודות גמר ברמה הגבוהה ביותר.
          </p>
          <a
            href="tel:0584554348"
            className="bg-yellow-500 hover:bg-yellow-400 text-black font-bold px-8 py-4 rounded-2xl text-xl shadow-xl transition"
          >
            התקשר עכשיו – 058-455-4348
          </a>
        </div>
      </header>

      {/* About */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">מי אנחנו</h2>
          <p className="text-lg leading-8 text-gray-700 mb-4">
            עמשה ייזום ובנייה הינה חברה מקצועית בתחום הבנייה והייזום, המעניקה שירותי בנייה מתקדמים ואמינים תוך הקפדה על איכות בלתי מתפשרת, עמידה בלוחות זמנים ושירות אישי לכל לקוח.
          </p>
          <p className="text-lg leading-8 text-gray-700">
            בעל החברה הינו מהנדס בניין בעל התמחות בבדק בית, ניהול וביצוע פרויקטים בתחום הבנייה הפרטית והרחבות הבנייה. החברה מתמחה בתוספות בנייה כגון ממ"דים, הרחבות לבתים קיימים, בניית בתים פרטיים, עבודות שלד וגמר ברמה הגבוהה ביותר. אנו מלווים את הלקוחות משלב התכנון ועד למסירת המפתח, תוך הקפדה על מקצועיות, שקיפות וליווי אישי לאורך כל הדרך.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1200&auto=format&fit=crop"
          alt="Construction"
          className="rounded-3xl shadow-2xl object-cover h-[450px] w-full"
        />
      </section>

      {/* Services */}
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-14">השירותים שלנו</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'בניית בתים פרטיים',
                desc: 'ביצוע מלא של בניית בתים פרטיים באיכות גבוהה.',
              },
              {
                title: 'תוספות בנייה',
                desc: 'הרחבות, ממ"דים, קומות נוספות ותוספות לכל צורך.',
              },
              {
                title: 'שיפוצים וגמר',
                desc: 'שיפוץ דירות, עבודות גמר ועיצוב ברמה מקצועית.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition"
              >
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-700 leading-7">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <h2 className="text-4xl font-bold text-center mb-14">פרויקטים נבחרים</h2>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop',
            'https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1200&auto=format&fit=crop',
          ].map((img, index) => (
            <img
              key={index}
              src={img}
              alt="Project"
              className="rounded-3xl shadow-xl h-72 w-full object-cover hover:scale-105 transition duration-300"
            />
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="bg-gray-900 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">צור קשר</h2>
          <p className="text-xl text-gray-300 mb-10">
            לקבלת הצעת מחיר וייעוץ מקצועי ללא התחייבות
          </p>

          <div className="mb-8 text-lg text-gray-300 space-y-2">
            <p>טלפון: 058-455-4348</p>
            <p>אימייל: david014363@gmail.com</p>
          </div>

          {/* Smart WhatsApp Form */}
          <div className="bg-white text-black rounded-3xl p-8 shadow-2xl max-w-2xl mx-auto mb-10">
            <h3 className="text-3xl font-bold mb-6">השאירו פרטים ונחזור אליכם</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const form = e.target;
                const name = form.name.value;
                const phone = form.phone.value;
                const project = form.project.value;

                const message = `שלום עמשה ייזום ובנייה,%0Aאני ${name}%0Aטלפון: ${phone}%0Aסוג הפרויקט: ${project}`;
                window.open(`https://wa.me/972584554348?text=${message}`, '_blank');
              }}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="שם מלא"
                required
                className="w-full p-4 rounded-2xl border"
              />

              <input
                type="tel"
                name="phone"
                placeholder="טלפון"
                required
                className="w-full p-4 rounded-2xl border"
              />

              <select
                name="project"
                className="w-full p-4 rounded-2xl border"
              >
                <option>בניית בית פרטי</option>
                <option>תוספת בנייה</option>
                <option>ממ״ד</option>
                <option>שיפוץ</option>
                <option>בדק בית</option>
              </select>

              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-4 rounded-2xl transition"
              >
                שליחה ב‑WhatsApp
              </button>
            </form>
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <a
              href="tel:0584554348"
              className="bg-yellow-500 text-black font-bold px-8 py-4 rounded-2xl text-lg hover:bg-yellow-400 transition"
            >
              058-455-4348
            </a>

            <a
              href="https://wa.me/972584554348"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-8 py-4 rounded-2xl text-lg hover:bg-white hover:text-black transition"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}}
      <footer className="bg-black text-gray-400 text-center py-6 text-sm">
        © 2026 עמשה ייזום ובנייה | כל הזכויות שמורות
      </footer>
    </div>
  );
}
