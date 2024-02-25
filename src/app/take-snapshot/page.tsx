import BluetoothAndCameraPrivacyPolicy from '../../component/bluetooth-camera';

export default function Home() {
  let appName = "Take Snapshot"
  let contact = "tech@inex.co.th"
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 items-center bg-white text-gray-800">
      <BluetoothAndCameraPrivacyPolicy appName={appName} contact={contact} />
    </main>
  );
}
