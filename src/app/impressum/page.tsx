export default function Impressum() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-6 md:px-10 lg:px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
            <h1 className="mb-8 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Impressum</h1>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Angaben gemäß § 5 TMG</h2>
            <p className="mb-4">
              Saul Studio.<br />
              Manfred Saul<br />
              Ziegelofenweg 2a<br />
              67346 Speyer<br />
              Deutschland
            </p>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Kontakt</h2>
            <p className="mb-4">
              E-Mail: support@saulstudio.app
            </p>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Umsatzsteuer-ID</h2>
            <p className="mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE255603547
            </p>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
            <p className="mb-4">
              Manfred Saul<br />
              Ziegelofenweg 2a<br />
              67346 Speyer
            </p>
            <h2 className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">EU-Streitschlichtung</h2>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr/" className="text-indigo-600 hover:underline dark:text-indigo-500" target="_blank" rel="noreferrer">https://ec.europa.eu/consumers/odr/</a>.<br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
