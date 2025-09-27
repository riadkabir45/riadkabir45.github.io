import ContactCard from "@/components/ContactCard";
import Page from "@/components/Page";
import Image from "next/image";

function Contact() {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors">
            <Page className="container mx-auto px-4 py-16">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <div className="relative inline-block mb-8">
                        <Image 
                            className="rounded-full mx-auto shadow-2xl border-4 border-white dark:border-gray-800 hover:shadow-3xl transition-all duration-300" 
                            priority={true} 
                            src="/profile.png" 
                            alt="Profile Picture" 
                            width={200} 
                            height={200} 
                        />
                        <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-green-500 rounded-full border-4 border-white dark:border-gray-800 flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                        </div>
                    </div>
                    
                    <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent mb-4">
                        Let's Connect
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-2">
                        Ready to collaborate, discuss ideas, or just say hello?
                    </p>
                    <p className="text-lg text-gray-500 dark:text-gray-500 max-w-xl mx-auto">
                        I'm always open to interesting conversations and new opportunities.
                    </p>
                </div>

                {/* Contact Methods Grid */}
                <div className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                        <ContactCard 
                            icon="nf nf-fa-envelope" 
                            detail="riadkabir45@gmail.com"
                            title="Email"
                            description="Best for professional inquiries"
                        />
                        <ContactCard 
                            icon="nf nf-fa-phone" 
                            detail="+8801795019802"
                            title="Phone"
                            description="Available during business hours"
                        />
                        <ContactCard 
                            icon="nf nf-fa-discord" 
                            detail="erza5084"
                            title="Discord"
                            description="For quick chats and discussions"
                        />
                        <ContactCard 
                            icon="nf nf-fa-github" 
                            detail="github.com/riadkabir45"
                            title="GitHub"
                            description="Check out my code and projects"
                        />
                        <ContactCard 
                            icon="https://play-lh.googleusercontent.com/vRKRkR4rhkz-d_xBbWXE8F-9hpLIH4SCXrNrrPoFexOTui3thkYH8madyxGj30CQrQLnH9jWcnPT05uCjqwo7nM=s48-rw" 
                            detail="Riadkabir45"
                            title="Gaming"
                            description="Let's game together!"
                        />
                        <ContactCard 
                            icon="nf nf-fa-linkedin" 
                            detail="linkedin.com/in/riadkabir45"
                            title="LinkedIn"
                            description="Professional networking"
                        />
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
                        Technologies I Work With
                    </h2>
                    
                    {/* Frontend */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center">Frontend & Styling</h3>
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {["HTML5", "CSS3", "Sass", "Tailwind CSS", "Javascript", "React.js", "NextJS", "Bootstrap", "Shadcn"].map((tech) => (
                                <span key={tech} className="px-4 py-2 bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full border border-blue-200 dark:border-blue-800 text-sm font-medium hover:bg-blue-100 dark:hover:bg-blue-900/30 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Backend & Database */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center">Backend & Database</h3>
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {["Rest API", "Spring", "Django", "PHP", "SQL", "Supabase"].map((tech) => (
                                <span key={tech} className="px-4 py-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 rounded-full border border-green-200 dark:border-green-800 text-sm font-medium hover:bg-green-100 dark:hover:bg-green-900/30 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Languages & Tools */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center">Languages & Development</h3>
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {["C/CPP", "Regex", "Bash", "Linux", "Docker", "Git & Github", "QT5", "SDL"].map((tech) => (
                                <span key={tech} className="px-4 py-2 bg-purple-50 dark:bg-purple-900/20 text-purple-700 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-800 text-sm font-medium hover:bg-purple-100 dark:hover:bg-purple-900/30 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Blockchain & Web3 */}
                    <div className="mb-8">
                        <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center">Blockchain & Web3</h3>
                        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                            {["Solidity", "BlockChain", "Web3"].map((tech) => (
                                <span key={tech} className="px-4 py-2 bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 rounded-full border border-orange-200 dark:border-orange-800 text-sm font-medium hover:bg-orange-100 dark:hover:bg-orange-900/30 transition-colors">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-2xl p-8 border border-blue-200 dark:border-blue-800">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-gray-100 mb-4">
                        Ready to Start a Conversation?
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 max-w-2xl mx-auto">
                        Whether you have a project in mind, want to collaborate, or just want to chat about technology, I'd love to hear from you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="mailto:riadkabir45@gmail.com"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Send Email
                        </a>
                        <a 
                            href="/"
                            className="inline-flex items-center gap-3 px-8 py-4 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors font-medium text-lg"
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                            </svg>
                            Back to Home
                        </a>
                    </div>
                </div>
            </Page>
        </div>
    );
}

export default Contact;