"use client";

export default function Terms() {
  return (
    <section className="w-full bg-[#F9F8F2] py-14 px-5 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">

        {/* Terms of Service red header card */}
        <div className="bg-[#8F0101] text-white rounded-sm p-8">
          <p className="text-xs text-red-200 mb-2 italic">Terms of service ——</p>
          <h2 className="text-2xl font-bold mb-4">Terms of Service</h2>
          <p className="text-sm leading-relaxed text-red-100 mb-4">
            Welcome to BomiNuel Zobo Hibiscus ("BomiNuel," "we," "us," or "our"). By visiting our
            website, placing an order, signing up for email communications, or using any of our
            services, you agree to be bound by these Terms of Service ("Terms"). Please read them
            carefully. If you do not agree to these Terms, please do not use our website or purchase
            our products.
          </p>
          <p className="text-xs text-red-200 font-semibold">EFFECTIVE DATE: JUNE 2025</p>
          <p className="text-xs text-red-200">LOCATION: BRANTFORD, ONTARIO, CANADA</p>
        </div>

        {/* Email Communications & Privacy */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-3">Email Communications & Privacy</h3>
          <div className="mb-3">
            <p className="text-gray-700 font-semibold text-sm mb-1">1. Email Sign-Up</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              By submitting your email, you consent to receiving marketing and promotional communications
              from BomiNuel. You may unsubscribe at any time by clicking the unsubscribe link included in
              our emails or by contacting us directly.
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-semibold text-sm mb-1">2. Privacy</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              We collect, use, and disclose personal information in accordance with our Privacy Policy,
              which is incorporated into these Terms by reference. By using our website or placing an order,
              you consent to our data practices as described in our Privacy Policy.
            </p>
          </div>
        </div>

        {/* Intellectual Property */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-2">Intellectual Property</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            All content available on this website — including but not limited to the BomiNuel Zobo Hibiscus
            name, logos, trademarks, product names, descriptions, photography, graphics, written content,
            packaging, designs, and website design elements — is the property of BomiNuel and is protected
            under applicable copyright, trademark, and intellectual property laws.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            You may not reproduce, distribute, modify, publish, display, or use our content for commercial
            purposes without our express prior written consent.
          </p>
        </div>

        {/* Disclaimer of Warranties */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-2">Disclaimer of Warranties</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            Our products and website are provided on an "as is" and "as available" basis. To the fullest
            extent permitted by law, BomiNuel disclaims all warranties, express or implied, including but
            not limited to warranties or merchantability, fitness for a particular purpose, and non-infringement.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            Our beverages are not intended to diagnose, treat, cure, or prevent any disease or medical condition.
            Customers with dietary sensitivities, allergies, medical conditions, or health concerns should consult
            a qualified healthcare professional before consuming our products.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-2">Limitation of Liability</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            To the fullest extent permitted by applicable law, BomiNuel, its owners, directors, employees,
            contractors, and affiliates shall not be liable for any indirect, incidental, special, or
            consequential damages arising from or relating to the use of our products, website, or services,
            even if advised of the possibility of such damages.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            Our total liability for any claim arising from your purchase or use of our products shall not
            exceed the amount paid by you for the order giving rise to the claim.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Nothing in these Terms excludes liability that cannot be excluded under applicable law.
          </p>
        </div>

        {/* Indemnification */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-2">Indemnification</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            You agree to indemnify, defend, and hold harmless BomiNuel, its affiliates, owners, employees,
            contractors, and representatives from and against any claims, liabilities, damages, losses, costs,
            and expenses, including reasonable legal fees, arising from:
          </p>
          <ul className="text-gray-500 text-sm leading-relaxed space-y-1 ml-4">
            <li>• Your violation of these Terms;</li>
            <li>• Your misuse of our products or website; or</li>
            <li>• Your violation of any applicable laws or the rights of any third party.</li>
          </ul>
        </div>

        {/* Governing Law */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-2">Governing Law</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            These Terms shall be governed by and construed in accordance with the laws of the Province of
            Ontario and applicable therein. Any disputes arising from these Terms or your use of our products
            or services shall be subject to the exclusive jurisdiction of the courts located in Ontario,
            Canada, and you consent to the jurisdiction of those courts.
          </p>
        </div>

        {/* Force Majeure */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-2">Force Majeure</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            BomiNuel shall not be liable for any delay or failure to perform its obligations under these
            Terms where such delay or failure results from causes beyond our reasonable control, including
            but not limited to:
          </p>
          <ul className="text-gray-500 text-sm leading-relaxed space-y-1 ml-4 mb-2">
            <li>• Natural disasters;</li>
            <li>• Severe weather events;</li>
            <li>• Fire or flood;</li>
            <li>• Strikes, lockouts or sit-ins;</li>
            <li>• Government actions or regulatory changes;</li>
            <li>• Public health emergencies or pandemics;</li>
            <li>• Supply chain disruptions;</li>
            <li>• Transportation interruptions;</li>
            <li>• Utility outages; or</li>
            <li>• Third-party service provider failures.</li>
          </ul>
          <p className="text-gray-500 text-sm leading-relaxed">
            In such circumstances, our obligations will be suspended for the duration of the event affecting performance.
          </p>
        </div>

        {/* Changes to These Terms */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-2">Changes to These Terms</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            We may update these Terms from time to time to reflect changes to our business, services, legal
            requirements, or other reasons. The most current version will always be posted on our website with
            an updated effective date.
          </p>
          <p className="text-gray-500 text-sm leading-relaxed">
            Your continued use of our services following the posting of revised Terms constitutes your acceptance
            of those changes.
          </p>
        </div>

      </div>
    </section>
  );
}