import React from 'react';

interface Props {
  appName: string;
  contact: string;
}

const DefaultPrivacyPolicy: React.FC<Props> = ({ appName, contact }) => {
  return (
    <div className="max-w-7xl">
      <div className="text-4xl">Privacy Policy for {appName}</div>
      <div className="text-xl mt-8">{appName} ("we," "us," or "our") respects your privacy and is committed to protecting it through our compliance with this policy.</div>
      <div className="text-xl mt-4">This privacy policy applies to the {appName} mobile application (the "App"), and outlines that no user information is collected during the use of the App.</div>
      <div className="text-2xl font-bold mt-8">Information We Do Not Collect</div>
      <div className="text-xl mt-4">The App does not collect any personal information about you. It does not require any registration or sign-in process, and it does not collect any user-provided data.</div>
      <div className="text-2xl font-bold mt-8">Data Collection</div>
      <div className="text-xl mt-4">We do not collect, store, or transmit any user data or information from your device while using the App. Your privacy is of utmost importance to us, and we do not engage in any data collection practices.</div>
      <div className="text-2xl font-bold mt-8">Third-Party Access</div>
      <div className="text-xl mt-4">The App does not share any information with third parties, and it does not integrate with any third-party services or APIs that would require access to user data.</div>
      <div className="text-2xl font-bold mt-8">Data Security</div>
      <div className="text-xl mt-4">While no data is collected, we still take reasonable measures to protect the information accessed by the App, including ensuring that only necessary permissions are requested and adhering to industry-standard security practices.</div>
      <div className="text-2xl font-bold mt-8">Changes to This Privacy Policy</div>
      <div className="text-xl mt-4">We reserve the right to update or modify this privacy policy at any time. Any changes we make will be reflected on this page. We encourage you to review this privacy policy periodically for any updates.</div>
      <div className="text-2xl font-bold mt-8">Contact Us</div>
      <div className="text-xl mt-4">If you have any questions or concerns about this privacy policy or our practices regarding your information, please contact us at {contact}.</div>
      <div className="text-xl mt-4">By using the App, you signify your acceptance of this policy. If you do not agree to this policy, please do not use the App. Your continued use of the App following the posting of changes to this policy will be deemed your acceptance of those changes.</div>
    </div>
  );
};

export default DefaultPrivacyPolicy;
