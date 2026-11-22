import { ContactRings } from "@/src/components/Decorations";
import Section, { Container } from "@/src/components/Section";
import { contactSection, site } from "@/src/data/content";

function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function EmailIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function LocationIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 21s7-4.5 7-11a7 7 0 1 0-14 0c0 6.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export default function Contact() {
  return (
    <Section
      id={contactSection.id}
      className="contact flex-col items-stretch justify-between text-center before:bg-[radial-gradient(800px_420px_at_50%_100%,rgba(42,168,255,.25),transparent_70%)]"
      deco={<ContactRings />}
    >
      <Container className="flex w-full flex-1 flex-col items-center justify-center">
        <h2 className="mb-2 font-display text-[clamp(34px,5.6vw,80px)] leading-[1.1] font-medium">
          {contactSection.title}
        </h2>
        <p className="mx-auto mb-8 max-w-[640px] text-[clamp(14.5px,1.2vw,17px)] leading-[1.6] text-mut">
          {contactSection.description}
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <a
            href={site.whatsappUrl}
            className="inline-flex min-h-[46px] items-center justify-center gap-2 rounded-full bg-gradient-to-br from-[#2AA8FF] to-blue px-6 text-[15px] font-semibold text-white shadow-[0_8px_22px_rgba(14,127,184,.35)]"
            target="_blank"
            rel="noopener noreferrer"
          >
            {contactSection.whatsappCta}
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex min-h-[46px] items-center justify-center rounded-full border-[1.5px] border-tx/30 bg-white px-6 text-[15px] font-semibold"
          >
            {contactSection.emailCta}
          </a>
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-[30px] gap-y-3 text-[clamp(14px,1.15vw,16.5px)] text-tx">
          <a
            href={site.whatsappUrl}
            className="inline-flex items-center gap-2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsAppIcon className="h-[18px] w-[18px] shrink-0 text-[#25D366]" />
            <span>{site.phoneDisplay}</span>
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2"
          >
            <EmailIcon className="h-[18px] w-[18px] shrink-0 text-blue" />
            <span>{site.email}</span>
          </a>
          <span className="inline-flex items-center gap-2">
            <LocationIcon className="h-[18px] w-[18px] shrink-0 text-ad" />
            <span>{site.address}</span>
          </span>
        </div>
      </Container>
      <footer className="relative z-[1] pt-[18px] text-[13.5px] text-mut">
        <Container>{site.footer}</Container>
      </footer>
    </Section>
  );
}
