import ContactCard from "@/components/ContactCard";
import Page from "@/components/Page";
import Image from "next/image";

function Contact() {
    return (
        <Page className="flex flex-col items-center justify-center ">
            <Image className="rounded-full mx-auto shadow-md mb-40" priority={true} src="/profile.png" alt="Profile Picture" width={200} height={200} />
            <div className="flex flex-row items-center justify-center flex-wrap gap-4">
                <ContactCard icon="nf nf-fa-envelope" detail="riadkabir45@gmail.com" />
                <ContactCard icon="nf nf-fa-phone" detail="+8801795019802" />
                <ContactCard icon="nf nf-fa-discord" detail="erza5084" />
                <ContactCard icon="nf nf-fa-github" detail="github.com/riadkabir45" />
                <ContactCard icon="https://play-lh.googleusercontent.com/vRKRkR4rhkz-d_xBbWXE8F-9hpLIH4SCXrNrrPoFexOTui3thkYH8madyxGj30CQrQLnH9jWcnPT05uCjqwo7nM=s48-rw" detail="Riadkabir45" />
            </div>
        </Page>
    );
}

export default Contact;