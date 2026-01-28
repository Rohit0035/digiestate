"use client";

import { Container } from "reactstrap";

const TermsConditions = () => {
  return (
    <Container className="py-5">

      {/* HEADER */}
      <div>
        <h2 className="fw-bold mb-2">Terms & Conditions</h2>
        <p className="text-muted mb-4">
          <strong>Last Updated:</strong> 18 November 2025
        </p>
      </div>

      {/* INTRO */}
      <p>
        Welcome to <strong>DigiEstate GroupRealty Services Limited</strong>.  
        By accessing or using our website, mobile app, or any associated services,  
        you agree to comply with the following Terms & Conditions.  
        Please read them carefully.
      </p>

      {/* SECTION 1 */}
      <div>
        <h4 className="mt-4 fw-semibold">1. Acceptance of Terms</h4>
        <p>
          By using our platform, you agree to these Terms & Conditions and our Privacy Policy.  
          If you do not agree, please stop using the website immediately.
        </p>
      </div>

      {/* SECTION 2 */}
      <div>
        <h4 className="mt-4 fw-semibold">2. Eligibility</h4>
        <p>
          You must be at least 18 years old to use our services.  
          By using the platform, you confirm that you meet this requirement.
        </p>
      </div>

      {/* SECTION 3 */}
      <div>
        <h4 className="mt-4 fw-semibold">3. Use of Our Platform</h4>
        <p>
          You agree to use our website and services only for lawful purposes.  
          You must not:
        </p>

        <ul>
          <li>Post false or misleading property information.</li>
          <li>Attempt to hack, modify, or disrupt our platform.</li>
          <li>Impersonate any person or submit fraudulent enquiries.</li>
          <li>Use automated bots or scripts without permission.</li>
        </ul>
      </div>

      {/* SECTION 4 */}
      <div>
        <h4 className="mt-4 fw-semibold">4. Property Listings & Data Accuracy</h4>
        <p>
          While we aim to provide accurate property information, we do not guarantee:
        </p>

        <ul>
          <li>Availability of properties</li>
          <li>Accuracy of pricing or area details</li>
          <li>Verification of third-party information provided by agents or builders</li>
        </ul>

        <p>
          Users should independently verify all details before making decisions.
        </p>
      </div>

      {/* SECTION 5 */}
      <div>
        <h4 className="mt-4 fw-semibold">5. User Accounts</h4>
        <p>
          When creating an account, you agree to:
        </p>

        <ul>
          <li>Provide accurate and updated information</li>
          <li>Maintain confidentiality of your login details</li>
          <li>Be responsible for all activities under your account</li>
        </ul>
      </div>

      {/* SECTION 6 */}
      <div>
        <h4 className="mt-4 fw-semibold">6. Third-Party Services</h4>
        <p>
          We may link to external websites, builders, or partner platforms.  
          We are not responsible for their:
        </p>

        <ul>
          <li>Content</li>
          <li>Security</li>
          <li>Business practices</li>
          <li>Terms or privacy policies</li>
        </ul>
      </div>

      {/* SECTION 7 */}
      <div>
        <h4 className="mt-4 fw-semibold">7. Intellectual Property</h4>
        <p>
          All content—logos, images, text, graphics, and code—belong to  
          <strong>DigiEstate GroupRealty Services Limited</strong>.  
          You may not copy, distribute, or reproduce any content without permission.
        </p>
      </div>

      {/* SECTION 8 */}
      <div>
        <h4 className="mt-4 fw-semibold">8. Limitation of Liability</h4>
        <p>
          We are not liable for any:
        </p>

        <ul>
          <li>Financial loss</li>
          <li>Property purchase/sale disputes</li>
          <li>Incorrect information from third-party listings</li>
          <li>Technical issues, outages, or system errors</li>
        </ul>

        <p>
          Users are responsible for verifying property information before acting on it.
        </p>
      </div>

      {/* SECTION 9 */}
      <div>
        <h4 className="mt-4 fw-semibold">9. Termination of Access</h4>
        <p>
          We reserve the right to suspend or terminate user accounts that:
        </p>

        <ul>
          <li>Violate our Terms</li>
          <li>Submit fraudulent data</li>
          <li>Cause harm to our platform or other users</li>
        </ul>
      </div>

      {/* SECTION 10 */}
      <div>
        <h4 className="mt-4 fw-semibold">10. Updates to These Terms</h4>
        <p>
          We may revise these Terms at any time.  
          Updated versions will be posted on this page with the updated date.
        </p>
      </div>

      {/* CONTACT */}
      <div>
        <h4 className="mt-4 fw-semibold">11. Contact Us</h4>
        <p>If you have questions about these Terms, contact us:</p>

        <p>Email: <strong>support@smartmind.com</strong></p>
        <p>Phone: <strong>+91-XXXXXXXXXX</strong></p>
      </div>

    </Container>
  );
};

export default TermsConditions;
