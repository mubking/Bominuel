"use client";

export default function Policy() {
  return (
    <section className="w-full bg-[#F9F8F2] py-14 px-5 min-h-screen">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">

        {/* Policy red header card */}
        <div className="bg-[#8F0101] text-white rounded-sm p-8">
          <p className="text-xs text-red-200 mb-2 italic">Terms & Conditions ——</p>
          <h2 className="text-2xl font-bold mb-4">Policy</h2>
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

        {/* Shipping Policy */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-2">Shipping Policy</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            Standard delivery within Brantford: 1–2 business days. Event orders: minimum 5 days'
            notice. Delivery fees calculated at checkout.
          </p>
        </div>

        {/* Privacy Policy */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-2">Privacy Policy</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            We only collect what we need (name, email address, payment info) to get your Zobo to you.
            We do not sell your data.
          </p>
        </div>

        {/* About BomiNuel Zobo Hibiscus */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-2">About Bominuel Zobo Hibiscus</h3>
          <p className="text-gray-500 text-sm leading-relaxed">
            BomiNuel Zobo Hibiscus is a bottled hibiscus beverage brand rooted in Nigerian tradition
            and crafted in Brantford, Ontario, Canada.
          </p>
        </div>

        {/* Eligibility */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-2">Eligibility</h3>
          <p className="text-gray-500 text-sm leading-relaxed mb-2">
            By using our website or placing an order, you confirm that you are:
          </p>
          <ul className="text-gray-500 text-sm leading-relaxed space-y-1">
            <li>• At least 18 years of age, or accessing the site under the supervision of a parent or legal guardian.</li>
            <li>• Legally able to enter into a binding contract in your jurisdiction.</li>
            <li>• Not prohibited from purchasing or receiving our products under any applicable law.</li>
          </ul>
        </div>

        {/* Products */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-3">Products</h3>
          <div className="mb-3">
            <p className="text-gray-700 font-semibold text-sm mb-1">1. Product Description</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              We make every effort to display our products accurately. Colours, packaging, product
              availability from images shown on our website.
            </p>
          </div>
          <div className="mb-3">
            <p className="text-gray-700 font-semibold text-sm mb-1">2. Availability</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              All products are subject to availability. We reserve the right to limit quantities,
              discontinue products, or change prices at any time without notice.
            </p>
          </div>
          <div className="mb-3">
            <p className="text-gray-700 font-semibold text-sm mb-1">3. Food Safety</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Our beverages are prepared in accordance with applicable Canadian food safety requirements.
              All follow all storage instructions provided on the product label. Products should be
              refrigerated immediately upon receipt and consumed by the expiry or best-before date listed.
              Failure to follow storage instructions may affect product quality and safety. BomiNuel is not
              responsible for improper handling, storage, unattended deliveries, or extended delays caused
              by the recipient or carrier.
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-semibold text-sm mb-1">4. Allergen Notice</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              While we take reasonable precautions during preparation, our products may be produced in
              facilities that cause allergic reactions. Customers with food allergies, sensitivities, or
              dietary concerns should review and contact us before consumption if they have any questions.
            </p>
          </div>
        </div>

        {/* Orders & Payments */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-3">Orders & Payments</h3>
          <div className="mb-3">
            <p className="text-gray-700 font-semibold text-sm mb-1">1. Placing an Order</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              By submitting an order, you are making an offer to purchase the selected products. We reserve
              the right to accept, decline, or cancel any order at our sole discretion, including after a
              confirmation email has been sent.
            </p>
          </div>
          <div className="mb-3">
            <p className="text-gray-700 font-semibold text-sm mb-1">2. Pricing</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              All prices are listed in Canadian Dollars (CAD) unless otherwise stated and are subject to
              applicable taxes. We reserve the right to update pricing at any time. Price changes will not
              affect orders already confirmed.
            </p>
          </div>
          <div className="mb-3">
            <p className="text-gray-700 font-semibold text-sm mb-1">3. Payment</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Payment is due at the time of order. We accept major credit cards and other payment methods
              as listed at checkout. All transactions are processed through secure third-party payment processors.
            </p>
          </div>
          <div className="mb-3">
            <p className="text-gray-700 font-semibold text-sm mb-1">4. Promotional Offers</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              From time to time, we may offer promotions, including a complimentary bottle on your first order
              when you sign up with your email. Participation in promotional offers and email subscription
              programs is voluntary. Unless otherwise stated, promotional offers are limited to one redemption
              per customer, household, or email address and may not be combined with other offers. We reserve
              the right to modify, suspend, or discontinue promotions at any time without prior notice.
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-semibold text-sm mb-1">5. Website Errors</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              While we strive to ensure that all product descriptions, pricing, promotional information, and
              other content on our website are accurate, errors may occasionally occur. We reserve the right
              to correct any errors, inaccuracies, or omissions and to cancel or refuse orders arising from
              such errors, including after an order has been submitted.
            </p>
          </div>
        </div>

        {/* Shipping & Delivery */}
        <div>
          <h3 className="text-gray-900 font-bold text-base mb-3">Shipping & Delivery</h3>
          <div className="mb-3">
            <p className="text-gray-700 font-semibold text-sm mb-1">1. Shipping</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              We currently ship within Canada and may offer international shipping to select destinations
              where permitted by applicable laws and regulations. Availability of international shipping
              may change without notice. Shipping timelines provided are estimates only and are not
              guaranteed. BomiNuel is not responsible for delays caused by carriers, customs authorities,
              weather conditions, supply chain disruptions, or other circumstances beyond our reasonable control.
            </p>
          </div>
          <div className="mb-3">
            <p className="text-gray-700 font-semibold text-sm mb-1">2. Risk of Loss</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Risk of loss and title for purchased products pass to you upon transfer of the products to
              the shipping carrier. If your order is lost or damaged during transit, please contact us
              promptly. We will work with you and the carrier to resolve the issue; final resolution may
              be subject to carrier policies and procedures.
            </p>
          </div>
          <div className="mb-3">
            <p className="text-gray-700 font-semibold text-sm mb-1">3. Risk of Loss</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              For orders shipped outside Canada, you are responsible for any import duties, customs fees,
              taxes, or other charges imposed by your country. BomiNuel is not liable for delays, refusals,
              product seizures, or additional charges resulting from customs processes or international regulations.
            </p>
          </div>
          <div>
            <p className="text-gray-700 font-semibold text-sm mb-1">4. Delivery Requirements</p>
            <p className="text-gray-500 text-sm leading-relaxed">
              Customers are responsible for ensuring that someone is available to receive perishable
              deliveries at the shipping address provided. BomiNuel is not responsible for product
              deterioration, spoilage, or quality issues resulting from unattended deliveries, delayed
              retrieval of delivered packages, or incorrect shipping information provided by the customer.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}