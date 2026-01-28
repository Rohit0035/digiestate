"use client";

import { Container } from "reactstrap";

const PrivacyPolicy = () => {
  return (
    <Container className="py-5">

      {/* HEADER */}
      <div>
        <h2 className="fw-bold mb-2">Privacy Policy</h2>
        <p className="text-muted mb-4">
          <strong>Last Updated:</strong> 18 November 2025
        </p>
      </div>

      {/* INTRO */}
      <p>
        Welcome to <strong>DigiEstate GroupRealty Services Limited</strong>.  
        We value your trust and are committed to protecting your personal information.  
        This Privacy Policy explains how your data is collected, used, stored, 
        and safeguarded when you use our website, mobile app, or any associated services.
      </p>

      {/* SECTION 1 */}
      <div>
        <h4 className="mt-4 fw-semibold">1. Information We Collect</h4>
        <p>We collect the following types of information:</p>

        <ul>
          <li><strong>Personal Information:</strong> Name, phone, email, city, preferences.</li>
          <li><strong>Account Data:</strong> Saved properties, enquiries, subscriptions.</li>
          <li><strong>Technical Data:</strong> IP, device info, browser type, usage statistics.</li>
          <li><strong>Location Data:</strong> City/locality preferences (if provided).</li>
          <li><strong>Communication Data:</strong> Chats, enquiries, support messages.</li>
        </ul>
      </div>

      {/* SECTION 2 */}
      <div>
        <h4 className="mt-4 fw-semibold">2. How We Use Your Information</h4>
        <p>Your information helps us improve your experience. We use it to:</p>

        <ul>
          <li>Provide personalised property recommendations.</li>
          <li>Respond to enquiries and customer support.</li>
          <li>Send alerts, updates, and newsletters.</li>
          <li>Improve search results and algorithms.</li>
          <li>Analyse user behaviour to enhance performance.</li>
          <li>Prevent fraud and unauthorised access.</li>
        </ul>
      </div>

      {/* SECTION 3 */}
      <div>
        <h4 className="mt-4 fw-semibold">3. Sharing of Your Information</h4>
        <p>We may share your data with:</p>

        <ul>
          <li><strong>Verified Agents/Builders:</strong> Only when you submit an enquiry.</li>
          <li><strong>Service Providers:</strong> SMS, email, analytics, hosting.</li>
          <li><strong>Legal Authorities:</strong> If required by law or court order.</li>
        </ul>

        <p><strong>We do not sell your personal information to anyone.</strong></p>
      </div>

      {/* SECTION 4 */}
      <div>
        <h4 className="mt-4 fw-semibold">4. Cookies & Tracking</h4>
        <p>
          We use cookies to enhance your experience, save preferences, and improve property recommendations.
        </p>
        <p>You may disable cookies, but some features may not work properly.</p>
      </div>

      {/* SECTION 5 */}
      <div>
        <h4 className="mt-4 fw-semibold">5. Data Security</h4>
        <p>We use strong security measures to safeguard your information:</p>

        <ul>
          <li>SSL encryption</li>
          <li>Secure servers & firewalls</li>
          <li>Restricted data access</li>
          <li>Regular security audits</li>
        </ul>

        <p>No online platform can guarantee 100% security, but we follow industry best practices.</p>
      </div>

      {/* SECTION 6 */}
      <div>
        <h4 className="mt-4 fw-semibold">6. Your Rights</h4>
        <p>You can:</p>

        <ul>
          <li>Access your data</li>
          <li>Request corrections</li>
          <li>Request deletion</li>
          <li>Opt-out of marketing</li>
          <li>Deactivate your account</li>
        </ul>
      </div>

      {/* SECTION 7 */}
      <div>
        <h4 className="mt-4 fw-semibold">7. Third-Party Links</h4>
        <p>
          We may link to third-party websites, but we are not responsible for their policies or content.
        </p>
      </div>

      {/* SECTION 8 */}
      <div>
        <h4 className="mt-4 fw-semibold">8. Children's Privacy</h4>
        <p>
          Our services are not intended for anyone under 18.  
          We do not knowingly collect information from minors.
        </p>
      </div>

      {/* SECTION 9 */}
      <div>
        <h4 className="mt-4 fw-semibold">9. Policy Updates</h4>
        <p>
          We may update this policy from time to time.  
          The latest version will always be available here.
        </p>
      </div>

      {/* CONTACT */}
      <div>
        <h4 className="mt-4 fw-semibold">10. Contact Us</h4>
        <p>For any privacy-related questions, contact:</p>

        <p>Email: <strong>support@smartmind.com</strong></p>
        <p>Phone: <strong>+91-XXXXXXXXXX</strong></p>
      </div>

    </Container>
  );
};

export default PrivacyPolicy;
