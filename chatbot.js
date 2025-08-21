// Chatbot functionality
document.addEventListener('DOMContentLoaded', function() {
    const chatbotToggle = document.getElementById('chatbot-toggle');
    const chatbotWindow = document.getElementById('chatbot-window');
    const chatbotClose = document.getElementById('chatbot-close');
    const chatbotInput = document.getElementById('chatbot-input');
    const chatbotSend = document.getElementById('chatbot-send');
    const chatbotMessages = document.getElementById('chatbot-messages');

    // Predefined responses
    const responses = {
        greetings: [
            "Dobrý den! Jak vám mohu pomoci?",
            "Ahoj! V čem vám můžu být nápomocen?",
            "Zdravím! Mám pro vás nějaké informace?"
        ],
        services: [
            "Nabízíme služby v oblasti fúzí a akvizic, podnikového poradenství a oceňování společností. O kterou službu máte zájem?",
            "Specializujeme se na M&A transakce, strategické poradenství a oceňování podniků. Chcete vědět více o některé oblasti?"
        ],
        contact: [
            "Můžete nás kontaktovat na emailu info@adnp.cz nebo na adrese Opletalova 39, Praha 1. Rádi si s vámi domluvíme osobní schůzku.",
            "Nejlepší je nás kontaktovat na info@adnp.cz. Také můžete vyplnit náš kontaktní formulář na stránce."
        ],
        industries: [
            "Pracujeme napříč mnoha odvětvími - nemovitosti, technologie, zdravotnictví, retail, průmysl a další. Které odvětví vás zajímá?",
            "Máme zkušenosti s transakcemi v oblasti nemovitostí, IT, zdravotnictví, výroby, energetiky a dalších sektorech."
        ],
        default: [
            "To je zajímavá otázka. Pro detailní odpověď vás prosím kontaktujte přímo na info@adnp.cz nebo si domluvte schůzku.",
            "Děkuji za váš dotaz. Pro komplexní odpověď doporučuji kontaktovat naše experty na info@adnp.cz.",
            "Rádi vám s tím pomůžeme! Pro podrobnosti nás prosím kontaktujte na info@adnp.cz."
        ]
    };

    // Keywords for response categorization
    const keywords = {
        greetings: ['ahoj', 'dobrý den', 'zdravím', 'čau', 'hello', 'hi'],
        services: ['služby', 'poradenství', 'fúze', 'akvizice', 'm&a', 'oceňování', 'service'],
        contact: ['kontakt', 'email', 'telefon', 'schůzka', 'meeting', 'contact'],
        industries: ['odvětví', 'sektor', 'průmysl', 'nemovitosti', 'technologie', 'industry']
    };

    if (!chatbotToggle || !chatbotWindow) return;

    // Toggle chatbot window
    chatbotToggle.addEventListener('click', function() {
        chatbotWindow.classList.toggle('active');
    });

    // Close chatbot window
    if (chatbotClose) {
        chatbotClose.addEventListener('click', function() {
            chatbotWindow.classList.remove('active');
        });
    }

    // Send message function
    function sendMessage() {
        const message = chatbotInput.value.trim();
        if (!message) return;

        // Add user message
        addMessage(message, 'user');
        chatbotInput.value = '';

        // Generate bot response
        setTimeout(() => {
            const response = generateResponse(message);
            addMessage(response, 'bot');
        }, 500);
    }

    // Add message to chat
    function addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const messageText = document.createElement('p');
        messageText.textContent = text;
        messageDiv.appendChild(messageText);
        
        chatbotMessages.appendChild(messageDiv);
        chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
    }

    // Generate response based on keywords
    function generateResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for keyword matches
        for (const category in keywords) {
            if (keywords[category].some(keyword => lowerMessage.includes(keyword))) {
                const responseArray = responses[category];
                return responseArray[Math.floor(Math.random() * responseArray.length)];
            }
        }
        
        // Default response
        return responses.default[Math.floor(Math.random() * responses.default.length)];
    }

    // Send message on button click
    if (chatbotSend) {
        chatbotSend.addEventListener('click', sendMessage);
    }

    // Send message on Enter key
    if (chatbotInput) {
        chatbotInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }

    // Close chatbot when clicking outside
    document.addEventListener('click', function(e) {
        if (!chatbotToggle.contains(e.target) && !chatbotWindow.contains(e.target)) {
            chatbotWindow.classList.remove('active');
        }
    });
});