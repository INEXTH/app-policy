import React from 'react';

interface Props {
  appName: string;
  contact: string;
}

const BluetoothAndCameraPrivacyPolicy: React.FC<Props> = ({ appName, contact }) => {
  return (
    <div className="max-w-7xl">
      <div className="text-4xl">Privacy Policy for {appName}</div>
      <div className="text-xl mt-8">{appName} ("we," "us," or "our") respects your privacy and is committed to protecting it through our compliance with this policy.</div>
      <div className="text-xl mt-4">This privacy policy applies to the {appName} mobile application (the "App"), and outlines the types of information we may collect from you or that you may provide when you use the App. It also describes how we collect, use, maintain, protect, and disclose that information.</div>
      <div className="text-2xl font-bold mt-8">Information We Collect</div>
      <div className="text-xl mt-4">The App does not collect any personal information about you. It does not require any registration or sign-in process, and it does not collect any user-provided data.</div>
      <div className="text-2xl font-bold mt-8">Bluetooth Permission</div>
      <div className="text-xl mt-4">The App requires Bluetooth permission solely for the purpose of establishing a connection with an external device, as described in the App's functionality. It does not access or collect any personal information via Bluetooth.</div>
      <div className="text-2xl font-bold mt-8">Camera Permission</div>
      <div className="text-xl mt-4">The App requires access to your device's camera solely for the purpose of enabling specific features or functionalities within the App. It does not capture, store, or transmit any images or videos from your device without your explicit consent.</div>
      <div className="text-2xl font-bold mt-8">Use of Information</div>
      <div className="text-xl mt-4">The Bluetooth permission is used solely to facilitate the functionality of the App, allowing it to communicate and establish connections with external devices. The Camera permission is used solely for enabling specific features or functionalities within the App that require access to your device's camera. No information is collected, stored, or transmitted from the user's device during these processes.</div>
      <div className="text-2xl font-bold mt-8">Third-Party Access</div>
      <div className="text-xl mt-4">The App does not share any information with third parties, and it does not integrate with any third-party services or APIs that would require access to user data.</div>
      <div className="text-2xl font-bold mt-8">Data Security</div>
      <div className="text-xl mt-4">We take reasonable measures to protect the information collected through the App against unauthorized access, alteration, disclosure, or destruction. However, please be aware that no data transmission over the internet or method of electronic storage is completely secure, and we cannot guarantee the absolute security of your information.</div>
      <div className="text-2xl font-bold mt-8">Changes to This Privacy Policy</div>
      <div className="text-xl mt-4">We reserve the right to update or modify this privacy policy at any time. Any changes we make will be reflected on this page. We encourage you to review this privacy policy periodically for any updates.</div>
      <div className="text-2xl font-bold mt-8">Contact Us</div>
      <div className="text-xl mt-4">If you have any questions or concerns about this privacy policy or our practices regarding your information, please contact us at {contact}.</div>
      <div className="text-xl mt-4">By using the App, you signify your acceptance of this policy. If you do not agree to this policy, please do not use the App. Your continued use of the App following the posting of changes to this policy will be deemed your acceptance of those changes.</div>
    </div>
  );
};

export default BluetoothAndCameraPrivacyPolicy;
