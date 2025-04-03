import React from "react";
import {
  FiFileText,
  FiUser,
  FiLock,
  FiDollarSign,
  FiShield,
  FiAlertTriangle,
  FiMail,
  FiPhone,
  FiHome,
} from "react-icons/fi";

const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <main className="container mx-auto px-3 py-12">
        <div className="max-w-[1200px] mx-auto  overflow-hidden">
          {/* Header Section */}
          <div className="p-8 text-center">
            <FiFileText className="text-4xl mx-auto mb-4" />
            <h1 className="text-3xl font-bold mb-2">Terms and Conditions</h1>
            <p className="opacity-90">Effective Date: February 1, 2025</p>
          </div>

          {/* Content Section */}
          <div className="p-8 md:p-12">
            <div className="prose max-w-none">
              <section className="mb-12">
                <div className="flex items-start mb-8">
                  <FiFileText className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
                    <p className="text-gray-600 mb-4">
                      WorldMarketView is a platform designed to provide you with
                      exceptional investment opportunities in mutual funds.
                      These Terms & Conditions outline the rules and guidelines
                      for using our website and services.
                    </p>
                    <p className="text-gray-600">
                      By accessing or using our website, creating an account, or
                      investing through WorldMarketView, you agree to comply
                      with and be bound by these terms. Please read these terms
                      carefully.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiUser className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      2. Acceptance of Terms
                    </h2>
                    <p className="text-gray-600">
                      By accessing or using the WorldMarketView website and
                      services, you acknowledge that you have read, understood,
                      and agree to comply with these Terms & Conditions. These
                      terms constitute a legal agreement between you (the
                      "User") and WorldMarketView (the "Company").
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiShield className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">3. Eligibility</h2>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Age Requirement
                    </h3>
                    <p className="text-gray-600 mb-4">
                      To use WorldMarketView's services, you must be at least 18
                      years of age to enter into a binding contract.
                    </p>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Authorized Use
                    </h3>
                    <p className="text-gray-600">
                      You must use WorldMarketView's website and services for
                      lawful purposes only. You agree not to use the platform
                      for any illegal, fraudulent, or unauthorized activities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiLock className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      4. Account Registration and Security
                    </h2>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Creating an Account
                    </h3>
                    <p className="text-gray-600 mb-2">
                      To access certain features of our platform, you must
                      register for an account. During registration, you will
                      need to provide:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-4 space-y-2">
                      <li>Full Name</li>
                      <li>Email Address</li>
                      <li>Phone Number</li>
                      <li>Financial and Investment Preferences</li>
                    </ul>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Account Security
                    </h3>
                    <p className="text-gray-600">
                      You are responsible for maintaining the confidentiality of
                      your account credentials. You agree to immediately notify
                      WorldMarketView if you suspect any unauthorized use of
                      your account.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiDollarSign className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      5. Services Provided
                    </h2>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Mutual Fund Investments
                    </h3>
                    <p className="text-gray-600 mb-2">
                      WorldMarketView provides access to a wide range of mutual
                      funds, allowing you to:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
                      <li>Browse and select mutual funds</li>
                      <li>Track investment performance</li>
                      <li>Make investments via lump sum or SIP</li>
                    </ul>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Investment Advice
                    </h3>
                    <p className="text-gray-600">
                      WorldMarketView may offer general investment advice and
                      recommendations. However, the information provided is not
                      intended as professional financial advice.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiDollarSign className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      6. Fees and Charges
                    </h2>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Investment Charges
                    </h3>
                    <p className="text-gray-600 mb-2">
                      While there are no registration fees, investing in mutual
                      funds may involve:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 mb-6 space-y-2">
                      <li>
                        Expense Ratio: The fee for managing the mutual fund
                      </li>
                      <li>
                        Transaction Fees: Applied for certain fund transactions
                      </li>
                      <li>Exit Load: A fee charged for early withdrawals</li>
                    </ul>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Changes in Fees
                    </h3>
                    <p className="text-gray-600">
                      WorldMarketView reserves the right to change its fee
                      structure at any time. Any changes will be communicated to
                      users in advance.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiAlertTriangle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      7. User Obligations
                    </h2>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Accurate Information
                    </h3>
                    <p className="text-gray-600 mb-4">
                      You agree to provide true, accurate, current, and complete
                      information during the registration process.
                    </p>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Use of Website
                    </h3>
                    <p className="text-gray-600 mb-2">
                      You must not engage in activities that could harm the
                      website or disrupt other users' experience, such as:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Hacking</li>
                      <li>Spamming</li>
                      <li>Uploading malware</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiFileText className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      8. Intellectual Property
                    </h2>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Ownership
                    </h3>
                    <p className="text-gray-600 mb-4">
                      The content, design, logos, and software on the
                      WorldMarketView website are owned by WorldMarketView or
                      its licensors. All rights are reserved.
                    </p>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      User Content
                    </h3>
                    <p className="text-gray-600">
                      By using the website, you may submit content such as
                      feedback or reviews. You grant WorldMarketView a
                      worldwide, royalty-free license to use this content.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiLock className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      9. Privacy and Data Protection
                    </h2>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Collection of Personal Data
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We collect personal and financial information as part of
                      the account creation and investment process.
                    </p>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Data Protection
                    </h3>
                    <p className="text-gray-600">
                      Your data will be handled in accordance with our Privacy
                      Policy. By using WorldMarketView's services, you consent
                      to the collection and processing of your data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiAlertTriangle className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      10. Disclaimers and Limitation of Liability
                    </h2>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      No Guarantee of Investment Returns
                    </h3>
                    <p className="text-gray-600 mb-4">
                      WorldMarketView does not guarantee any specific investment
                      returns. Mutual fund investments are subject to market
                      risks.
                    </p>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Limitation of Liability
                    </h3>
                    <p className="text-gray-600 mb-2">
                      To the fullest extent permitted by law, WorldMarketView is
                      not liable for any damages arising from the use of the
                      website or services, including:
                    </p>
                    <ul className="list-disc pl-5 text-gray-600 space-y-2">
                      <li>Loss of data</li>
                      <li>Financial losses</li>
                      <li>Technical disruptions</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiUser className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      11. Termination of Account
                    </h2>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Voluntary Termination
                    </h3>
                    <p className="text-gray-600 mb-4">
                      You may terminate your account at any time by contacting
                      WorldMarketView customer support.
                    </p>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Termination by WorldMarketView
                    </h3>
                    <p className="text-gray-600">
                      WorldMarketView reserves the right to suspend or terminate
                      your account if you violate these Terms & Conditions or
                      engage in illegal activities.
                    </p>
                  </div>
                </div>

                <div className="flex items-start mb-8">
                  <FiShield className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">
                      12. Governing Law and Dispute Resolution
                    </h2>
                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Governing Law
                    </h3>
                    <p className="text-gray-600 mb-4">
                      These Terms & Conditions are governed by the laws of
                      India.
                    </p>

                    <h3 className="text-xl font-bold mb-3 text-gray-800">
                      Dispute Resolution
                    </h3>
                    <p className="text-gray-600">
                      In case of any disputes, we encourage you to first contact
                      WorldMarketView customer support. If unresolved, the
                      matter will be subject to binding arbitration.
                    </p>
                  </div>
                </div>

                <div className="mb-8">
                  <h2 className="text-2xl font-bold mb-4">
                    13. Amendments to Terms
                  </h2>
                  <p className="text-gray-600">
                    WorldMarketView reserves the right to modify these Terms &
                    Conditions at any time. Any changes will be posted on this
                    page with an updated "Effective Date".
                  </p>
                </div>

                <div className="flex items-start">
                  <FiMail className="text-blue-600 mt-1 mr-3 flex-shrink-0" />
                  <div>
                    <h2 className="text-2xl font-bold mb-4">14. Contact Us</h2>
                    <p className="text-gray-600 mb-4">
                      If you have any questions regarding these Terms &
                      Conditions:
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
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default TermsAndConditions;
