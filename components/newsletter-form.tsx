"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <form
      onSubmit={onSubmit}
      className="mt-6 flex max-w-md items-center gap-2 rounded-full border border-border bg-surface-2 p-1.5"
    >
      <input
        type="email"
        required
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email for early drops"
        className="flex-1 bg-transparent px-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
      />
      <button
        type="submit"
        className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm font-medium text-white transition hover:bg-primary/90"
      >
        {submitted ? (
          <>
            <Check className="h-4 w-4" /> Subscribed
          </>
        ) : (
          "Subscribe"
        )}
      </button>
    </form>
  );
};

export default NewsletterForm;
