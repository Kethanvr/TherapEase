import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className="flex justify-center mb-6">
            <div className="rounded-xl bg-blue-600 p-3">
              <img
                src="https://s.tmimgcdn.com/scr/1200x750/352100/mindsol-logo-design-brain-ai-logo_352161-original.jpg"
                alt="TherapEase Logo"
                className="h-8 w-8 object-contain"
              />
            </div>
          </div>
          <h2 className="font-baloo-bhai text-3xl font-bold text-gray-900 mb-2">
            Join TherapEase
          </h2>
          <p className="text-gray-600">
            Start your mental health journey with AI support
          </p>
        </div>
        <div className="flex justify-center">
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: "bg-blue-600 hover:bg-blue-700 text-white",
                card: "shadow-lg",
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
