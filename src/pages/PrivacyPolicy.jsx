import React from "react";
import {
  FiShield,
  FiLock,
  FiDatabase,
  FiMail,
  FiHome,
  FiPhone,
  FiFileText,
  FiActivity,
  FiShare2,
  FiUserCheck,
} from "react-icons/fi";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-[1200px] mx-auto  overflow-hidden">
          {/* Header Section */}
          <div className="p-8 text-center">
            <FiLock className="text-4xl mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
            <p className="opacity-90">
              Last updated:{" "}
              {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12">
            <div className="prose max-w-none">
              <section className="mb-12">
                <div className="flex items-start mb-8">
                  <FiShield className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-gray-600 mb-4">
                      At WorldMarketView, we are dedicated to providing secure,
                      transparent, and efficient investment services. As a
                      mutual funds company, we prioritize the confidentiality of
                      your information. We believe in being open and transparent
                      about how we collect and handle your personal data.
                    </p>
                    <p className="text-gray-600">
                      Our goal is to maintain a trusted relationship with our
                      clients, and this policy helps to achieve that by
                      clarifying our practices concerning data privacy and
                      security.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiFileText className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      2. About This Privacy Policy
                    </h2>
                    <p className="text-gray-600 mb-4">
                      This Privacy Policy applies to all visitors of our
                      website, users of our services, and clients who invest in
                      mutual funds through WorldMarketView. We value your trust
                      and are committed to ensuring that your personal
                      information is protected.
                    </p>
                    <p className="text-gray-600 mb-2">
                      Please refer to the detailed explanation below:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                      <li>
                        <strong>Types of Information Collected:</strong> The
                        kinds of information we gather and why we gather it.
                      </li>
                      <li>
                        <strong>How We Use Your Information:</strong> How we
                        process and utilize the information collected to improve
                        your experience.
                      </li>
                      <li>
                        <strong>Data Protection Measures:</strong> The steps we
                        take to keep your information safe.
                      </li>
                      <li>
                        <strong>Your Rights:</strong> The control you have over
                        your personal information.
                      </li>
                      <li>
                        <strong>Third-Party Sharing:</strong> The circumstances
                        under which we may share your data with others.
                      </li>
                      <li>
                        <strong>Legal Compliance:</strong> How we comply with
                        relevant laws and regulations.
                      </li>
                    </ul>
                    <p className="text-gray-600">
                      By using our services or visiting our website, you
                      acknowledge and agree to the practices outlined in this
                      Privacy Policy.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiDatabase className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      3. Information We Collect
                    </h2>
                    <p className="text-gray-600 mb-4">
                      We collect both personal and non-personal information to
                      enhance your experience with WorldMarketView and provide
                      the services you need.
                    </p>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Personal Information
                    </h3>
                    <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
                      <li>Full Name</li>
                      <li>Email Address</li>
                      <li>Phone Number</li>
                      <li>Residential Address</li>
                      <li>Financial Information (income, investments, etc.)</li>
                      <li>Government-issued Identification Numbers</li>
                    </ul>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Non-Personal Information
                    </h3>
                    <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                      <li>
                        <strong>Cookies and Tracking Data:</strong> Information
                        collected via cookies to track your activity on our site
                      </li>
                      <li>
                        <strong>Usage Data:</strong> Data related to your
                        interactions with our website
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiActivity className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      4. How We Use Your Information
                    </h2>
                    <p className="text-gray-600 mb-4">
                      We use your information for several important purposes,
                      including providing services and maintaining a secure
                      environment.
                    </p>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Service Delivery
                    </h3>
                    <p className="text-gray-600 mb-2">
                      We use your personal information to:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
                      <li>Open and manage your mutual fund accounts</li>
                      <li>Process transactions and investment requests</li>
                      <li>Provide tailored investment advice</li>
                      <li>Send transaction confirmations and updates</li>
                    </ul>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Communication and Marketing
                    </h3>
                    <p className="text-gray-600 mb-2">
                      We may use your contact details to:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
                      <li>Send newsletters and updates</li>
                      <li>Share offers and new services (with consent)</li>
                    </ul>
                    <p className="text-gray-600 mb-6">
                      You can opt out of marketing communications at any time.
                    </p>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Legal and Regulatory Compliance
                    </h3>
                    <p className="text-gray-600 mb-2">
                      We may use or disclose your information to:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Meet legal obligations</li>
                      <li>Verify your identity per AML regulations</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiLock className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      5. How We Protect Your Information
                    </h2>
                    <p className="text-gray-600 mb-4">
                      WorldMarketView takes security seriously. We implement
                      advanced measures to protect your information from
                      unauthorized access or misuse.
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                      <li>
                        <strong>Data Encryption:</strong> We use encryption
                        protocols for sensitive data transmission
                      </li>
                      <li>
                        <strong>Secure Infrastructure:</strong> Hosted on secure
                        servers with restricted access
                      </li>
                      <li>
                        <strong>Regular Security Audits:</strong> Continuous
                        monitoring and vulnerability testing
                      </li>
                      <li>
                        <strong>Limited Access:</strong> Only authorized
                        personnel can access your information
                      </li>
                    </ul>
                    <p className="text-gray-600">
                      While we take extensive steps to protect your data, no
                      system is completely invulnerable, and we strive to ensure
                      the highest level of protection possible.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiShare2 className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      6. Sharing Your Information
                    </h2>
                    <p className="text-gray-600 mb-4">
                      We value your privacy and will not sell, rent, or trade
                      your personal information to third parties. However, we
                      may share your information under certain circumstances:
                    </p>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Service Providers
                    </h3>
                    <p className="text-gray-600 mb-2">
                      We may share with trusted third-party providers:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
                      <li>Payment processors</li>
                      <li>Investment advisors</li>
                      <li>IT support and data hosting companies</li>
                    </ul>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Legal and Regulatory Disclosure
                    </h3>
                    <p className="text-gray-600 mb-2">
                      We may disclose your information for:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
                      <li>Compliance with regulatory bodies</li>
                      <li>Responding to legal actions</li>
                    </ul>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Business Transfers
                    </h3>
                    <p className="text-gray-600">
                      In the event that WorldMarketView is involved in a merger,
                      acquisition, or asset sale, your personal information may
                      be transferred as part of the transaction.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiUserCheck className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      7. Your Rights and Choices
                    </h2>
                    <p className="text-gray-600 mb-4">
                      As a client of WorldMarketView, you have certain rights
                      regarding your personal data:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                      <li>
                        <strong>Access and Correction:</strong> Request access
                        to or correction of your information
                      </li>
                      <li>
                        <strong>Data Deletion:</strong> Request deletion,
                        subject to legal obligations
                      </li>
                      <li>
                        <strong>Opt-Out of Marketing:</strong> Unsubscribe from
                        marketing communications
                      </li>
                      <li>
                        <strong>Cookie Preferences:</strong> Manage cookies
                        through browser settings
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    8. Children's Privacy
                  </h2>
                  <p className="text-gray-600">
                    WorldMarketView does not knowingly collect personal
                    information from individuals under the age of 18. If we
                    become aware that we have unintentionally collected such
                    information, we will take immediate steps to delete it.
                  </p>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    9. Updates to This Privacy Policy
                  </h2>
                  <p className="text-gray-600">
                    We may update this Privacy Policy from time to time. Any
                    significant changes will be communicated by updating the
                    "Effective Date", or we may notify you through other means.
                  </p>
                </div>

                <div className="flex items-start mb-8">
                  <FiMail className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">10. Contact Us</h2>
                    <p className="text-gray-600 mb-4">
                      If you have any questions or concerns about this Privacy
                      Policy, or if you would like to exercise any of your
                      rights, please contact us at:
                    </p>
                    <div className="flex items-start mb-3">
                      <FiMail className="text-gray-600 mt-1 mr-3" />
                      <span>info@worldmarketview.com</span>
                    </div>
                    <div className="flex items-start mb-3">
                      <FiPhone className="text-gray-600 mt-1 mr-3" />
                      <span>+91 9888031436</span>
                    </div>
                    <div className="flex items-start">
                      <FiHome className="text-gray-600 mt-1 mr-3" />
                      <span>
                        First-floor, SCO 52, Sector 82, JLPL Industrial Area,
                        Sahibzada Ajit Singh Nagar, Punjab 140308
                      </span>
                    </div>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">11. Conclusion</h2>
                  <p className="text-gray-600">
                    Your privacy is important to us at WorldMarketView, and we
                    are committed to protecting your personal information. We
                    believe in transparency and are dedicated to providing a
                    safe and secure environment for your financial transactions.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PrivacyPolicy;
