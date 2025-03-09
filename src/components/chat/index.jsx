import { FiSend, FiMenu, FiPlus } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { format } from "date-fns";

const totalChatDB = [
    {
        id: 1, title: "General Chat", messages: [
            {
                id: 1,
                text: "Hello! How can I assist you today?",
                sender: "bot",
                timestamp: new Date()
            }
        ]
    },
    { id: 2, title: "Technical Support", messages: [] },
];

const ChatApp = () => {

    const [chatTopics, setChatTopics] = useState(totalChatDB);

    const [messages, setMessages] = useState(chatTopics[0].messages);

    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const [currentChatId, setCurrentChatId] = useState(1);
    const [inputMessage, setInputMessage] = useState("");
    const [isTyping, setIsTyping] = useState(false);

    const chatContainerRef = useRef(null);


    useEffect(() => {
        const currentChat = chatTopics.find(chat => chat.id === currentChatId);
        setMessages(currentChat.messages);
    }, [currentChatId, chatTopics]);


    const scrollToBottom = () => {
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    };

    useEffect(() => scrollToBottom(), [messages]);


    const handleNewChat = () => {
        const newChat = {
            id: Date.now(),
            title: `New Chat ${chatTopics.length + 1}`,
            messages: []
        };
        setChatTopics([...chatTopics, newChat]);
        setCurrentChatId(newChat.id);
    };

    const handleSendMessage = async (e) => {
        e.preventDefault();
        if (!inputMessage.trim()) return;

        const newMessage = {
            id: Date.now(),
            text: inputMessage,
            sender: "user",
            timestamp: new Date()
        };

        const updatedTopics = chatTopics.map(chat =>
            chat.id === currentChatId
                ? { ...chat, messages: [...chat.messages, newMessage] }
                : chat
        );

        setChatTopics(updatedTopics);
        setMessages(updatedTopics.find(chat => chat.id === currentChatId).messages);
        setInputMessage("");
        setIsTyping(true);

        try {
            setTimeout(() => {
                const botResponse = {
                    id: Date.now() + 1,
                    text: "This is a sample bot response. In a real application, this would be connected to an API.",
                    sender: "bot",
                    timestamp: new Date()
                };

                const finalTopics = updatedTopics.map(chat => {
                    if (chat.id === currentChatId) {
                        return { ...chat, messages: [...chat.messages, botResponse] };
                    }
                    return chat;
                });

                setChatTopics(finalTopics);
                setMessages(finalTopics.find(chat => chat.id === currentChatId).messages);
                setIsTyping(false);
            }, 1000);
        } catch (error) {
            console.error("Error sending message:", error);
            setIsTyping(false);
        }
    };


    const handleKeyPress = (e) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage(e);
        }
    };


    return (
        <div className="flex h-screen bg-[#F5F5F5]">
            <div className={`${isSidebarOpen ? 'w-64' : 'w-0'} bg-white shadow-lg transition-all duration-300 overflow-hidden`}>
                <div className="p-4">
                    <button
                        onClick={handleNewChat}
                        className="w-full flex items-center justify-center space-x-2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                        <FiPlus /> <span>New Chat</span>
                    </button>
                    <div className="mt-4 space-y-2">
                        {chatTopics.map(chat => (
                            <button
                                key={chat.id}
                                onClick={() => setCurrentChatId(chat.id)}
                                className={`w-full p-2 text-left rounded-lg transition-colors ${currentChatId === chat.id ? 'bg-blue-100 text-blue-700' : 'hover:bg-gray-100'}`}
                            >
                                {chat.title}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <div className="flex flex-col flex-1">
                <header className="bg-white shadow-sm p-4 flex items-center">
                    <button
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                        className="p-2 hover:bg-gray-100 rounded-lg mr-4"
                    >
                        <FiMenu />
                    </button>
                    <h1 className="text-xl font-semibold">
                        {chatTopics.find(chat => chat.id === currentChatId)?.title}
                    </h1>
                </header>

                <div
                    ref={chatContainerRef}
                    className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth"
                >
                    <AnimatePresence>
                        {messages.map((message) => (
                            <motion.div
                                key={message.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0 }}
                                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] md:max-w-[60%] p-4 rounded-lg ${message.sender === "user"
                                        ? "bg-[#E6F2FF] text-right"
                                        : "bg-[#F0F0F0]"
                                        }`}
                                >
                                    <p className="text-gray-800 text-base">{message.text}</p>
                                    <span className="text-xs text-gray-500 mt-2 block">
                                        {format(message.timestamp, "HH:mm")}
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                        {isTyping && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="flex justify-start"
                            >
                                <div className="bg-[#F0F0F0] p-4 rounded-lg">
                                    <div className="flex space-x-2">
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                <form
                    onSubmit={handleSendMessage}
                    className="p-4 bg-white border-t border-gray-200"
                >
                    <div className="flex space-x-2 max-w-4xl mx-auto">
                        <textarea
                            value={inputMessage}
                            onChange={(e) => setInputMessage(e.target.value)}
                            onKeyPress={handleKeyPress}
                            placeholder="Type your message..."
                            className="flex-1 resize-none border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            rows={1}
                            style={{ minHeight: '44px', maxHeight: '160px' }}
                            aria-label="Message input"
                        />
                        <button
                            type="submit"
                            disabled={!inputMessage.trim()}
                            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            aria-label="Send message"
                        >
                            <FiSend className="w-5 h-5" />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ChatApp;