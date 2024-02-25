import DefaultPrivacyPolicy from '../../component/default';

export default function Home() {
  let appName = "LM3914 Controller"
  let contact = "tech@inex.co.th"
  return (
    <main className="flex min-h-screen flex-col justify-between p-24 items-center bg-white text-gray-800">
      <DefaultPrivacyPolicy appName={appName} contact={contact} />
    </main>
  );
}
