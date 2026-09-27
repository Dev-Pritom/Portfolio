import Link from "next/link";
import { CheckCircle2, ArrowLeft, Mail } from "lucide-react";

export const metadata = {
  title: "Message Sent | Pritom Saha",
};

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-950 px-6">
      <div className="max-w-md w-full bg-white dark:bg-gray-800 rounded-2xl shadow-md p-10 text-center space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center">
            <CheckCircle2
              className="w-10 h-10 text-green-500"
              strokeWidth={1.5}
            />
          </div>
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-2xl font-semibold">Message Sent!</h1>
          <p className="text-muted-foreground">
            Thanks for reaching out. I&apos;ve received your message and
            I&apos;ll get back to you as soon as possible.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 dark:border-gray-700 pt-6 space-y-4">
          <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
            <Mail className="w-4 h-4" />
            <span>pritomsaha480@gmail.com</span>
          </div>

          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-black text-white hover:bg-gray-800 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
