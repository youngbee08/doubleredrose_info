import React, { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "2348140041861";

const ContactPage: React.FC = () => {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange =
    (key: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [key]: e.target.value }));
    };

  const buildWhatsAppLink = () => {
    const text =
      `Hello, my name is ${form.fullName || "—"}.\n\n` +
      `Email: ${form.email || "—"}\n` +
      `Subject: ${form.subject || "General enquiry"}\n\n` +
      `Message:\n${form.message || "—"}`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.fullName || !form.email || !form.message) {
      toast.error("Please fill your name, email, and message.");
      return;
    }

    window.open(buildWhatsAppLink(), "_blank");
  };

  return (
    <section className="py-2">
      <div className="flex flex-col gap-2">
        <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-tetiary">
          Contact Us
        </h1>
        <p className="text-sm sm:text-base text-neutral-soft max-w-2xl">
          Fill the form below and continue the conversation on WhatsApp.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
        <div className="rounded-2xl border border-secondary-dark/70 bg-white p-5 sm:p-6 shadow-md shadow-black/5">
          <h2 className="font-display text-lg sm:text-xl font-extrabold text-tetiary">
            Send a Message
          </h2>

          <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-4">
            <div>
              <label className="text-[11px] font-bold tracking-widest uppercase text-neutral-soft">
                Full name
              </label>
              <input
                value={form.fullName}
                onChange={onChange("fullName")}
                placeholder="Enter your name"
                className="mt-2 w-full rounded-xl border border-secondary-dark/70 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold tracking-widest uppercase text-neutral-soft">
                Email address
              </label>
              <input
                type="email"
                value={form.email}
                onChange={onChange("email")}
                placeholder="name@example.com"
                className="mt-2 w-full rounded-xl border border-secondary-dark/70 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold tracking-widest uppercase text-neutral-soft">
                Subject
              </label>
              <input
                value={form.subject}
                onChange={onChange("subject")}
                placeholder="How can we help?"
                className="mt-2 w-full rounded-xl border border-secondary-dark/70 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>

            <div>
              <label className="text-[11px] font-bold tracking-widest uppercase text-neutral-soft">
                Message
              </label>
              <textarea
                rows={5}
                value={form.message}
                onChange={onChange("message")}
                placeholder="Your message here..."
                className="mt-2 w-full resize-none rounded-xl border border-secondary-dark/70 bg-white px-4 py-3 text-sm outline-none focus:border-primary"
              />
            </div>
            <button
              type="submit"
              className="mt-1 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-white shadow-md shadow-black/10 hover:brightness-110 transition"
            >
              Continue on WhatsApp
              <span className="text-lg">›</span>
            </button>
          </form>
        </div>
        <div className="flex flex-col gap-6">
          <div className="rounded-2xl border border-secondary-dark/70 bg-white overflow-hidden shadow-md shadow-black/5">
            <div className="px-5 sm:px-6 py-4 border-b border-secondary-dark/60">
              <h2 className="font-display text-lg sm:text-xl font-extrabold text-tetiary">
                Find Our Office
              </h2>
            </div>

            <div className="aspect-16/11 sm:aspect-16/10">
              <iframe
                title="Office location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.488101937794!2d3.9333675!3d7.411104699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103992cf6bf7c96b%3A0xba663bd0cecd4cb9!2sBcos%20Road%2C%20Ibadan%20200258%2C%20Oyo!5e0!3m2!1sen!2sng!4v1770652620165!5m2!1sen!2sng"
                width="600"
                height="450"
                loading="lazy"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a
              href="tel:+234814 004 1861"
              className="rounded-2xl border border-secondary-dark/70 bg-white p-4 shadow-md shadow-black/5 hover:-translate-y-0.5 transition"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <HiOutlinePhone className="text-xl" />
              </div>
              <p className="mt-3 text-sm font-bold text-tetiary">Call</p>
              <p className="mt-1 text-xs text-neutral-soft">Tap to call</p>
            </a>

            <a
              href="mailto:hello@zenithdevtech.name.ng"
              className="rounded-2xl border border-secondary-dark/70 bg-white p-4 shadow-md shadow-black/5 hover:-translate-y-0.5 transition"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <HiOutlineMail className="text-xl" />
              </div>
              <p className="mt-3 text-sm font-bold text-tetiary">Email</p>
              <p className="mt-1 text-xs text-neutral-soft">Send an email</p>
            </a>

            <a
              href={buildWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-secondary-dark/70 bg-white p-4 shadow-md shadow-black/5 hover:-translate-y-0.5 transition"
            >
              <div className="h-10 w-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center">
                <FaWhatsapp className="text-[#25D366] text-xl" />
              </div>
              <p className="mt-3 text-sm font-bold text-tetiary">WhatsApp</p>
              <p className="mt-1 text-xs text-neutral-soft">Chat instantly</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
