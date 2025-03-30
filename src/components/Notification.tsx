"use client";
import { useState } from "react";
import { Bell, MoveRight } from "lucide-react";

function Notification() {
  const [userEmail, setUserEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  async function handleBtnClick() {
    if (!userEmail || !userEmail.includes("@")) {
      alert("Please enter a valid email address.");
      return;
    }
    setIsLoading(true);
    const res = await fetch("/api/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail }),
    });
    if (res.status === 200) {
      alert(
        "Thank you for subscribing! We will notify you about upcoming contests and opportunities."
      );
      setUserEmail("");
      setIsLoading(false);
    } else if (res.status === 409) {
      alert("This email is already registered. Please use a different email.");
      setUserEmail("");
      setIsLoading(false);
    } else {
      alert("Something went wrong. Please try again later.");
      setUserEmail("");
      setIsLoading(false);
    }
  }

  return (
    <div className="w-[40%] mx-auto shadow-md">
      <div className="w-full p-4 rounded-t-xl bg-gradient-to-br from-blue-500 to-purple-500 flex flex-col justify-center items-center">
        <div className="w-fit p-2 rounded-full border-4 border-white">
          <Bell className="w-16 h-16 text-white" />
        </div>
        <p className="text-white font-bold text-2xl">Never Miss a Contest!</p>
        <p className="text-white font-light text-lg text-center">
          Register your email to get notified about upcoming contests and
          opportunities.
        </p>
      </div>
      <div className="w-full p-4 rounded-b-xl bg-neutral-100">
        <div className="flex items-center justify-center gap-x-2 py-8">
          <input
            className="w-[60%] h-12 p-4 border-2 rounded-lg"
            type="email"
            placeholder="Enter your email address"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
          <button
            onClick={handleBtnClick}
            className="bg-purple-500 p-2 rounded-lg hover:bg-purple-400 transition duration-200 ease-in-out"
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="w-8 h-8 text-xl text-white animate-bounce">
                ...
              </div>
            ) : (
              <MoveRight className="w-8 h-8 text-white" />
            )}
          </button>
        </div>
        <p className="text-center text-neutral-500">
          We respect your privacy and will never share your email with third
          parties.
        </p>
      </div>
    </div>
  );
}

export default Notification;
