import BluetoothPrivacyPolicy from '../../component/bluetooth';

export default function Home() {
  let appName = "Bluetooth Control [Tablet]"
  let contact = "tech@inex.co.th"
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 items-center bg-white text-gray-800">
      <BluetoothPrivacyPolicy appName={appName} contact={contact} />
    </main>
  );
}
