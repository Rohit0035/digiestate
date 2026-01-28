"use client";

import { Container } from "reactstrap";

const WhistleBlowerPolicy = () => {
  return (
    <Container className="py-5">

      {/* HEADER */}
      <div>
        <h2 className="fw-bold mb-2">Whistle Blower Policy</h2>
        <p className="text-muted mb-4">
          <strong>Last Updated:</strong> 18 November 2025
        </p>
      </div>

      {/* INTRO */}
      <p>
        <strong>DigiEstate GroupRealty Services Limited</strong> is committed to maintaining
        the highest standards of ethics, integrity, and transparency.  
        This Whistle Blower Policy provides a safe and confidential platform
        for employees, partners, customers, and stakeholders to report
        concerns about unethical practices, misconduct, violations of law,
        or company policies.
      </p>

      {/* SECTION 1 */}
      <div>
        <h4 className="mt-4 fw-semibold">1. Purpose of the Policy</h4>
        <p>This policy aims to:</p>
        <ul>
          <li>Encourage individuals to report genuine concerns.</li>
          <li>Provide protection against retaliation.</li>
          <li>Ensure transparent investigation mechanisms.</li>
          <li>Maintain ethical business standards across the organisation.</li>
        </ul>
      </div>

      {/* SECTION 2 */}
      <div>
        <h4 className="mt-4 fw-semibold">2. Who Can Report?</h4>
        <p>The following individuals may raise concerns:</p>
        <ul>
          <li>Employees (full-time, part-time, contractual)</li>
          <li>Customers & property buyers</li>
          <li>Channel partners, agents, and builders</li>
          <li>Vendors, consultants, or service providers</li>
          <li>Any external stakeholder associated with our business</li>
        </ul>
      </div>

      {/* SECTION 3 */}
      <div>
        <h4 className="mt-4 fw-semibold">3. What Can Be Reported?</h4>
        <p>You may report any activity that is unethical or violates company policy, including:</p>
        <ul>
          <li>Fraud, corruption, or bribery</li>
          <li>Financial irregularities or misuse of company assets</li>
          <li>Violation of legal or regulatory requirements</li>
          <li>Misrepresentation of property information</li>
          <li>Harassment, discrimination, or abuse of authority</li>
          <li>Data privacy violations or misuse of customer information</li>
          <li>Any activity that harms the company's reputation</li>
        </ul>
      </div>

      {/* SECTION 4 */}
      <div>
        <h4 className="mt-4 fw-semibold">4. Reporting Process</h4>
        <p>Concerns may be reported through any of the following channels:</p>
        <ul>
          <li><strong>Email:</strong> compliance@smartmind.com</li>
          <li><strong>Phone:</strong> +91-XXXXXXXXXX</li>
          <li><strong>Written Report:</strong> Submitted directly to the Compliance Officer</li>
        </ul>

        <p>
          The report should include as much detail as possible to help with the investigation.
        </p>
      </div>

      {/* SECTION 5 */}
      <div>
        <h4 className="mt-4 fw-semibold">5. Confidentiality</h4>
        <p>
          All reports will be handled confidentially.  
          The identity of the whistle blower will not be disclosed unless:
        </p>
        <ul>
          <li>Required by law, or</li>
          <li>Necessary for proper investigation</li>
        </ul>
        <p>
          Anonymous reporting is allowed, but providing contact details helps in effective investigation.
        </p>
      </div>

      {/* SECTION 6 */}
      <div>
        <h4 className="mt-4 fw-semibold">6. Protection Against Retaliation</h4>
        <p>
          Whistle blowers acting in good faith are protected from retaliation such as:
        </p>
        <ul>
          <li>Termination or demotion</li>
          <li>Harassment or intimidation</li>
          <li>Discrimination in any form</li>
        </ul>

        <p>
          Any employee found retaliating will face disciplinary action.
        </p>
      </div>

      {/* SECTION 7 */}
      <div>
        <h4 className="mt-4 fw-semibold">7. Investigation Process</h4>
        <p>
          Once a concern is reported:
        </p>
        <ul>
          <li>The Compliance Officer will review the complaint</li>
          <li>Preliminary assessment will determine next steps</li>
          <li>Internal or external investigation may be conducted</li>
          <li>Findings will be recorded and corrective actions taken</li>
        </ul>
      </div>

      {/* SECTION 8 */}
      <div>
        <h4 className="mt-4 fw-semibold">8. False or Malicious Reports</h4>
        <p>
          Reports made with dishonest intent or without reasonable evidence may lead to disciplinary action.  
          However, genuine reports made in good faith will not be penalized even if proven wrong.
        </p>
      </div>

      {/* SECTION 9 */}
      <div>
        <h4 className="mt-4 fw-semibold">9. Policy Review</h4>
        <p>
          This policy may be updated or revised periodically to ensure compliance  
          with legal standards and business requirements.
        </p>
      </div>

      {/* CONTACT */}
      <div>
        <h4 className="mt-4 fw-semibold">10. Contact for Queries</h4>
        <p>
          For clarification or assistance regarding this policy, please contact:
        </p>
        <p><strong>Compliance Department</strong></p>
        <p>Email: compliance@smartmind.com</p>
        <p>Phone: +91-XXXXXXXXXX</p>
      </div>

    </Container>
  );
};

export default WhistleBlowerPolicy;
