export default function Impressum() {
  return (
    <div className="bg-white py-24 sm:py-32 dark:bg-gray-900">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl dark:text-white">
          Legal Notice
        </h1>
        <article className="prose prose-lg prose-indigo mt-10 dark:prose-invert">
          <h2>Information pursuant to § 5 TMG</h2>
          <p>
            Saul Studio.
            <br />
            Manfred Saul
            <br />
            Ziegelofenweg 2a
            <br />
            67346 Speyer
            <br />
            Germany
          </p>

          <h2>Contact</h2>
          <p>
            Email:{" "}
            <a href="mailto:support@saulstudio.app">support@saulstudio.app</a>
          </p>

          <h2>VAT ID</h2>
          <p>
            Value Added Tax Identification Number pursuant to Section 27a of the German Value Added Tax Act:
            <br />
            DE255603547
          </p>

          <h2>Responsible for content according to § 55 para. 2 RStV</h2>
          <p>
            Manfred Saul
            <br />
            Ziegelofenweg 2a
            <br />
            67346 Speyer
          </p>

          <h2>EU Dispute Resolution</h2>
          <p>
            The European Commission provides a platform for online dispute resolution (ODR):{" "}
            <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a>
            .
            <br />
            Our email address can be found above in this legal notice.
          </p>
        </article>
      </div>
    </div>
  );
}
