interface ContactCardProps {
    icon: string;
    detail: string;
    title?: string;
    description?: string;
}

function ContactCard({ icon, detail, title, description }: ContactCardProps) {
    if (title && description) {
        // Enhanced card layout with title and description
        return (
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg hover:scale-105 transition-all duration-300 group">
                <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-blue-50 dark:bg-blue-900/30 rounded-lg group-hover:bg-blue-100 dark:group-hover:bg-blue-900/50 transition-colors">
                        {icon.slice(0, 2) === 'nf' ? (
                            <i className={`${icon} text-2xl text-blue-600 dark:text-blue-400`} />
                        ) : (
                            <img src={icon} alt="" className="w-6 h-6" />
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                            {title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                            {description}
                        </p>
                        <p className="text-sm font-medium text-blue-600 dark:text-blue-400 break-all">
                            {detail}
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    // Fallback to original simple layout
    return (
        <div className="flex items-center p-4 border-b border-gray-200 dark:border-gray-700">
            {icon.slice(0, 2) === 'nf' ? (
                <i className={`${icon} text-5xl text-gray-600 dark:text-gray-400`} />
            ) : (
                <img src={icon} alt="" className="w-12 h-12 mr-4" />
            )}
            <span className="ml-4 text-gray-700 dark:text-gray-300">{detail}</span>
        </div>
    );
}

export default ContactCard;