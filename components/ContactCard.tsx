interface ContactCardProps {
    icon: string;
    detail: string;
}

function ContactCard({ icon, detail }: ContactCardProps) {
    return (
        <div className="flex items-center p-4 border-b">
            {icon.slice(0, 2) === 'nf' ? <i className={`nf nf-fa-${icon} text-5xl`} /> : <img src={icon} alt="" className="w-12 h-12 mr-4" />}
            <span className="ml-4">{detail}</span>
        </div>
    );
}

export default ContactCard;